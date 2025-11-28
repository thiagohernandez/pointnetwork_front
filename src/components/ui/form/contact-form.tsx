"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

// Definindo o esquema de validação
const formSchema = z.object({
  nome: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um email válido.",
  }),
  telefone: z.string().optional(),
  mensagem: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }),
  privacidade: z.boolean().refine((val) => val === true, {
    message: "Você precisa aceitar a política de privacidade.",
  }),
});

// Tipo derivado do esquema
type FormValues = z.infer<typeof formSchema>;

export default function ContactForm({
  buttonVariant = "primary",
}: {
  buttonVariant?: "primary" | "secondary" | "green" | "destructive" | "outline";
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
  const recaptchaEnabled = !!siteKey;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      privacidade: false,
    },
  });

  async function onSubmit(data: FormValues) {
    // Always attempt submission - validation will show errors if needed
    const validation = formSchema.safeParse(data);
    if (!validation.success) {
      // Force form to show all errors
      const fieldErrors = validation.error.flatten().fieldErrors;
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        if (messages && messages.length > 0) {
          form.setError(field as keyof FormValues, {
            message: messages[0],
          });
        }
      });
      return;
    }

    setIsSubmitting(true);

    console.log("📋 Contact form data:", data);
    console.log("📋 Data types:", {
      nome: typeof data.nome,
      email: typeof data.email,
      telefone: typeof data.telefone,
      mensagem: typeof data.mensagem,
      privacidade: typeof data.privacidade,
    });
    console.log("📋 JSON stringify:", JSON.stringify(data));

    // Simulando envio do formulário
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        form.reset();
        setIsSubmitted(true);
      } else {
        throw new Error(result.message || "Erro ao enviar formulário");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // You might want to show an error message to the user here
      alert("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className="bg-green-50 p-8 rounded-lg text-center">
          <h3 className="text-xl font-semibold text-emerald-600 mb-1 tracking-tight">
            Mensagem enviada com sucesso!
          </h3>
          <p className="text-emerald-600 mb-4 tracking-tight">
            Agradecemos seu contato. Retornaremos em breve.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="bg-white text-slate-900 hover:bg-slate-100 mt-2 border-slate-300"
          >
            Enviar nova mensagem
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nome" {...field} className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PhoneInputWithCountry
                      international
                      defaultCountry="BR"
                      name={field.name}
                      rules={{ required: false }}
                      value={field.value || ""}
                      onChange={(value: any) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Mensagem"
                      {...field}
                      className="min-h-[100px] resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacidade"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-1 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-0.5 leading-none">
                    <FormLabel className="text-sm font-normal text-slate-600">
                      Li e aceito a{" "}
                      <Link
                        href="https://www.pointcondominio.com.br/paginas/politica-de-privacidade"
                        className="text-network-primary hover:underline"
                      >
                        política de privacidade
                      </Link>
                      .
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            {recaptchaEnabled && (
              <div className="pt-2">
                <ReCAPTCHA
                  sitekey={siteKey}
                  onChange={(token: any) => setRecaptchaToken(token)}
                />
              </div>
            )}
            <div className="flex w-full justify-start pt-2">
              <Button
                type="submit"
                disabled={isSubmitting}
                variant={buttonVariant ? buttonVariant : "primary"}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            {Object.keys(form.formState.errors).length > 0 && (
              <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <p className="text-sm text-red-600 font-medium mb-1">
                  Por favor, corrija os seguintes erros:
                </p>
                <ul className="text-sm text-red-600 list-disc list-inside space-y-1">
                  {form.formState.errors.nome && (
                    <li>Nome: {form.formState.errors.nome.message}</li>
                  )}
                  {form.formState.errors.email && (
                    <li>Email: {form.formState.errors.email.message}</li>
                  )}
                  {form.formState.errors.mensagem && (
                    <li>Mensagem: {form.formState.errors.mensagem.message}</li>
                  )}
                  {form.formState.errors.privacidade && (
                    <li>
                      Privacidade: {form.formState.errors.privacidade.message}
                    </li>
                  )}
                </ul>
              </div>
            )}
          </form>
        </Form>
      )}
    </div>
  );
}
