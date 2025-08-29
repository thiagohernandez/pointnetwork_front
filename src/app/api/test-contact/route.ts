import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Same validation schema as the main contact form
const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  privacidade: z.boolean().refine(val => val === true, 'Deve aceitar a política de privacidade'),
});

export async function POST(request: NextRequest) {
  try {
    console.log('🧪 [TEST] Starting contact form test...');
    
    // Get the raw body
    const rawBody = await request.text();
    console.log('🧪 [TEST] Raw request body:', rawBody);
    
    // Parse JSON
    const body = JSON.parse(rawBody);
    console.log('🧪 [TEST] Parsed JSON:', body);
    
    // Check each field individually
    console.log('🧪 [TEST] Field by field:');
    console.log('   body.nome:', typeof body.nome, '=', body.nome);
    console.log('   body.email:', typeof body.email, '=', body.email);
    console.log('   body.telefone:', typeof body.telefone, '=', body.telefone);
    console.log('   body.mensagem:', typeof body.mensagem, '=', body.mensagem);
    console.log('   body.privacidade:', typeof body.privacidade, '=', body.privacidade);
    
    // Validate with Zod
    console.log('🧪 [TEST] Validating with Zod...');
    const validatedData = contactSchema.parse(body);
    console.log('🧪 [TEST] Zod validation successful:', validatedData);
    
    // Test email template rendering
    const testEmailContent = `
      <h1>Test Email Content</h1>
      <p>Nome: ${validatedData.nome}</p>
      <p>Email: ${validatedData.email}</p>
      <p>Telefone: ${validatedData.telefone || 'N/A'}</p>
      <p>Mensagem: ${validatedData.mensagem}</p>
    `;
    
    console.log('🧪 [TEST] Generated email content:', testEmailContent);
    
    return NextResponse.json({
      success: true,
      message: 'Test completed successfully',
      data: {
        received: body,
        validated: validatedData,
        emailPreview: testEmailContent,
      }
    });

  } catch (error) {
    console.error('🧪 [TEST] Error:', error);
    
    if (error instanceof z.ZodError) {
      console.log('🧪 [TEST] Zod validation errors:', error.errors);
      return NextResponse.json({
        success: false,
        message: 'Validation failed',
        errors: error.errors,
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: 'Test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    }, { status: 500 });
  }
}