"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Send, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Bitte Name angeben"),
  email: z.string().email("Gültige E-Mail eingeben"),
  phone: z.string().optional(),
  occasion: z.string().optional(),
  date: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().min(5, "Bitte kurze Nachricht hinterlassen"),
  // honeypot
  website: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactForm({
  variant = "partyservice",
}: {
  variant?: "partyservice" | "general";
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Senden fehlgeschlagen");
      }
      setSent(true);
      reset();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Senden fehlgeschlagen");
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-line bg-cream-light p-10 text-center animate-in fade-in duration-300" role="status" aria-live="polite">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-brand-red text-cream-light animate-in zoom-in duration-300" style={{ animationDelay: "100ms" }}>
          <Check className="size-6 animate-in scale-in duration-300" style={{ animationDelay: "200ms" }} />
        </div>
        <h3 className="mt-6 font-serif text-2xl tracking-tight animate-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: "300ms" }}>Vielen Dank!</h3>
        <p className="mt-2 text-ink-soft text-pretty max-w-md mx-auto animate-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: "400ms" }}>
          Wir haben Ihre Anfrage erhalten und melden uns innerhalb eines
          Werktags zurück.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-6 rounded-2xl border border-line bg-cream-light p-6 sm:p-8 shadow-[0_1px_0_0_var(--color-line)]"
    >
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden
        {...register("website")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message} required>
          <input
            {...register("name")}
            autoComplete="name"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="E-Mail" error={errors.email?.message} required>
          <input
            type="email"
            {...register("email")}
            autoComplete="email"
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Telefon" error={errors.phone?.message}>
          <input
            type="tel"
            {...register("phone")}
            autoComplete="tel"
            className={inputClass(!!errors.phone)}
          />
        </Field>
        {variant === "partyservice" && (
          <>
            <Field label="Anlass" error={errors.occasion?.message}>
              <input
                {...register("occasion")}
                placeholder="Geburtstag, Firmenfeier ..."
                className={inputClass(!!errors.occasion)}
              />
            </Field>
            <Field label="Wunschdatum" error={errors.date?.message}>
              <input
                type="date"
                {...register("date")}
                className={inputClass(!!errors.date)}
              />
            </Field>
            <Field label="Personenzahl" error={errors.guests?.message}>
              <input
                type="number"
                inputMode="numeric"
                min={1}
                {...register("guests")}
                className={inputClass(!!errors.guests)}
              />
            </Field>
          </>
        )}
      </div>

      <Field
        label={variant === "partyservice" ? "Ihre Wünsche" : "Nachricht"}
        error={errors.message?.message}
        required
      >
        <textarea
          {...register("message")}
          rows={5}
          className={cn(inputClass(!!errors.message), "resize-y")}
          placeholder={
            variant === "partyservice"
              ? "Welche Menüs interessieren Sie? Lieferung oder Abholung?"
              : "Wie können wir helfen?"
          }
        />
      </Field>

      {error && (
        <div className="rounded-lg bg-brand-red/10 px-4 py-3 text-sm text-brand-red-dark flex items-start gap-3 border border-brand-red/20" role="alert">
          <AlertCircle className="size-5 mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">Fehler beim Senden</p>
            <p className="mt-1 text-xs">{error}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between pt-2">
        <p className="text-xs text-ink-mute">
          Wir antworten innerhalb eines Werktags.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          aria-busy={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Wird gesendet ...
            </>
          ) : (
            <>
              Anfrage senden
              <Send className="size-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[11px] uppercase tracking-[0.15em] text-ink mb-2 font-medium">
        {label}
        {required && <span className="text-brand-red ml-1" aria-label="erforderlich">*</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-brand-red-dark font-medium" role="alert">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-mute/70 transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-brand-red/30 focus:border-brand-red",
    hasError ? "border-brand-red/60" : "border-line"
  );
}
