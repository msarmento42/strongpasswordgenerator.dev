import { Layout } from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(message);
    const sub = encodeURIComponent(subject || "Contact from StrongPasswordGenerator.dev");
    window.location.href = `mailto:contact@strongpasswordgenerator.dev?subject=${sub}&body=${body}`;
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Contact
        </h1>
        
        <article className="prose prose-slate dark:prose-invert lg:prose-lg mb-12">
          <section>
            <p className="lead">
              Have a question, found a bug, or want to suggest a new feature or guide? We would love to hear from you.
            </p>
          </section>

          <section>
            <h2>How to Reach Us</h2>
            <p>
              Please use the contact form on this page to open your default email client. Do not include any passwords 
              or sensitive account details in your message.
            </p>
            <p>
              While we cannot provide one-on-one security consulting, feedback about how you use the site helps us improve the tools and guides 
              for everyone.
            </p>
          </section>
        </article>

        <Card className="p-6 md:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input 
                id="subject" 
                placeholder="Feedback / Question" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="How can we help?" 
                className="min-h-[150px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto gap-2">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}