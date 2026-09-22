import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Movindu Ayanaja",
};

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-display text-3xl text-paper mb-2">Get in touch</h1>
      <div className="rule w-24 mt-4 mb-8" />
      <p className="text-muted max-w-prose mb-10 leading-relaxed">
        Have a project, a question, or just want to say hello? Send a message
        below, or email me directly at{" "}
        <a
          href="mailto:movindugethmin@gmail.com"
          className="text-teal hover:text-amber transition-colors"
        >
          movindugethmin@gmail.com
        </a>
        .
      </p>
      <ContactForm />
    </section>
  );
}
