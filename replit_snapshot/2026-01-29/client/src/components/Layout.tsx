import { Link, useLocation } from "wouter";
import { ShieldCheck, Menu, X, Lock, FileText, HelpCircle, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Password Generator" },
    { href: "/passphrases", label: "Passphrases" },
    { href: "/strength-checker", label: "Strength Checker" },
    { href: "/guides", label: "Guides" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-90 transition-opacity">
            <ShieldCheck className="w-8 h-8" />
            <span className="hidden sm:inline-block">StrongPasswordGenerator.dev</span>
            <span className="sm:hidden">SPG.dev</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-2 transition-colors hover:text-primary ${
                      location === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="h-px bg-border my-4" />
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">About</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
                <Link href="/privacy" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
                <Link href="/terms" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
                <ShieldCheck className="w-6 h-6" />
                <span>StrongPasswordGenerator.dev</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                A privacy-first tool to generate strong, secure passwords and passphrases locally in your browser. 
                We never store or transmit your data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/" className="hover:text-primary transition-colors">Password Generator</Link></li>
                <li><Link href="/passphrases" className="hover:text-primary transition-colors">Passphrase Generator</Link></li>
                <li><Link href="/strength-checker" className="hover:text-primary transition-colors">Strength Checker</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/guides" className="hover:text-primary transition-colors">Security Guides</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="h-px bg-border my-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} StrongPasswordGenerator.dev. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}