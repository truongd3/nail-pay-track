export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
    {
        question: 'Is my data private?',
        answer: 'Yes! Everything is stored only on your device.',
    },
    {
        question: 'How do I log my earnings each day?',
        answer: 'On the Today tab, enter the money and tip you earned today, then tap Save Entry. You can update today\'s entry as many times as you like before the day ends.',
    },
    {
        question: 'How are monthly totals calculated?',
        answer: "We sum every entry's money multiplying with split percentage and tip for each calendar month, based on the date you logged.",
    },
    {
        question: 'What counts as a "tip"?',
        answer: 'Any gratuity you personally received, separate from your service earnings.',
    },
    {
        question: 'I forgot to log a previous day. Can I add it now?',
        answer: 'Yes. Go to History and tap the "+" next to "History." Pick the date, enter your money and tip, and save. You can only add entries for past dates, not future ones.',
    },
    {
        question: 'Can I edit or delete a past entry?',
        answer: 'Yes. Go to History and tap any entry to open it. From there you can change the amounts and save, or delete the entry entirely.',
    },
    {
        question: 'What happens if I try to add an entry for a date I already logged?',
        answer: 'The app will let you know an entry already exists for that date and won\'t let you create a duplicate. Go to History and tap that entry to edit it instead.',
    },
    {
        question: 'How is "Total Wage" calculated?',
        answer: 'Total Wage = (Money × Your Split %) + Tips. Your split percentage comes from My Salon in your Account menu. If you haven\'t set one, we assume you keep 100% of your service money.',
    },
    {
        question: 'What is my "split percentage"?',
        answer: 'It\'s the share of service money you personally keep after your salon\'s cut. For example, if your salon keeps 40% and you keep 60%, your split is 60. This only applies to money, not tips — you always keep 100% of your tips.',
    },
    {
        question: 'What do "Received" and "Unpaid" mean in Tip Breakdown?',
        answer: 'Salons typically pay out cash tips twice a month — on the 15th and on the last day of the month. "Received" is tips from days whose payout date has already passed. "Unpaid" is tips you\'ve earned that haven\'t been paid out yet.',
    },
    {
        question: 'Why did a tip move from "Unpaid" to "Received"?',
        answer: 'This happens automatically once its payout date passes. A tip earned on the 3rd becomes "Received" after the 15th of that month; a tip earned on the 20th becomes "Received" after the last day of that month.',
    },
    {
        question: 'Can I add or update my salon\'s name, address, or split percentage?',
        answer: 'Yes. Tap your profile picture, then go to My Salon. You can update this anytime, and future calculations will use the new split percentage.',
    },
    {
        question: 'If I change my split percentage, does it affect past entries?',
        answer: 'Yes — Total Wage figures always use your current split percentage, even for past entries. We don\'t store a separate split percentage per entry.',
    },
    {
        question: 'How do I update my name, email, phone, or region?',
        answer: 'Tap your profile picture, then go to My Profile. You can also change your country there if you move between the US and Canada.',
    },
    {
        question: 'How do I change my profile picture?',
        answer: 'Go to My Profile and tap your photo (or your initials, if you haven\'t added one) to choose a new picture from your library.',
    },
    {
        question: 'What happens to my data if I get a new phone?',
        answer: 'Since your data is stored locally, it won\'t automatically transfer to a new device. Go to Settings and use "Export My Data" to save a backup before switching phones. Cloud backup and sync are planned for a future update.',
    },
    {
        question: 'How do I export my data?',
        answer: 'Go to your profile, then Settings, and tap "Export My Data." This shares a file with all your logged entries that you can save or send to yourself.',
    },
    {
        question: 'Can I use this app if I don\'t work at a nail salon?',
        answer: 'Yes. While it\'s designed with nail techs in mind, anyone paid through a mix of service money and tips can use it to track their daily earnings.',
    },
];