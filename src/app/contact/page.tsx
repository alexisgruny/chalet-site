"use client";

import { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle, AlertCircle, ChevronDown } from "lucide-react";
import CallToAction from "@/components/section/callToAction";

// ── Infos propriétaires — à personnaliser ──────────────────────────────────
const INFOS = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@chalet-jaia.fr",
    href: "mailto:contact@chalet-jaia.fr",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "06 00 00 00 00",
    href: "tel:+33600000000",
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Lun – Dim, 9 h – 20 h",
    href: null,
  },
];

// ── Types ──────────────────────────────────────────────────────────────────
type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  arrival: string;
  departure: string;
  guests: string;
  message: string;
}

const INITIAL: FormData = {
  name: "",
  email: "",
  phone: "",
  arrival: "",
  departure: "",
  guests: "",
  message: "",
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

// ── Page ───────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "name" || name === "email" || name === "message") {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    let error: string | undefined;
    if (name === "name" && !value.trim()) error = "Le nom est requis.";
    else if (name === "email") {
      if (!value.trim()) error = "L'email est requis.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) error = "Email invalide.";
    } else if (name === "message" && !value.trim()) error = "Le message est requis.";
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFeedback(data.message);
        setForm(INITIAL);
      } else {
        setStatus("error");
        setFeedback(data.message ?? "Une erreur est survenue.");
      }
    } catch {
      setStatus("error");
      setFeedback("Impossible d&apos;envoyer le message. Réessayez plus tard.");
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-green pt-20">
        <div className="container-section text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contactez-nous
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-xl mx-auto">
            Une question, une demande de réservation&nbsp;? Écrivez-nous,
            nous vous répondrons personnellement.
          </p>
        </div>
      </section>

      {/* ── Contenu ── */}
      <section className="section-beige">
        <div className="container-section">
          <div className="grid gap-10 lg:grid-cols-3">

            {/* Infos de contact */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="title-section-beige !mb-4">Nos coordonnées</h2>

              {INFOS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-[#3a4b3c]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-[#3a4b3c]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#3a4b3c]/50">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-[#3a4b3c] hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-[#3a4b3c]">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="card mt-6 text-sm text-muted space-y-2">
                <p>
                  L&apos;adresse exacte du chalet est communiquée après confirmation
                  de la réservation.
                </p>
                <p>Réponse garantie sous 24 h.</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="card">

                {/* Feedback succès */}
                {status === "success" && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4 text-green-800">
                    <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{feedback}</p>
                  </div>
                )}

                {/* Feedback erreur */}
                {status === "error" && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-red-800">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    <p className="text-sm font-medium">{feedback}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>

                  {/* Nom + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="label-field">
                        Nom complet <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Jean Dupont"
                        className="input-field"
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="label-field">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="jean@example.com"
                        className="input-field"
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label htmlFor="phone" className="label-field">
                      Téléphone <span className="text-[#3a4b3c]/40 font-normal">(facultatif)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className="input-field"
                    />
                  </div>

                  {/* Dates */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="arrival" className="label-field">
                        Date d&apos;arrivée <span className="text-[#3a4b3c]/40 font-normal">(facultatif)</span>
                      </label>
                      <input
                        id="arrival"
                        name="arrival"
                        type="date"
                        value={form.arrival}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="departure" className="label-field">
                        Date de départ <span className="text-[#3a4b3c]/40 font-normal">(facultatif)</span>
                      </label>
                      <input
                        id="departure"
                        name="departure"
                        type="date"
                        value={form.departure}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* Nombre de voyageurs */}
                  <div>
                    <label htmlFor="guests" className="label-field">
                      Nombre de voyageurs <span className="text-[#3a4b3c]/40 font-normal">(facultatif)</span>
                    </label>
                    <div className="relative">
                      <select
                        id="guests"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className="input-field appearance-none pr-10"
                      >
                        <option value="">Sélectionner</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "personne" : "personnes"}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#3a4b3c]/40" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="label-field">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Votre demande, question sur le chalet…"
                      className="input-field resize-none"
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-red-500">{fieldErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction hideContact />
    </>
  );
}
