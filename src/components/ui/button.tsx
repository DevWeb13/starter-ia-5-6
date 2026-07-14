import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-55 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-active active:bg-primary-active disabled:hover:bg-primary",
        secondary:
          "border border-border bg-card text-card-foreground hover:bg-muted disabled:hover:bg-card",
        ghost: "text-foreground hover:bg-muted disabled:hover:bg-transparent",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted disabled:hover:bg-transparent",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 disabled:hover:bg-destructive",
      },
      size: {
        default: "h-11",
        lg: "min-h-12 px-5 text-base",
        icon: "size-11 shrink-0 p-0",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button, buttonVariants };
