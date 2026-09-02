import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps { children: ReactNode; variant?: Variant; size?: Size; className?: string }
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

const variants: Record<Variant, string> = {
  primary: 'bg-brand-green text-white hover:bg-brand-green-dark shadow-[0_12px_30px_rgba(65,151,42,.22)]',
  secondary: 'bg-brand-cyan text-brand-ink hover:bg-[#75dbee] shadow-[0_12px_30px_rgba(54,194,229,.2)]',
  outline: 'border-2 border-brand-ink/20 text-brand-ink hover:border-brand-green hover:text-brand-green-dark',
  light: 'border-2 border-white/35 text-white hover:bg-white hover:text-brand-ink',
}
const sizes: Record<Size, string> = { sm: 'min-h-10 px-4 text-sm', md: 'min-h-12 px-5 text-sm', lg: 'min-h-14 px-7 text-base' }

export function Button(props: ButtonProps | LinkProps) {
  const { children, variant = 'primary', size = 'md', className = '', ...rest } = props
  const styles = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-cyan ${variants[variant]} ${sizes[size]} ${className}`
  if ('href' in rest && rest.href) return <a className={styles} {...rest}>{children}</a>
  return <button className={styles} {...rest as ButtonHTMLAttributes<HTMLButtonElement>}>{children}</button>
}
