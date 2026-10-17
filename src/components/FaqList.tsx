import type { Faq } from "@/content/types";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <section className="section" data-reveal>
      <div className="shell">
        <h2>Questions about this page</h2>
        <div className="mt-8 divide-y divide-stone">
          {faqs.map((faq) => (
            <div key={faq.question} className="py-5">
              <h3 className="text-3xl">{faq.question}</h3>
              <p className="mt-3 max-w-3xl">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
