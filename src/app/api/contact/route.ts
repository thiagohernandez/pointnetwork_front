import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validation schema matching the contact form
const contactSchema = z.object({
  nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().optional(),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  privacidade: z.boolean().refine(val => val === true, 'Deve aceitar a política de privacidade'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Debug logging
    console.log('📧 Received form data:', body);
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    console.log('✅ Validated data:', validatedData);
    
    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.pointnetwork.com.br',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'contato@pointnetwork.com.br',
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Debug individual fields
    console.log('🔍 Individual fields:');
    console.log('   Nome:', validatedData.nome);
    console.log('   Email:', validatedData.email);
    console.log('   Telefone:', validatedData.telefone);
    console.log('   Mensagem:', validatedData.mensagem);
    console.log('   Privacidade:', validatedData.privacidade);

    // Create the email content
    const mailOptions = {
      from: `"PointNetwork - Formulário de Contato" <${process.env.SMTP_USER || 'contato@pointnetwork.com.br'}>`, // sender address
      to: 'contato@pointnetwork.com.br', // recipient
      replyTo: validatedData.email, // reply-to address
      subject: `Nova mensagem de contato - ${validatedData.nome}`, // Subject line
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Nova Mensagem de Contato</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">PointNetwork - Formulário de Contato</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #667eea; margin-top: 0;">Informações do Contato</h2>
              
              <div style="margin-bottom: 20px;">
                <strong style="color: #555;">Nome:</strong>
                <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">${validatedData.nome || 'Não informado'}</p>
              </div>

              <div style="margin-bottom: 20px;">
                <strong style="color: #555;">Email:</strong>
                <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">
                  <a href="mailto:${validatedData.email}" style="color: #667eea; text-decoration: none;">${validatedData.email || 'Não informado'}</a>
                </p>
              </div>

              ${validatedData.telefone ? `
                <div style="margin-bottom: 20px;">
                  <strong style="color: #555;">Telefone:</strong>
                  <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">
                    <a href="tel:${validatedData.telefone}" style="color: #667eea; text-decoration: none;">${validatedData.telefone}</a>
                  </p>
                </div>
              ` : ''}

              <div style="margin-bottom: 20px;">
                <strong style="color: #555;">Mensagem:</strong>
                <div style="margin: 5px 0; padding: 15px; background: #f1f3f4; border-radius: 4px; white-space: pre-wrap;">${validatedData.mensagem || 'Não informado'}</div>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; font-size: 12px; color: #666;">
                <p><strong>Data de envio:</strong> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
                <p><strong>IP do remetente:</strong> ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'N/A'}</p>
              </div>
            </div>
          </div>

          <div style="background: #343a40; color: white; padding: 20px; text-align: center;">
            <p style="margin: 0; font-size: 14px;">
              Esta mensagem foi enviada através do formulário de contato do site PointNetwork.
            </p>
          </div>
        </div>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
        Nova mensagem de contato - PointNetwork

        Nome: ${validatedData.nome}
        Email: ${validatedData.email}
        ${validatedData.telefone ? `Telefone: ${validatedData.telefone}` : ''}

        Mensagem:
        ${validatedData.mensagem}

        ---
        Data de envio: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
        IP: ${request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'N/A'}
      `,
    };

    // Debug email content before sending
    console.log('📧 Email subject:', mailOptions.subject);
    console.log('📧 Email HTML preview (first 200 chars):', mailOptions.html.substring(0, 200));

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Message sent successfully! ID:', info.messageId);

    // Optional: Send a confirmation email to the user
    const confirmationMailOptions = {
      from: `"PointNetwork" <${process.env.SMTP_USER || 'contato@pointnetwork.com.br'}>`,
      to: validatedData.email,
      subject: 'Confirmação - Sua mensagem foi recebida',
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Mensagem Recebida!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">PointNetwork</p>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <p>Olá <strong>${validatedData.nome}</strong>,</p>
              
              <p>Recebemos sua mensagem e agradecemos pelo contato! Nossa equipe analisará sua solicitação e retornará o mais breve possível.</p>
              
              <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
                <p style="margin: 0;"><strong>Resumo da sua mensagem:</strong></p>
                <p style="margin: 10px 0 0 0; font-style: italic;">"${validatedData.mensagem.substring(0, 100)}${validatedData.mensagem.length > 100 ? '...' : ''}"</p>
              </div>
              
              <p>Se você tiver alguma dúvida adicional, não hesite em nos contatar novamente.</p>
              
              <p>Atenciosamente,<br><strong>Equipe PointNetwork</strong></p>
            </div>
          </div>

          <div style="background: #343a40; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Este é um email automático, não responda a este endereço.</p>
          </div>
        </div>
      `,
      text: `
        Olá ${validatedData.nome},

        Recebemos sua mensagem e agradecemos pelo contato! Nossa equipe analisará sua solicitação e retornará o mais breve possível.

        Resumo da sua mensagem: "${validatedData.mensagem.substring(0, 100)}${validatedData.mensagem.length > 100 ? '...' : ''}"

        Se você tiver alguma dúvida adicional, não hesite em nos contatar novamente.

        Atenciosamente,
        Equipe PointNetwork
      `,
    };

    // Send confirmation email to user
    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email enviado com sucesso',
        messageId: info.messageId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Dados inválidos', 
          errors: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Erro interno do servidor' 
      },
      { status: 500 }
    );
  }
}