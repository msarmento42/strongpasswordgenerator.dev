import { Layout } from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "wouter";

export default function Faq() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Here are answers to common questions about StrongPasswordGenerator.dev, how it works, and how to use it safely.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg font-semibold">Do you store or see my passwords?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              No. Passwords and passphrases are generated and analyzed entirely in your browser. They are not sent to our servers, logged, or stored. 
              If you refresh or close the page, the values disappear.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg font-semibold">Is this site free to use?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Yes. The password generator, passphrase generator, strength checker, and guides are free to use for personal and educational purposes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg font-semibold">How random are the passwords?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              The generator uses modern browser cryptography features (such as <code className="bg-muted px-1 py-0.5 rounded text-sm">window.crypto.getRandomValues</code>) to create random values, 
              which are then mapped to characters. This provides much stronger randomness than simple math-based random functions.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg font-semibold">Can I use these passwords at work?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              In many cases, yes, but you should follow your organization’s security policies. Some companies require specific password lengths 
              or character types. Our generator lets you adjust options to match those rules.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg font-semibold">What if a website does not allow symbols or long passwords?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Some older systems have strict limits. In those cases, use the longest length the site supports and mix uppercase, lowercase, and numbers. 
              You may also want to enable multi-factor authentication if available.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg font-semibold">Why do you recommend a password manager?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Password managers make it practical to use a different strong password for every account. Without one, people tend to reuse or simplify passwords, 
              which weakens security. See our <Link href="/guides/password-managers" className="text-primary hover:underline">Password Managers guide</Link> for details.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg font-semibold">Can I share generated passwords with family members?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              You should only share passwords in a secure way, ideally using a password manager that supports family sharing. Avoid sending passwords through 
              email, text messages, or messaging apps unless you have no better option and trust the channel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg font-semibold">What should I do if I think a password has been leaked?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Change it as soon as possible, using a new, strong password. If you reused the same password on other sites, change those as well. 
              Turn on multi-factor authentication and watch for unusual account activity.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg font-semibold">Does using a generator guarantee I can never be hacked?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              No tool can offer a guarantee. Strong passwords significantly reduce the risk of direct password guessing, but other factors—such as phishing, 
              malware, or website breaches—also matter. Use strong passwords together with good overall security habits.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg font-semibold">How can I give feedback or report an issue?</AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              Use the contact information on our <Link href="/contact" className="text-primary hover:underline">Contact</Link> page. We appreciate bug reports, suggestions, and ideas for new guides.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Layout>
  );
}