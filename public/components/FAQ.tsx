"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do you accept GCash for payments?",
    answer: "Yes! We accept GCash for all our services, including printing, photo prints, and school supplies. We also offer GCash Cash-in and Cash-out services with standard rates.",
  },
  {
    question: "Why don't you accept Flash Drives or USBs?",
    answer: "To ensure the safety of our systems and prevent the spread of computer viruses, we prioritize digital transfers. You can send your files via Facebook, Email, or Bluetooth.",
  },
  {
    question: "How long does a Rush ID take?",
    answer: "Our Rush ID service is truly 'rush'! Depending on the queue, your photos are usually ready for pick-up within 10 to 15 minutes.",
  },
  {
    question: "Can I send files for printing ahead of time?",
    answer: "Definitely. You can message us on Facebook or email your files to dsprints27@gmail.com. Just let us know your required size and quantity so we can prepare them before you arrive.",
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 px-6 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-4 text-blue-600">
            <HelpCircle size={40} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-blue-950 dark:text-white uppercase tracking-tighter">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Radix Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          defaultValue="item-0" // Sets the first item (index 0) open by default
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900/50"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="flex flex-1 text-lg items-center justify-between px-6 py-5 text-left font-bold text-blue-950 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all group cursor-pointer">
                  {faq.question}
                  <ChevronDown 
                    size={20} 
                    className="text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180" 
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              
              <Accordion.Content className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 mt-2">
                  {faq.answer}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

export default FAQSection;