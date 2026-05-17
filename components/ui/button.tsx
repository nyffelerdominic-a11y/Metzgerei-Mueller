import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-[transform,background-color,color,box-shadow,border-color] duration-200 [transition-timing-function:var(--ease-out)] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] active:duration-100",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-red text-paper hover:bg-brand-red-dark shadow-[0_1px_0_0_rgba(154,22,32,0.4)_inset,0_8px_24px_-12px_rgba(200,32,43,0.6)] hover:shadow-[0_1px_0_0_rgba(154,22,32,0.4)_inset,0_12px_32px_-12px_rgba(200,32,43,0.8)]",
        "on-dark":
          "bg-paper text-ink hover:bg-brass hover:text-ink",
        navy:
          "bg-brand-navy text-paper hover:bg-brand-navy-dark",
        outline:
          "border border-ink/15 text-ink hover:bg-ink/5 hover:border-ink/30",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-brand-red underline-offset-4 hover:underline px-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-full",
        md: "h-11 px-6 text-[15px] rounded-full",
        lg: "h-13 px-8 text-base rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(button({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export function ButtonLink({
  href,
  className,
  variant,
  size,
  children,
  external,
  ...rest
}: VariantProps<typeof button> & {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  if (external) {
    return (
      <a
        href={href}
        className={cn(button({ variant, size }), className)}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn(button({ variant, size }), className)} {...rest}>
      {children}
    </Link>
  );
}
