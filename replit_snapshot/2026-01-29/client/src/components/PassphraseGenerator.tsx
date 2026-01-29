import { useState, useEffect, useCallback } from "react";
import { Copy, RefreshCw, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { WORD_LIST } from "@/lib/wordlist";

export function PassphraseGenerator() {
  const [passphrase, setPassphrase] = useState("");
  const [wordCount, setWordCount] = useState([4]);
  const [separator, setSeparator] = useState("-");
  const [capitalize, setCapitalize] = useState(false);
  const [addNumber, setAddNumber] = useState(false);
  const [copied, setCopied] = useState(false);

  const generatePassphrase = useCallback(() => {
    if (!WORD_LIST || WORD_LIST.length === 0) return;

    let words = [];
    const array = new Uint32Array(wordCount[0]);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < wordCount[0]; i++) {
      const index = array[i] % WORD_LIST.length;
      let word = WORD_LIST[index];
      if (capitalize) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      words.push(word);
    }

    let result = words.join(separator);
    if (addNumber) {
      const num = Math.floor(Math.random() * 100); // 0-99
      result += num;
    }

    setPassphrase(result);
    setCopied(false);
  }, [wordCount, separator, capitalize, addNumber]);

  useEffect(() => {
    generatePassphrase();
  }, [generatePassphrase]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(passphrase);
      setCopied(true);
      toast({
        title: "Copied!",
        description: "Passphrase copied to clipboard.",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy passphrase.",
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
            data-testid="passphrase-display"
          >
            <span className="font-mono text-xl md:text-2xl font-bold text-foreground tracking-tight leading-relaxed">
              {passphrase}
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
          {/* Word Count */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-semibold">Word Count</Label>
              <span className="text-2xl font-mono font-bold text-primary">{wordCount[0]}</span>
            </div>
            <Slider
              value={wordCount}
              onValueChange={setWordCount}
              min={3}
              max={10}
              step={1}
              className="cursor-pointer py-4"
            />
          </div>

          {/* Separator */}
          <div className="space-y-4">
            <Label className="text-base font-semibold">Separator</Label>
            <RadioGroup 
              defaultValue="-" 
              value={separator} 
              onValueChange={setSeparator}
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem value="-" id="sep-dash" className="peer sr-only" />
                <Label 
                  htmlFor="sep-dash" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                >
                  <span className="text-xl font-mono font-bold">-</span>
                  <span className="text-xs mt-2">Dash</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value=" " id="sep-space" className="peer sr-only" />
                <Label 
                  htmlFor="sep-space" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                >
                  <span className="text-xl font-mono font-bold">_</span>
                  <span className="text-xs mt-2">Space</span>
                </Label>
              </div>
              <div>
                <RadioGroupItem value="." id="sep-period" className="peer sr-only" />
                <Label 
                  htmlFor="sep-period" 
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer"
                >
                  <span className="text-xl font-mono font-bold">.</span>
                  <span className="text-xs mt-2">Period</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-between space-x-2 p-4 border border-border rounded-lg">
              <Label htmlFor="capitalize" className="flex flex-col space-y-1 cursor-pointer">
                <span className="font-medium">Capitalize Words</span>
                <span className="text-xs text-muted-foreground">Make it Title Case</span>
              </Label>
              <Switch id="capitalize" checked={capitalize} onCheckedChange={setCapitalize} />
            </div>
            <div className="flex items-center justify-between space-x-2 p-4 border border-border rounded-lg">
              <Label htmlFor="number" className="flex flex-col space-y-1 cursor-pointer">
                <span className="font-medium">Add Number</span>
                <span className="text-xs text-muted-foreground">Append random digits</span>
              </Label>
              <Switch id="number" checked={addNumber} onCheckedChange={setAddNumber} />
            </div>
          </div>
        </div>

        <Button 
          onClick={generatePassphrase} 
          className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Generate New Passphrase
        </Button>
      </div>

      <div className="bg-muted/50 p-4 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-green-600" />
        Generated locally. Words are random and secure (EFF Wordlist).
      </div>
    </Card>
  );
}