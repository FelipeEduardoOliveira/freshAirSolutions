export function Logo({ light = false }: { light?: boolean }) {
  return <a href="#home" className="flex items-center gap-3" aria-label="Fresh Air Solutions home"><span className="grid size-11 rotate-[-7deg] place-items-center rounded-[50%_50%_50%_14px] bg-gradient-to-br from-brand-cyan to-brand-green text-sm font-black text-white">FA</span><span><strong className={`block leading-tight ${light ? 'text-white' : 'text-brand-ink'}`}>Fresh Air Solutions</strong><small className="block text-[10px] font-bold uppercase tracking-[.13em] text-brand-green">Elevate your every Breath</small></span></a>
}
