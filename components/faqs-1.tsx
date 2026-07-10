'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

const faqItems = [
    {
        id: 'item-1',
        question: 'Do you build software from scratch?',
        answer: 'Yes. Every solution is engineered specifically for your business requirements.',
    },
    {
        id: 'item-2',
        question: 'Can you integrate AI into existing software?',
        answer: 'Yes. We integrate LLMs, workflow automation and intelligent assistants into existing platforms.',
    },
    {
        id: 'item-3',
        question: 'Which industries do you serve?',
        answer: 'Healthcare, Retail, Manufacturing, Education, Logistics, Finance and more.',
    },
    {
        id: 'item-4',
        question: 'Do you provide post-launch support?',
        answer: 'Yes. We offer maintenance, monitoring, feature updates and SLA-backed support.',
    },
    {
        id: 'item-5',
        question: 'How long does development take?',
        answer: 'Depending on complexity, projects typically range from a few weeks for MVPs to several months for enterprise systems.',
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
