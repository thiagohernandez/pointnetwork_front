// Test script to verify SMTP configuration
// Run with: node test-email-config.js
// Make sure to create .env.local first with your credentials

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

async function testEmailConfig() {
  console.log('🔧 Testing PointNetwork SMTP Configuration...\n');

  const config = {
    host: process.env.SMTP_HOST || 'mail.pointnetwork.com.br',
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465,
    auth: {
      user: process.env.SMTP_USER || 'contato@pointnetwork.com.br',
      pass: process.env.SMTP_PASSWORD,
    },
  };

  console.log('📧 Configuration:');
  console.log(`   Host: ${config.host}`);
  console.log(`   Port: ${config.port}`);
  console.log(`   Secure: ${config.secure}`);
  console.log(`   User: ${config.auth.user}`);
  console.log(`   Password: ${config.auth.pass ? '***' + config.auth.pass.slice(-3) : 'NOT SET'}`);
  console.log('');

  if (!config.auth.pass) {
    console.log('❌ ERROR: SMTP_PASSWORD not set in .env.local');
    console.log('');
    console.log('Please create .env.local with:');
    console.log('SMTP_HOST=mail.pointnetwork.com.br');
    console.log('SMTP_PORT=465');
    console.log('SMTP_SECURE=true');
    console.log('SMTP_USER=contato@pointnetwork.com.br');
    console.log('SMTP_PASSWORD=your-email-password');
    return;
  }

  try {
    console.log('🔄 Creating transporter...');
    const transporter = nodemailer.createTransporter(config);

    console.log('🔄 Verifying connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');

    console.log('🔄 Sending test email...');
    const info = await transporter.sendMail({
      from: `"PointNetwork Test" <${config.auth.user}>`,
      to: 'contato@pointnetwork.com.br',
      subject: 'Teste de Configuração SMTP - ' + new Date().toLocaleString('pt-BR'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #667eea;">🎉 Teste de Email Funcionando!</h2>
          <p>Esta é uma mensagem de teste para verificar se a configuração SMTP está funcionando corretamente.</p>
          <div style="background: #f1f3f4; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <strong>Detalhes da configuração:</strong><br>
            Host: ${config.host}<br>
            Port: ${config.port}<br>
            Secure: ${config.secure}<br>
            User: ${config.auth.user}<br>
            Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
          </div>
          <p>Se você recebeu este email, a configuração está funcionando perfeitamente! 🚀</p>
        </div>
      `,
      text: `
        Teste de Email Funcionando!
        
        Esta é uma mensagem de teste para verificar se a configuração SMTP está funcionando corretamente.
        
        Detalhes da configuração:
        Host: ${config.host}
        Port: ${config.port}
        Secure: ${config.secure}
        User: ${config.auth.user}
        Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
        
        Se você recebeu este email, a configuração está funcionando perfeitamente!
      `
    });

    console.log('✅ Test email sent successfully!');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Response: ${info.response}`);
    console.log('');
    console.log('🎉 All tests passed! Check your inbox at contato@pointnetwork.com.br');

  } catch (error) {
    console.log('❌ ERROR:', error.message);
    console.log('');
    console.log('🔧 Troubleshooting tips:');
    console.log('   1. Verify your email password is correct');
    console.log('   2. Check if the email account exists and is active');
    console.log('   3. Ensure no firewall is blocking port 465');
    console.log('   4. Try connecting from your email client first');
    console.log('   5. Contact your email provider if issues persist');
  }
}

// Run the test
testEmailConfig();