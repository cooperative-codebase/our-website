import { ContactFormReusable } from "@/components/ContactFormReusable"
import { Helmet } from "react-helmet-async"

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Cooperative Codebase</title>
        <meta name="description" content="Get in touch with Cooperative Codebase." />
        <meta property="og:title" content="Contact | Cooperative Codebase" />
        <meta property="og:description" content="Get in touch with Cooperative Codebase." />
        <meta property="og:url" content="https://cooperativecodebase.com/contact" />
      </Helmet>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <ContactFormReusable />
          </div>
        </div>
      </div>
    </>
  )
} 