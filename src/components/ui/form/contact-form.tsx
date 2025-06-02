"use client";

import { useState } from "react";
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
    setIsSubmitting(true);

    console.log(data);

    // Simulando envio do formulário
    // await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const response = await fetch(
        "https://pointid.com.br/api/send-email.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        form.reset();
      } else {
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
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
                        href="/politica-de-privacidade"
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
            <div className="flex w-full justify-start pt-2">
              <Button
                type="submit"
                disabled={isSubmitting || !form.formState.isValid}
                variant={buttonVariant ? buttonVariant : "primary"}
              >
                Enviar mensagem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
