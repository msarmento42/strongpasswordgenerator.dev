import { useState, useEffect, useCallback } from "react";
import { Copy, RefreshCw, Check, Settings2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

export function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState([16]);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
    };

    let chars = "";
    if (options.uppercase) chars += charset.uppercase;
    if (options.lowercase) chars += charset.lowercase;
    if (options.numbers) chars += charset.numbers;
    if (options.symbols) chars += charset.symbols;

    if (chars === "") {
      setPassword("");
      return;
    }

    let newPassword = "";
    const array = new Uint32Array(length[0]);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < length[0]; i++) {
      newPassword += chars[array[i] % chars.length];
    }

    setPassword(newPassword);
    setCopied(false);
  }, [length, options]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Password copied to clipboard.",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy password.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/10 overflow-hidden">
      <div className="p-6 md:p-8 space-y-8">
        {/* Display Area */}
        <div className="relative group">
          <div 
            className="w-full bg-muted/50 p-6 rounded-xl border border-border flex items-center justify-between min-h-[80px] break-all cursor-pointer hover:bg-muted transition-colors"
            onClick={copyToClipboard}
            data-testid="password-display"
          >
            <span className="font-mono text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              {password || "Select options..."}
            </span>
            <Button
              size="icon"
              variant="ghost"
              className={`shrink-0 ml-4 transition-all ${copied ? "text-green-600 bg-green-50" : "text-muted-foreground group-hover:text-primary"}`}
            >
              {copied ? <Check className="w-6 h-6" /> : <Copy className="w-6 h-6" />}
            </Button>
          </div>
          <div className="absolute top-2 right-2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Click to copy
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-8">
          {/* Length */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Password Length</Label>
              <span className="text-2xl font-mono font-bold text-primary">{length[0]}</span>
            </div>
            <Slider
              value={length}
              onValueChange={setLength}
              min={8}
              max={64}
              step={1}
              className="cursor-pointer py-4"
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => setOptions(o => ({ ...o, uppercase: !o.uppercase }))}>
              <Checkbox 
                id="uppercase" 
                checked={options.uppercase}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, uppercase: checked as boolean }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="uppercase" className="text-base font-medium cursor-pointer">Uppercase</Label>
                <p className="text-xs text-muted-foreground">A-Z</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => setOptions(o => ({ ...o, lowercase: !o.lowercase }))}>
              <Checkbox 
                id="lowercase" 
                checked={options.lowercase}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, lowercase: checked as boolean }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="lowercase" className="text-base font-medium cursor-pointer">Lowercase</Label>
                <p className="text-xs text-muted-foreground">a-z</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => setOptions(o => ({ ...o, numbers: !o.numbers }))}>
              <Checkbox 
                id="numbers" 
                checked={options.numbers}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, numbers: checked as boolean }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="numbers" className="text-base font-medium cursor-pointer">Numbers</Label>
                <p className="text-xs text-muted-foreground">0-9</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-card hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => setOptions(o => ({ ...o, symbols: !o.symbols }))}>
              <Checkbox 
                id="symbols" 
                checked={options.symbols}
                onCheckedChange={(checked) => setOptions(o => ({ ...o, symbols: checked as boolean }))}
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="symbols" className="text-base font-medium cursor-pointer">Symbols</Label>
                <p className="text-xs text-muted-foreground">!@#$</p>
              </div>
            </div>
          </div>
        </div>

        <Button 
          onClick={generatePassword} 
          className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Generate New Password
        </Button>
      </div>
      
      {/* Security Badge */}
      <div className="bg-muted/50 p-4 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        Generated locally in your browser. Never sent to any server.
      </div>
    </Card>
  );
}