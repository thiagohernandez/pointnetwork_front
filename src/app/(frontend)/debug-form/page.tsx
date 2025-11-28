"use client";

import { useState } from "react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  privacidade: boolean;
}

export default function DebugForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "João Silva",
    email: "joao@example.com",
    telefone: "+55 11 99999-9999",
    mensagem: "Esta é uma mensagem de teste para verificar se os dados estão sendo enviados corretamente.",
    privacidade: true,
  });

  const [debugInfo, setDebugInfo] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const testData = async () => {
    setLoading(true);
    setResult("");
    
    // Show form data in debug area
    setDebugInfo(`Dados do formulário:\n${JSON.stringify(formData, null, 2)}`);

    try {
      console.log("🧪 Sending test data:", formData);
      
      const response = await fetch("/api/test-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("🧪 Test result:", result);

      if (response.ok) {
        setResult("✅ Teste executado com sucesso! Verifique o console do servidor para logs detalhados.");
        setDebugInfo(prev => prev + `\n\nResultado da API:\n${JSON.stringify(result, null, 2)}`);
      } else {
        setResult(`❌ Erro no teste: ${result.message}`);
      }
    } catch (error) {
      console.error("🧪 Test error:", error);
      setResult(`❌ Erro na requisição: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(false);
    }
  };

  const sendReal = async () => {
    if (!confirm("Enviar email real para contato@pointnetwork.com.br?")) {
      return;
    }

    setLoading(true);
    setResult("");

    try {
      console.log("📧 Sending real email:", formData);
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("📧 Real email result:", result);

      if (response.ok) {
        setResult("✅ Email enviado com sucesso!");
      } else {
        setResult(`❌ Erro ao enviar: ${result.message}`);
      }
    } catch (error) {
      console.error("📧 Email error:", error);
      setResult(`❌ Erro na requisição: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">🧪 Debug - Contact Form</h1>
          <p className="text-gray-600 mb-8">Use este formulário para testar o envio de dados para a API.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Formulário de Teste</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone (opcional):
                  </label>
                  <input
                    type="text"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem:
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="privacidade"
                      checked={formData.privacidade}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 rounded"
                      required
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      Aceito a política de privacidade
                    </span>
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={testData}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Testando..." : "🧪 Testar Dados"}
                  </button>
                  
                  <button
                    type="button"
                    onClick={sendReal}
                    disabled={loading}
                    className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? "Enviando..." : "📧 Enviar Real"}
                  </button>
                </div>
              </div>
            </div>

            {/* Debug Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Debug Info</h2>
              
              {debugInfo && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Dados do Formulário:</h3>
                  <pre className="bg-gray-100 border border-gray-300 rounded-md p-4 text-xs overflow-auto">
                    {debugInfo}
                  </pre>
                </div>
              )}

              {result && (
                <div className={`p-4 rounded-md ${
                  result.includes('✅') 
                    ? 'bg-green-50 border border-green-200 text-green-700'
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {result}
                </div>
              )}

              <div className="mt-6 text-sm text-gray-600">
                <h3 className="font-medium mb-2">Instruções:</h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Clique em "🧪 Testar Dados" para testar sem enviar email</li>
                  <li>Verifique os logs no console do servidor</li>
                  <li>Clique em "📧 Enviar Real" para enviar email de verdade</li>
                  <li>Abra o Developer Tools (F12) para ver logs do browser</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}