import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'お問い合わせ | ATTRACTIVEGAIA（アトラクティブガイア）',
  description: 'ATTRACTIVEGAIAでは、AI活用、Web制作、ビジネス支援などに関するお問い合わせを受け付けています。お気軽にご相談ください。',
};

export default function ContactPage() {
  return <ContactClient />;
} 