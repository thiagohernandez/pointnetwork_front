import nodemailer from 'nodemailer';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
}

export interface ContactFormData {
  nome: string;
  email: string;
  telefone?: string;
  mensagem: string;
  privacidade: boolean;
}

// Create email transporter
export function createEmailTransporter(): nodemailer.Transporter {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.pointnetwork.com.br',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465,
    auth: {
      user: process.env.SMTP_USER || 'contato@pointnetwork.com.br',
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

// Generate HTML email template
export function generateContactEmailHTML(data: ContactFormData, request: Request): string {
  return `
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
            <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">${data.nome}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <strong style="color: #555;">Email:</strong>
            <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </p>
          </div>

          ${data.telefone ? `
            <div style="margin-bottom: 20px;">
              <strong style="color: #555;">Telefone:</strong>
              <p style="margin: 5px 0; padding: 10px; background: #f1f3f4; border-radius: 4px;">
                <a href="tel:${data.telefone}" style="color: #667eea; text-decoration: none;">${data.telefone}</a>
              </p>
            </div>
          ` : ''}

          <div style="margin-bottom: 20px;">
            <strong style="color: #555;">Mensagem:</strong>
            <div style="margin: 5px 0; padding: 15px; background: #f1f3f4; border-radius: 4px; white-space: pre-wrap;">${data.mensagem}</div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; font-size: 12px; color: #666;">
            <p><strong>Data de envio:</strong> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
            <p><strong>User Agent:</strong> ${(request as any).headers?.get?.('user-agent') || 'N/A'}</p>
          </div>
        </div>
      </div>

      <div style="background: #343a40; color: white; padding: 20px; text-align: center;">
        <p style="margin: 0; font-size: 14px;">
          Esta mensagem foi enviada através do formulário de contato do site PointNetwork.
        </p>
      </div>
    </div>
  `;
}

// Generate confirmation email HTML template
export function generateConfirmationEmailHTML(data: ContactFormData): string {
  return `
    <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Mensagem Recebida!</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">PointNetwork</p>
      </div>
      
      <div style="padding: 30px; background: #f8f9fa;">
        <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <p>Olá <strong>${data.nome}</strong>,</p>
          
          <p>Recebemos sua mensagem e agradecemos pelo contato! Nossa equipe analisará sua solicitação e retornará o mais breve possível.</p>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <p style="margin: 0;"><strong>Resumo da sua mensagem:</strong></p>
            <p style="margin: 10px 0 0 0; font-style: italic;">"${data.mensagem.substring(0, 100)}${data.mensagem.length > 100 ? '...' : ''}"</p>
          </div>
          
          <p>Se você tiver alguma dúvida adicional, não hesite em nos contatar novamente.</p>
          
          <p>Atenciosamente,<br><strong>Equipe PointNetwork</strong></p>
        </div>
      </div>

      <div style="background: #343a40; color: white; padding: 20px; text-align: center; font-size: 14px;">
        <p style="margin: 0;">Este é um email automático, não responda a este endereço.</p>
      </div>
    </div>
  `;
}

// Generate plain text email
export function generateContactEmailText(data: ContactFormData): string {
  return `
    Nova mensagem de contato - PointNetwork

    Nome: ${data.nome}
    Email: ${data.email}
    ${data.telefone ? `Telefone: ${data.telefone}` : ''}

    Mensagem:
    ${data.mensagem}

    ---
    Data de envio: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
  `;
}

// Generate confirmation text email
export function generateConfirmationEmailText(data: ContactFormData): string {
  return `
    Olá ${data.nome},

    Recebemos sua mensagem e agradecemos pelo contato! Nossa equipe analisará sua solicitação e retornará o mais breve possível.

    Resumo da sua mensagem: "${data.mensagem.substring(0, 100)}${data.mensagem.length > 100 ? '...' : ''}"

    Se você tiver alguma dúvida adicional, não hesite em nos contatar novamente.

    Atenciosamente,
    Equipe PointNetwork
  `;
}