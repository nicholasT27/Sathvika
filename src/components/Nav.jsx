const links = [
  ["About", "#founder"], ["Ideology", "#ideology"], ["Remote", "#remote"],
  ["Criminals", "#criminals"], ["Rules", "#rules"], ["Services", "#services"],
];

// Shows the sticky top menu with links to each section and a "Contact" button.
export default function Nav() {
  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3">
      <nav className="mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full border-[3px] border-ink bg-paper/95 text-ink backdrop-blur px-5 py-2 shadow-[4px_4px_0_var(--ink)]">
        <a href="#top" className="display text-xl text-red">Sathvika<span className="text-blue">*</span></a>
        <ul className="hidden lg:flex gap-5 font-semibold">
          {links.map(([name, href]) => (
            <li key={name}><a className="hover:text-red" href={href}>{name}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn bg-red text-paper !py-1.5 !px-4 text-sm">Contact</a>
      </nav>
    </header>
  );
}
