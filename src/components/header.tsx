import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header className="px-4 py-2 flex justify-between items-center border-b border-border">
      <h1 className="text-lg font-medium">
        <Logo />
      </h1>
      <nav className="flex flex-row items-center justify-end gap-1">
        <ThemeToggle />
        <Button variant="ghost" size="sm" asChild>
          <a href="https://iamai-vercel.app" target="_blank" rel="noopener noreferrer">
            Home
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a
            href="https://x.com/James__Spalding"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </Button>
      </nav>
    </header>
  );
}
