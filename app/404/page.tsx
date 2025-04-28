import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

export default function Custom404Page() {
  notFound()
} 