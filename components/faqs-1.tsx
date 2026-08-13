'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'What does AVERZA do?',
        answer: 'AVERZA is a digital technology and growth studio. We help growing businesses move from manual operations to modern digital systems by building custom websites, software, mobile apps, SEO strategies, Google Business profiles, UI/UX designs, video content and cloud infrastructure.',
    },
    {
        id: 'item-2',
        question: 'Does AVERZA build custom websites?',
        answer: 'Yes. We build fast, responsive and SEO-ready websites designed around your business — whether you run a restaurant, pharmacy, retail shop, salon, clinic or professional service. Every website is built to represent your brand and help customers find you online.',
    },
    {
        id: 'item-3',
        question: 'Can AVERZA build custom software for my business?',
        answer: 'Yes. We design and develop business software around your actual workflows — including CRM systems, inventory management, order tracking, booking systems, dashboards and internal portals. No templates — every solution is built for how your business operates.',
    },
    {
        id: 'item-4',
        question: 'Does AVERZA develop Android and mobile applications?',
        answer: 'Yes. We build mobile applications for customers, teams and operations — including ordering apps, booking apps, customer loyalty apps and internal management tools. Our apps connect to your existing systems through secure APIs.',
    },
    {
        id: 'item-5',
        question: 'Does AVERZA provide SEO services?',
        answer: 'Yes. We provide local SEO, technical SEO and on-page optimization to help your business appear in relevant Google searches. Our approach focuses on search intent, content strategy and building genuine visibility — not guaranteed rankings.',
    },
    {
        id: 'item-6',
        question: 'Can AVERZA set up and optimize my Google Business Profile?',
        answer: 'Yes. We set up and optimize your Google Business Profile with accurate business information, categories, services, photos and review strategy to strengthen your presence across Google Search and Google Maps.',
    },
    {
        id: 'item-7',
        question: 'Does AVERZA provide cloud and deployment services?',
        answer: 'Yes. We handle cloud deployment, domain configuration, SSL setup, database management, CI/CD pipelines and production hosting to take your digital product from development to a reliable live environment.',
    },
    {
        id: 'item-8',
        question: 'Can AVERZA digitize my manual business processes?',
        answer: 'Yes. If your business still relies on WhatsApp groups, paper registers, Excel spreadsheets or manual follow-ups, we can build digital systems that automate and streamline your workflows — helping your team save time and reduce errors.',
    },
    {
        id: 'item-9',
        question: 'Does AVERZA work with small and local businesses?',
        answer: 'Absolutely. AVERZA specializes in helping early-stage, local and growing businesses — including restaurants, cafés, pharmacies, salons, clinics, retail shops, coaching businesses and professional services across Thane, Mumbai and beyond.',
    },
    {
        id: 'item-10',
        question: 'How does an AVERZA project typically work?',
        answer: 'Every project starts with a discovery conversation to understand your needs. We then design a solution, develop it with regular progress updates, review and refine based on your feedback, and deploy to production with ongoing support.',
    },
    {
        id: 'item-11',
        question: 'What information do I need to start a project?',
        answer: 'Just a clear idea of the problem you want to solve or the system you want to build. We handle the rest — from technical planning and design to development and deployment. You don\'t need any technical knowledge to get started.',
    },
    {
        id: 'item-12',
        question: 'Does AVERZA provide ongoing support after launch?',
        answer: 'Yes. We provide post-launch support including monitoring, updates, bug fixes and feature enhancements. Your digital systems keep running reliably as your business grows and your needs evolve.',
    },
]

export default function FAQs() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
            },
        })),
    }

    return (
        <section className="bg-background @container py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Common questions about AVERZA&apos;s services and how we work with businesses.</p>
                </div>
                <Card
                    variant="outline"
                    className="mt-12 p-2">
                    <Accordion>
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-b-0 px-4">
                                <AccordionTrigger className="cursor-pointer py-4 text-sm font-medium hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground pb-2 text-sm">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Card>
                <p className="text-muted-foreground mt-6 text-center text-sm">
                    Still have questions?{' '}
                    <Link
                        href="#contact"
                        className="text-primary font-medium hover:underline">
                        Talk to AVERZA
                    </Link>
                </p>
            </div>
        </section>
    )
}
