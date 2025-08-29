# 📧 Nodemailer Contact Form Setup

Este guia explica como configurar o sistema de email do formulário de contato usando Nodemailer.

## 🚀 Configuração Rápida

### 1. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

### 2. Configurar PointNetwork Email

#### Para PointNetwork (Configuração Atual):
```env
SMTP_HOST=mail.pointnetwork.com.br
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contato@pointnetwork.com.br
SMTP_PASSWORD=sua-senha-do-email
```

**✅ Configuração PointNetwork:**
- **Host**: mail.pointnetwork.com.br  
- **Porta SMTP**: 465 (SSL/TLS seguro)
- **Usuário**: contato@pointnetwork.com.br
- **Senha**: Use a senha da conta de email
- **Autenticação**: Obrigatória
- **Portas adicionais**: IMAP 993, POP3 995

#### Para Gmail (Alternativo):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASSWORD=sua-senha-de-app
```

#### Para Outlook/Hotmail:
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@outlook.com
SMTP_PASSWORD=sua-senha
```

#### Para Yahoo:
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@yahoo.com
SMTP_PASSWORD=sua-senha-de-app
```

### 3. Para Servidor SMTP Personalizado:
```env
SMTP_HOST=mail.seudominio.com
SMTP_PORT=587  # ou 465 para SSL
SMTP_SECURE=false  # true para porta 465
SMTP_USER=contato@seudominio.com
SMTP_PASSWORD=sua-senha
```

## 📋 Funcionalidades

### ✅ O que o sistema faz:

1. **Validação de Dados**: Valida todos os campos do formulário
2. **Email Principal**: Envia email formatado para `contato@pointnetwork.com.br`
3. **Email de Confirmação**: Envia confirmação automática para o usuário
4. **Templates HTML**: Emails bonitos e responsivos
5. **Fallback de Texto**: Versão texto para clientes que não suportam HTML
6. **Logs de Segurança**: Registra IP e data de envio
7. **Error Handling**: Tratamento completo de erros

### 📧 Estrutura do Email Recebido:

- **Cabeçalho** com branding PointNetwork
- **Informações do contato** (nome, email, telefone)
- **Mensagem completa** formatada
- **Metadados** (data, IP, user agent)
- **Design responsivo** para todos os dispositivos

## 🔧 Teste Local

1. Configure as variáveis de ambiente
2. Execute o projeto: `npm run dev`
3. Acesse o formulário de contato
4. Preencha e envie uma mensagem de teste
5. Verifique os emails recebidos

## 🐛 Solução de Problemas

### Erro: "Authentication failed"
- ✅ Verifique se a senha de app está correta (Gmail)
- ✅ Confirme se 2FA está ativado (Gmail)
- ✅ Teste as credenciais em um cliente de email

### Erro: "Connection timeout"
- ✅ Verifique se o SMTP_HOST está correto
- ✅ Confirme se a porta está correta (587 ou 465)
- ✅ Teste se não há firewall bloqueando

### Email não chegando
- ✅ Verifique a pasta de spam
- ✅ Confirme se `contato@pointnetwork.com.br` existe
- ✅ Teste com outro endereço primeiro

### Erro de SSL/TLS
- ✅ Para porta 587: `SMTP_SECURE=false`
- ✅ Para porta 465: `SMTP_SECURE=true`
- ✅ Alguns servidores podem precisar de configurações especiais

## 🔒 Segurança

### ✅ Implementado:
- Validação de entrada com Zod
- Sanitização de dados HTML
- Rate limiting (configure no servidor)
- Logs de auditoria
- Headers de segurança

### 🚨 Recomendações:
1. **Nunca** commite credenciais no repositório
2. Use **senhas de app** em vez de senhas principais
3. Configure **rate limiting** em produção
4. Monitore **logs de erro** regularmente
5. Mantenha as **dependências** atualizadas

## 📁 Estrutura de Arquivos

```
src/
├── app/api/contact/
│   └── route.ts              # API endpoint
├── components/ui/form/
│   └── contact-form.tsx      # Formulário React
├── lib/
│   └── email.ts              # Utilitários de email
└── .env.local                # Variáveis de ambiente (não commitado)
```

## 🚀 Deploy em Produção

### Vercel:
1. Configure as variáveis de ambiente no dashboard
2. Deploy normalmente
3. Teste o formulário em produção

### Outros Provedores:
- Certifique-se de que as variáveis de ambiente estão configuradas
- Verifique se o provedor permite conexões SMTP
- Configure logs para monitoramento

## 📞 Suporte

Se você encontrar problemas:

1. Verifique os logs do console
2. Teste as credenciais SMTP separadamente
3. Confirme se todas as variáveis estão definidas
4. Verifique a documentação do seu provedor de email

---

**💡 Dica**: Para desenvolvimento, você pode usar serviços como [Ethereal](https://ethereal.email/) para testar emails sem enviar para endereços reais.