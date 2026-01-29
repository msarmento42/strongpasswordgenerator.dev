import { Layout } from "@/components/Layout";
import { Link } from "wouter";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          About StrongPasswordGenerator.dev
        </h1>

        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <section>
            <p className="lead">
              StrongPasswordGenerator.dev was created to make good password habits easier for everyday people. Many security tools focus on experts; 
              this site focuses on clear language, privacy-friendly design, and practical steps you can actually follow.
            </p>
          </section>

          <section>
            <h2>Our Approach</h2>
            <ul>
              <li><strong>Local-first:</strong> Passwords and passphrases are generated in your browser, not on our servers.</li>
              <li><strong>Simple tools:</strong> We aim for straightforward, understandable generators instead of overly complex interfaces.</li>
              <li><strong>Educational guides:</strong> Tools matter more when paired with simple, honest explanations and checklists.</li>
            </ul>
          </section>

          <section>
            <h2>Who This Site Is For</h2>
            <p>
              This site is for anyone who wants to improve their online security without memorizing technical jargon. Whether you are setting up 
              your first password manager or cleaning up years of old accounts, the goal is to give you clear, concrete help.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              If you find a bug, have a suggestion, or want to share how you use the site, please reach out via the{" "}
              <Link href="/contact" className="text-primary hover:underline">Contact</Link> page.
            </p>
          </section>
        </article>
      </div>
    </Layout>
  );
}