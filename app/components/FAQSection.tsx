"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Are you truly available 24 hours a day, 7 days a week?",
    a: "Yes. Zina's Contracting handles emergency calls at all hours, every day of the year. For urgent situations — active leaks, fallen fixtures, HVAC failures — Fred responds within 24 hours. For non-emergency scheduling, call during business hours for faster response.",
  },
  {
    q: "What areas do you serve?",
    a: "Mississauga, Brampton, and the broader GTA including Toronto and surrounding municipalities. Call to confirm availability for your specific location.",
  },
  {
    q: "Who actually does the work — Fred or a crew?",
    a: "Fred does the work. Zina's Contracting does not use subcontractors. Fred personally handles every job from assessment through final walkthrough. This is the direct reason for the consistent five-star quality across 13 reviews.",
  },
  {
    q: "What types of jobs do you handle?",
    a: "Emergency home repairs, drywall framing and finishing, HVAC grill repairs and condo-specific mechanical issues, emergency plumbing (fixture repair, leaks, supply lines), interior painting, and full bathroom renovation packages. Call if you have a specific situation — Fred can assess.",
  },
  {
    q: "How do you price your work?",
    a: "Fred assesses on-site and provides a quote before any work begins. You approve the price and scope before Fred starts. If something unforeseen is discovered mid-job, Fred tells you immediately and you decide whether to proceed. No invoice surprises.",
  },
  {
    q: "Do you handle condo repairs specifically?",
    a: "Yes. Tyler J. — a Local Guide reviewer — specifically praised Fred for solving a condo-specific HVAC access challenge that required a non-standard solution. Condo mechanical and drywall work is part of Zina's Contracting's regular scope.",
  },
  {
    q: "How do I get started?",
    a: "Call or text 647-272-0895. Fred responds directly. For emergencies, that is always the fastest path. For scheduled work, describe the job and Fred will set a time.",
  },
  {
    q: "Is this a franchise or a solo operation?",
    a: "Zina's Contracting is an independent, owner-operated contracting business. Fred is the operator. This is not a franchise model, not a referral service, and not a dispatch-to-third-party model. You get the person whose name and reputation are on the line every time.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 px-6 border-t-2"
      style={{ background: "var(--paper)", borderColor: "var(--ink)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="font-[family-name:var(--font-jetbrains)] text-[10px] tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--red)" }}
        >
          [ FAQ ]
        </div>
        <h2
          className="font-[family-name:var(--font-bebas)] uppercase leading-none tracking-[0.02em] mb-12"
          style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", color: "var(--ink)" }}
        >
          FIELD
          <br />
          QUESTIONS.
        </h2>

        <div className="border-t-2" style={{ borderColor: "var(--ink)" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b-2" style={{ borderColor: "var(--ink)" }}>
                <button
                  className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span
                    className="font-[family-name:var(--font-bebas)] text-lg tracking-[0.04em] uppercase"
                    style={{ color: "var(--ink)" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center border-2 font-[family-name:var(--font-bebas)] text-xl leading-none"
                    style={{
                      borderColor: "var(--ink)",
                      color: "var(--red)",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p
                    className="pb-5 text-sm leading-relaxed"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
