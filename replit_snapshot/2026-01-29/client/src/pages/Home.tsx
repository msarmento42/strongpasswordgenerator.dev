import { Layout } from "@/components/Layout";
import { PasswordGenerator } from "@/components/PasswordGenerator";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pb-12 md:pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Secure Password Generator
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            StrongPasswordGenerator.dev is a simple, privacy-friendly way to create long, unique passwords for your online accounts. 
            All passwords are generated in your browser using modern cryptographic randomness. We never save, transmit, or log the 
            passwords you generate here.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <PasswordGenerator />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert lg:prose-lg">
        <section className="mb-12">
          <h2>How to Use This Generator</h2>
          <ol>
            <li>Choose the desired password length. In most cases, 16–24 characters is a great starting point.</li>
            <li>Select which character types you want to include: lowercase letters, uppercase letters, numbers, and symbols.</li>
            <li>Click the “Generate” button. A new random password will appear instantly.</li>
            <li>Copy the password into your password manager or the account you’re securing.</li>
            <li>Save it somewhere safe. We recommend using a dedicated password manager rather than storing passwords in plain text.</li>
          </ol>
          <p>
            You can generate as many passwords as you like. If you do not like one, just click “Generate” again and a new random
            password will be created.
          </p>
        </section>

        <section className="mb-12">
          <h2>What Makes a Password "Strong"?</h2>
          <p>
            A strong password has enough randomness and length so that it is extremely difficult for an attacker to guess or brute-force.
            In practice that usually means:
          </p>
          <ul>
            <li><strong>Length:</strong> At least 12 characters, and ideally 16 or more.</li>
            <li><strong>Complexity:</strong> A mix of lowercase, uppercase, numbers, and symbols, unless a website has strict rules.</li>
            <li><strong>Uniqueness:</strong> A different password for every important account, especially email, banking, and cloud storage.</li>
            <li><strong>No personal details:</strong> Avoid names, birthdays, pet names, or common words and phrases.</li>
          </ul>
          <p>
            Attackers typically use automated tools that try common passwords and dictionary words first. Random, long passwords generated
            by tools like this one are resistant to those kinds of attacks.
          </p>
        </section>

        <section className="mb-12">
          <h2>Why This Generator Is Privacy-Friendly</h2>
          <p>
            Many people worry that an online password generator might secretly store or send the passwords they create. StrongPasswordGenerator.dev
            is designed to avoid that risk:
          </p>
          <ul>
            <li>The generation happens entirely in your browser using JavaScript.</li>
            <li>No passwords are sent to a server or stored in a database.</li>
            <li>If you refresh the page, your previously generated passwords disappear.</li>
          </ul>
          <p>
            You can also open your browser’s developer tools and inspect the JavaScript code yourself. The logic is intentionally simple and
            easy to follow so you can trust what the site is doing.
          </p>
        </section>

        <section className="mb-12">
          <h2>Best Practices for Using Strong Passwords</h2>
          <ul>
            <li><strong>Use a password manager:</strong> Storing long random passwords in your memory is not realistic. A password manager can safely store them for you.</li>
            <li><strong>Turn on multi-factor authentication (MFA):</strong> Whenever possible, add an extra factor such as a one-time code or security key.</li>
            <li><strong>Never reuse passwords:</strong> If one site is breached, reused passwords can be tried on all your other accounts.</li>
            <li><strong>Update old weak passwords:</strong> Prioritize accounts like email, banking, and major social networks.</li>
          </ul>
          <p>
            For a step-by-step plan to upgrade old passwords, see our guide in the <Link href="/guides" className="text-primary hover:underline">Guides &amp; Resources</Link> section.
          </p>
        </section>

        <section className="mb-12">
          <h2>Passwords vs Passphrases</h2>
          <p>
            A traditional “strong password” looks like a random jumble of characters, such as <code className="font-mono bg-muted px-1 py-0.5 rounded">dA9!pQ4z$L8#</code>.
            A <em>passphrase</em> uses several random words instead, like <code className="font-mono bg-muted px-1 py-0.5 rounded">river-orange-salsa-rocket</code>. Both approaches can be strong if
            they are long and generated randomly.
          </p>
          <p>
            Passphrases can be easier to type and remember, especially on mobile devices. If you prefer that style, visit our{" "}
            <Link href="/passphrases" className="text-primary hover:underline">Passphrase Generator</Link>, which works on the same privacy-first principles.
          </p>
        </section>

        <section className="mb-12">
          <h2>Where to Go Next</h2>
          <p>
            If you are new to password security, start by generating a strong password for your email account and any important financial
            accounts. Then explore our <Link href="/guides" className="text-primary hover:underline">Guides</Link> to learn how to use password managers, multi-factor authentication, and a simple
            weekend checklist for improving your security overall.
          </p>
          <p>
            Strong passwords are one of the easiest, highest-impact steps you can take to protect your digital life. This site is here to
            make that step quick and approachable.
          </p>
        </section>
      </div>
    </Layout>
  );
}