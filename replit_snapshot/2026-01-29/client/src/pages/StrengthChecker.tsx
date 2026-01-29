import { Layout } from "@/components/Layout";
import { StrengthChecker } from "@/components/StrengthChecker";
import { Link } from "wouter";

export default function StrengthCheckerPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pb-12 md:pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Password Strength Checker
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            This tool helps you understand how strong a password might be, based on factors like length, variety of characters, and basic patterns. 
            It does not guarantee that a password can never be guessed, but it provides a helpful estimate and concrete tips for improvement.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <StrengthChecker />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert lg:prose-lg">
        <section className="mb-12">
          <h2>How the Strength Checker Works</h2>
          <p>
            The checker analyzes the password you enter and looks at factors such as:
          </p>
          <ul>
            <li>Overall length.</li>
            <li>Whether it includes lowercase, uppercase, numbers, and symbols.</li>
            <li>Repetition of characters or simple sequences like <code className="font-mono bg-muted px-1 py-0.5 rounded">1234</code> or <code className="font-mono bg-muted px-1 py-0.5 rounded">abcd</code>.</li>
            <li>Very common patterns such as “password”, “qwerty”, or keyboard walks.</li>
          </ul>
          <p>
            It then assigns a strength label such as “weak”, “fair”, “strong”, or “very strong” and offers suggestions for making the password better.
          </p>
        </section>

        <section className="mb-12">
          <h2>A Quick Guide to the Strength Levels</h2>
          <ul>
            <li><strong>Weak:</strong> Short, predictable, or heavily reused patterns. These passwords should be changed immediately.</li>
            <li><strong>Fair:</strong> Better than the most common passwords, but still shorter or simpler than recommended for important accounts.</li>
            <li><strong>Strong:</strong> Long and reasonably complex, suitable for many accounts when stored in a password manager.</li>
            <li><strong>Very Strong:</strong> Long, random, and ideal for high-value accounts when combined with multi-factor authentication.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2>Tips for Improving a Weak Password</h2>
          <p>To strengthen a password, consider the following steps:</p>
          <ul>
            <li>Add length. Jump from 8 characters to 16 or more when possible.</li>
            <li>Mix in uppercase letters, numbers, and symbols if the site allows.</li>
            <li>Remove personal information like names, birthdays, or addresses.</li>
            <li>Avoid keyboard patterns such as <code className="font-mono bg-muted px-1 py-0.5 rounded">asdf</code> or <code className="font-mono bg-muted px-1 py-0.5 rounded">qwerty</code>.</li>
            <li>Replace a human-made password entirely with a randomly generated one.</li>
          </ul>
          <p>
            The easiest option is often to generate a new password using our{" "}
            <Link href="/" className="text-primary hover:underline">Secure Password Generator</Link> and save it into your password manager.
          </p>
        </section>

        <section className="mb-12">
          <h2>Local-Only Analysis</h2>
          <p>
            For privacy, the password strength checker runs entirely in your browser. The password you type into the checker is not sent to our servers. 
            It is evaluated locally and never stored. Once you navigate away or close the tab, the input disappears.
          </p>
        </section>

        <section className="mb-12">
          <h2>Important Disclaimer</h2>
          <p>
            No automated tool can perfectly measure password security. Attackers may use techniques that are not captured by simple strength 
            indicators. Always pair strong passwords with good security habits:
          </p>
          <ul>
            <li>Use a reputable password manager.</li>
            <li>Turn on multi-factor authentication wherever possible.</li>
            <li>Be cautious of phishing emails and unexpected login prompts.</li>
          </ul>
          <p>
            Treat this checker as an educational guide rather than a guarantee.
          </p>
        </section>
      </div>
    </Layout>
  );
}