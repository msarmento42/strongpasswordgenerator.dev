import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from "lucide-react";
import { cn } from "@/lib/utils";

export function StrengthChecker() {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Simple strength heuristic
  const calculateStrength = (pwd: string) => {
    if (!pwd) return { score: 0, label: "Enter Password", color: "bg-muted", message: "Enter a password to check its strength." };

    let score = 0;
    
    // Length
    if (pwd.length > 8) score += 10;
    if (pwd.length > 12) score += 20;
    if (pwd.length >= 16) score += 20;

    // Variety
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);
    
    const varietyCount = [hasLower, hasUpper, hasNumber, hasSymbol].filter(Boolean).length;
    score += varietyCount * 10;

    // Penalties
    if (/(.)\1{2,}/.test(pwd)) score -= 10; // Repeats like aaa
    if (/^[a-zA-Z]+$/.test(pwd)) score -= 10; // Only letters
    if (/^[0-9]+$/.test(pwd)) score -= 10; // Only numbers
    
    // Normalize
    score = Math.max(0, Math.min(100, score));

    if (score < 40) return { score, label: "Weak", color: "bg-destructive", icon: ShieldX, message: "This password is very easy to guess. Make it longer and add variety." };
    if (score < 70) return { score, label: "Fair", color: "bg-yellow-500", icon: ShieldAlert, message: "Better, but still vulnerable. Try adding more characters." };
    if (score < 90) return { score, label: "Strong", color: "bg-blue-500", icon: Shield, message: "Good work! This is a strong password for most uses." };
    return { score, label: "Very Strong", color: "bg-green-600", icon: ShieldCheck, message: "Excellent! This password is very difficult to crack." };
  };

  const strength = calculateStrength(password);
  const Icon = strength.icon || Shield;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/10 overflow-hidden">
      <div className="p-6 md:p-8 space-y-8">
        <div className="space-y-4">
          <div className="relative">
            <Input
              type={isVisible ? "text" : "password"}
              placeholder="Type a password to check..."
              className="h-16 text-lg md:text-xl font-mono pr-20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="strength-input"
            />
            <button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {password && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon className={cn("w-6 h-6", strength.color.replace("bg-", "text-"))} />
                  <span className={cn("text-2xl font-bold", strength.color.replace("bg-", "text-"))}>
                    {strength.label}
                  </span>
                </div>
                <span className="text-muted-foreground font-mono">{password.length} chars</span>
              </div>
              <Progress value={strength.score} className={cn("h-3", "[&>div]:transition-all [&>div]:duration-500", strength.color)} />
            </div>

            <div className="bg-muted/30 p-4 rounded-lg border border-border">
              <p className="text-foreground/80 leading-relaxed">
                {strength.message}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className={cn("flex flex-col items-center p-3 rounded border", /[a-z]/.test(password) ? "bg-green-50 border-green-200 text-green-700" : "bg-muted/50 border-border text-muted-foreground")}>
                <span className="font-bold">abc</span>
                <span>Lowercase</span>
              </div>
              <div className={cn("flex flex-col items-center p-3 rounded border", /[A-Z]/.test(password) ? "bg-green-50 border-green-200 text-green-700" : "bg-muted/50 border-border text-muted-foreground")}>
                <span className="font-bold">ABC</span>
                <span>Uppercase</span>
              </div>
              <div className={cn("flex flex-col items-center p-3 rounded border", /[0-9]/.test(password) ? "bg-green-50 border-green-200 text-green-700" : "bg-muted/50 border-border text-muted-foreground")}>
                <span className="font-bold">123</span>
                <span>Numbers</span>
              </div>
              <div className={cn("flex flex-col items-center p-3 rounded border", /[^A-Za-z0-9]/.test(password) ? "bg-green-50 border-green-200 text-green-700" : "bg-muted/50 border-border text-muted-foreground")}>
                <span className="font-bold">!@#</span>
                <span>Symbols</span>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-muted/50 p-4 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        Checked locally. Your password never leaves your browser.
      </div>
    </Card>
  );
}