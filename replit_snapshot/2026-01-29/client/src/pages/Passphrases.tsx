import { Layout } from "@/components/Layout";
import { PassphraseGenerator } from "@/components/PassphraseGenerator";
import { Link } from "wouter";

export default function Passphrases() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pb-12 md:pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Passphrase Generator
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Passphrases are longer strings made from several random words. They can be just as strong as complex character-based passwords, 
            and in many cases they are easier to remember and type. This page lets you generate random passphrases with a few clicks, 
            directly in your browser.
          </p>
        </div>
        
        <div className="container mx-auto px-4">
          <PassphraseGenerator />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert lg:prose-lg">
        <section className="mb-12">
          <h2>How to Generate a Secure Passphrase</h2>
          <ol>
            <li>Choose how many words you want in your passphrase. Four to six words is a good default range.</li>
            <li>Select how the words should be separated: spaces, dashes, or no separator at all.</li>
            <li>Decide whether to capitalize words or add numbers/symbols if you need to meet a website’s requirements.</li>
            <li>Click “Generate passphrase” to create a new, random passphrase.</li>
            <li>Copy the passphrase into your password manager or the account you’re creating or updating.</li>
          </ol>
          <p>
            If you do not like the result, simply generate a new one. Because the words are chosen randomly, each new passphrase will be different.
          </p>
        </section>

        <section className="mb-12">
          <h2>Why Passphrases Work</h2>
          <p>
            A passphrase can be thought of as a long password built from words instead of single characters. The security comes from:
          </p>
          <ul>
            <li><strong>Length:</strong> Several words together typically result in 20+ characters.</li>
            <li><strong>Randomness:</strong> The words are chosen at random from a word list, not based on personal information.</li>
            <li><strong>Large search space:</strong> Even if each word comes from a list of only a few thousand options, combining multiple words explodes the number of possibilities.</li>
          </ul>
          <p>
            Human-chosen phrases like famous quotes or song lyrics are not secure, because attackers can guess them. Random passphrases,
            especially when combined with extra characters or capitalization, are much harder to crack.
          </p>
        </section>

        <section className="mb-12">
          <h2>Passphrases vs Traditional Passwords</h2>
          <p>
            Both approaches can be secure when done properly:
          </p>
          <ul>
            <li><strong>Traditional passwords</strong> work well when they are long, random, and stored in a password manager.</li>
            <li><strong>Passphrases</strong> work well when they are long and built from random words rather than meaningful phrases.</li>
          </ul>
          <p>
            If you find yourself constantly resetting passwords, passphrases may feel more natural since they resemble short sentences.
            Just remember that “correct horse battery staple” you came up with yourself is not random — use the generator instead.
          </p>
        </section>

        <section className="mb-12">
          <h2>Tips for Using Passphrases Safely</h2>
          <ul>
            <li>Use a different passphrase for every important account.</li>
            <li>Avoid adding personal information such as names, birthdays, or favorite sports teams.</li>
            <li>Consider adding a number or symbol if a site requires it, but keep the overall length high.</li>
            <li>Store passphrases in a password manager instead of relying on memory alone.</li>
          </ul>
          <p>
            For a deeper dive into when to use passphrases versus traditional passwords, see our{" "}
            <Link href="/guides/strong-passwords-and-passphrases" className="text-primary hover:underline">Strong Passwords &amp; Passphrases guide</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2>Privacy and Local Generation</h2>
          <p>
            Just like the main password generator, this passphrase generator works entirely in your browser. The code uses modern browser
            APIs to pick random words. Your passphrases are not sent to any server, logged, or stored. Once you close the tab, they are gone.
          </p>
        </section>
      </div>
    </Layout>
  );
}