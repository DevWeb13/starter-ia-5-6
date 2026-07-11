"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/fonctionnalites", label: "Fonctionnalités" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/docs", label: "Démarrage" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/75 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="page-shell flex min-h-16 items-center justify-between gap-2 py-2">
        <Link
          href="/"
          className="flex min-h-11 min-w-0 items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="AI Project Launcher, accueil"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-[10px] bg-primary font-mono text-sm font-bold text-primary-foreground">
            AI
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-bold sm:text-base">AI Project Launcher</span>
            <span className="hidden text-xs text-muted-foreground sm:block">Démo de Starter IA 5.6</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={cn(
                "min-h-11 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                pathname === item.href && "bg-muted text-foreground underline",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/demo"
            aria-current={pathname === "/demo" ? "page" : undefined}
            className={buttonVariants({ className: cn("ml-2", pathname === "/demo" && "underline underline-offset-4") })}
          >
            Essayer la démo
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <Button
            ref={triggerRef}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Navigation mobile"
          className="border-t border-border bg-background px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3 lg:hidden"
        >
          <div className="mx-auto grid max-w-md gap-1">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-[10px] px-3 font-medium text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  pathname === item.href && "bg-muted text-foreground underline underline-offset-4",
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo"
              aria-current={pathname === "/demo" ? "page" : undefined}
              className={buttonVariants({ size: "lg", className: cn("mt-2 w-full", pathname === "/demo" && "underline underline-offset-4") })}
              onClick={() => setOpen(false)}
            >
              Essayer la démo locale
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
