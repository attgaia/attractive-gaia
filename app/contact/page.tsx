import { ContactForm } from "@/components/contact-form"

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      {/* ヒーローセクション */}
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          お問い合わせ
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
          内容を確認後、担当者よりご連絡させていただきます。
        </p>
      </section>

      {/* お問い合わせフォーム */}
      <section className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactPage 