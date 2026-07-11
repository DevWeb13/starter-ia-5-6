"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const themes = ["system", "light", "dark"] as const;
const labels = {
  system: "système",
  light: "clair",
  dark: "sombre",
};

export function ThemeToggle() {
  const { theme = "system", setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted) {
    return (
      <Button type="button" variant="ghost" size="icon" aria-label="Changer de thème" disabled>
        <Monitor aria-hidden="true" className="size-5" />
      </Button>
    );
  }

  const currentTheme = themes.includes(theme as (typeof themes)[number])
    ? (theme as (typeof themes)[number])
    : "system";
  const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
  const Icon = currentTheme === "dark" ? Moon : currentTheme === "light" ? Sun : Monitor;

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={`Thème ${labels[currentTheme]}. Passer au thème ${labels[nextTheme]}.`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon aria-hidden="true" className="size-5" />
    </Button>
  );
}
