import { Layout } from "@/components/Layout";
import { Link } from "wouter";

export default function Terms() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Terms of Use
        </h1>
        <p className="text-muted-foreground mb-8">Last updated: December 2, 2025</p>

        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <p>
            By using StrongPasswordGenerator.dev (“the Site”), you agree to these Terms of Use. If you do not agree, please do not use the Site.
          </p>

          <section>
            <h2>Use of the Site</h2>
            <p>
              You may use the Site and its tools for personal or educational purposes. You agree not to misuse the Site, attempt to interfere 
              with its operation, or use it in ways that violate applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2>No Storage of Passwords</h2>
            <p>
              The Site is designed so that passwords and passphrases are generated and processed in your browser. However, it is ultimately your 
              responsibility to handle passwords safely after they are generated, including where you store them and how you share them.
            </p>
          </section>

          <section>
            <h2>No Warranties</h2>
            <p>
              The Site and its content are provided “as is” and “as available.” While we strive to provide accurate information and reliable tools, 
              we make no warranties or guarantees regarding:
            </p>
            <ul>
              <li>The completeness, accuracy, or reliability of content.</li>
              <li>The security or invulnerability of passwords generated or checked using the Site.</li>
              <li>Uninterrupted or error-free operation of the Site.</li>
            </ul>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we are not liable for any direct, indirect, incidental, special, or consequential damages 
              arising from your use of the Site or its tools, including any loss of data, unauthorized access, or security incidents involving 
              accounts for which you generated passwords.
            </p>
          </section>

          <section>
            <h2>External Links</h2>
            <p>
              The Site may contain links to third-party websites or services. We are not responsible for the content or practices of those sites. 
              Accessing them is at your own risk.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. When we do, we will revise the “Last updated” date at the top of the page. 
              Your continued use of the Site after changes are posted constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you have questions about these Terms, please contact us through the <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}