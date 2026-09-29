import type { ReactNode } from "react";

export function Field({
  label,
  id,
  full = false,
  children,
}: {
  label: string;
  id: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={id}
      className={`grid gap-2 text-sm font-extrabold text-brand-ink ${full ? "sm:col-span-2" : ""}`}
    >
      {label}
      {children}
    </label>
  );
}
