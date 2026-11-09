import Link from "next/link";

const options = [
  ["/designs/pop", "Style 1 · Sticker Pop (new)", "Same layout, no journal look: thick outlines, hard shadows, slanted ribbons and round stickers.", "bg-orange"],
  ["/designs/postage", "Style 2 · Postage Stamp (new)", "Same layout as an airmail envelope: perforated stamps, ticket stubs, lined letter paper.", "bg-sky"],
  ["/designs/collage", "Style 3 · Wavy Collage (chosen, same as home)", "Chosen design, refined for an agency: clean cards, digital-marketing icons.", "bg-yellow"],
  ["/", "★ Home page: professional Wavy Collage", "The current site.", "bg-yellow"],
  ["/designs/polaroid-line", "E2 · Clothesline", "Previous pick: pegged polaroids on a washing line.", "bg-sky"],
  ["/designs/framed", "A · Framed Panels", "Thin red frame with chunky rounded panels. Calm and clean.", "bg-blue"],
  ["/designs/scrapbook", "B · Scrapbook", "Soft pink table, tilted cards, cloud blobs and floating tags.", "bg-pink"],
  ["/designs/constructor", "C · Constructor", "Grid paper where visitors build their own campaign.", "bg-yellow"],
  ["/designs/journal", "D · Journal (new)", "Editorial pink page with big words and right-aligned lists.", "bg-sky"],
  ["/designs/polaroid", "E1 · Polaroid Wall", "Taped polaroids and sticky notes. Each section enters differently as you scroll.", "bg-butter"],
  ["/designs/polaroid-desk", "E3 · Photo Desk (new)", "Pink desk where photos spill out of a pile, paper strips wipe in and service cards flip.", "bg-pink"],
  ["/designs/bento", "F · Bento (new)", "A mosaic of tiles up top, one per section. Click to jump.", "bg-orange"],
];

// A simple menu page for comparing every website design option, all in the soft palette.
export default function Designs() {
  return (
    <main className="soft min-h-screen px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl text-red">Pick a direction</h1>
        <p className="mt-3">Same content, different personalities. All use the soft palette from the last reference.</p>
        <div className="mt-10 grid gap-5">
          {options.map(([href, name, blurb, cls]) => (
            <Link key={href} href={href} className={`${cls} border border-red/40 rounded-3xl p-6 hover:-translate-y-1 transition`}>
              <h2 className="display text-3xl text-red">{name}</h2><p className="mt-1">{blurb}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
