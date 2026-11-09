import Link from "next/link";

const options = [
  ["/designs/framed", "A · Framed Panels", "Cream page, thin red frame, chunky rounded panels. Calm, clean and very Rayo.", "bg-blue text-paper"],
  ["/designs/scrapbook", "B · Scrapbook", "Red backdrop, tilted cards, cloud blobs and floating tags. The most playful.", "bg-red text-paper"],
  ["/designs/constructor", "C · Constructor", "Grid-paper page where visitors build their own campaign. Most interactive.", "bg-yellow text-ink"],
  ["/", "Original", "The first version, with checks, stamps and the door.", "bg-orange text-paper"],
];

// A simple menu page for comparing the website design options side by side.
export default function Designs() {
  return (
    <main className="min-h-screen bg-butter px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl text-red">Pick a direction</h1>
        <p className="mt-3">Same content, different personalities. Open each one and compare.</p>
        <div className="mt-10 grid gap-6">
          {options.map(([href, name, blurb, cls]) => (
            <Link key={href} href={href} className={`${cls} border-[3px] border-ink rounded-3xl p-6 shadow-[6px_6px_0_#3b1410] hover:-translate-y-1 transition`}>
              <h2 className="display text-3xl">{name}</h2>
              <p className="mt-1">{blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
