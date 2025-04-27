import { Metadata } from 'next';
import FreeConsultationClient from './FreeConsultationClient';

export const metadata: Metadata = {
  title: '無料相談 | ATTRACTIVEGAIA（アトラクティブガイア）',
  description: 'ATTRACTIVEGAIAでは、AI活用、Web制作、ビジネス支援などに関する無料相談を受け付けています。お気軽にご相談ください。',
};

export default function FreeConsultationPage() {
  return <FreeConsultationClient />;
} 