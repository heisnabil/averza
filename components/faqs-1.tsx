'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'Do you build custom software from scratch or use templates?',
        answer: 'Every solution is engineered specifically for your business requirements. No templates, no bloat, just pure performance built for your operations.',
    },
    {
        id: 'item-2',
        question: 'What is your standard SLA and post-launch support structure?',
        answer: 'We offer SLA-backed proactive monitoring, daily backups, code updates, and direct developer communication channels to keep your app secure.',
    },
    {
        id: 'item-3',
        question: 'Can you integrate AI models and WhatsApp APIs into existing systems?',
        answer: 'Yes. We integrate Large Language Models, voice processing engines, and official WhatsApp Business API notification workflows into your existing CRM/ERP environments.',
    },
    {
        id: 'item-4',
        question: 'What is the typical timeline for an enterprise custom software project?',
        answer: 'Depending on complexity, projects typically range from 4 to 8 weeks for standard customized architectures and MVPs, and up to several months for larger enterprise environments.',
    },
]

export default function FAQs() {
    return (
        <section className="bg-background @container py-24">
            <div className="mx-auto max-w-2xl px-6">
                <div className="text-center">
                    <h2 className="text-balance font-serif text-4xl font-medium">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">Find answers to common questions about our platform.</p>
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
                        href="#"
                        className="text-primary font-medium hover:underline">
                        Contact support
                    </Link>
                </p>
            </div>
        </section>
    )
}
