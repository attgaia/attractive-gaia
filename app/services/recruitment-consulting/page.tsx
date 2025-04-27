import { Metadata } from 'next'
import RecruitmentConsultingClient from './RecruitmentConsultingClient'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { CheckCircle2, Users, MessageSquare, BarChart2, Target, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "採用コンサルティング | ATTRACTIVEGAIA（アトラクティブガイア）",
  description: "ATTRACTIVEGAIAの採用コンサルティングでは、企業の魅力を引き出し、最適な人材獲得のための戦略設計と実行支援を行います。",
};

export default function RecruitmentConsultingPage() {
  return <RecruitmentConsultingClient />
}