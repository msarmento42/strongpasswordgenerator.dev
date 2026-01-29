import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Shield, RefreshCcw, KeyRound } from "lucide-react";

export default function Guides() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pb-12 md:pb-20 pt-8 md:pt-12">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Guides &amp; Resources
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Strong passwords are only one part of staying safe online. This section collects practical, jargon-free guides to help you 
            build better security habits without needing to be a security expert.
          </p>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/guides/strong-passwords-and-passphrases" className="block group h-full">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Strong Passwords &amp; Passphrases</CardTitle>
                  <CardDescription className="text-base mt-2">
                    A friendly guide to the three rules of strong passwords and why passphrases can be a great alternative.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/guides/password-managers" className="block group h-full">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <KeyRound className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Beginner’s Guide to Password Managers</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Stop remembering dozens of passwords. Learn how to set up and use a password manager safely.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/guides/upgrading-old-passwords" className="block group h-full">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <RefreshCcw className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">How to Upgrade All Your Old Passwords Safely</CardTitle>
                  <CardDescription className="text-base mt-2">
                    A step-by-step checklist to fix your old weak passwords without getting overwhelmed.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>

            <Link href="/guides/multi-factor-authentication" className="block group h-full">
              <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Multi-Factor Authentication (MFA)</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Add a powerful second layer of defense to your most important accounts.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-slate dark:prose-invert lg:prose-lg">
        <section className="mb-12">
          <h2>How to Use These Guides</h2>
          <p>
            You do not need to read everything at once. Pick a guide that matches where you are today. For example:
          </p>
          <ul>
            <li>If you are brand new to strong passwords, start with the Strong Passwords &amp; Passphrases guide.</li>
            <li>If you are tired of remembering passwords, jump to the Password Managers guide.</li>
            <li>If you know your old passwords are weak, use the Upgrading Old Passwords checklist.</li>
            <li>If you already use strong passwords and want a bigger upgrade, learn about MFA.</li>
          </ul>
          <p>
            Each guide is written in plain language with simple checklists you can follow at your own pace.
          </p>
        </section>
      </div>
    </Layout>
  );
}