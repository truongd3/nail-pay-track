export interface FAQItem {
    question: string;
    answer: string;
}

export const FAQS: FAQItem[] = [
    {
        question: 'How are monthly totals calculated?',
        answer: "We sum every entry's money multiplying with split percentage and tip for each calendar month, based on the date you logged.",
    },
    {
        question: 'What counts as a "tip"?',
        answer: 'Any gratuity you personally received, separate from your service earnings.',
    },
    {
        question: 'Is my data private?',
        answer: 'Yes — everything is stored only on your device.',
    },
];