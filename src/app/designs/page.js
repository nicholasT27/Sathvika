import Link from "next/link";

const options = [
  ["/designs/summit-calm", "Summit layout · Calm (new)", "Centred-logo menu, collage hero, ticker, two-tone split panels, pattern borders. Quiet and elegant.", "bg-blue"],
  ["/designs/summit-bold", "Summit layout · Bold (new)", "Same editorial layout with louder colour, chunky headings and checks.", "bg-yellow"],
  ["/designs/summit-cascade", "Hero · Cascade (new)", "Calm look. Four founder photos step down a staircase, overlapping and slanted, like the Wayo Girl reference.", "bg-sky"],
  ["/designs/summit-quad", "Hero · Quad (new)", "Bold look. Four pastel squares (blue, mint, pink, yellow), each with a flower-framed photo and a headline card in the middle.", "bg-yellow"],
  ["/designs/summit-row", "Hero · Row (new)", "Bold look. Headline and button on top, then four tilted rounded cards in a row that lift on hover.", "bg-orange"],
  ["/designs/ideology", "Ideology · 4 designs (new)", "Slanted lines on checks, split panel with a checks strip, a box over checks, and checks down the sides. Each switches between orange and white or butter and blue.", "bg-orange"],
  ["/designs/remote-portal", "Remote · Door, side by side (new)", "Just the door: words on the left, one arch door on the right that opens to a computer photo.", "bg-butter"],
  ["/designs/remote-more", "Remote · 3 more styles (new)", "Paper-cut portal, an always-on 24-hour coverage chart, and a knock-knock comic you play by knocking.", "bg-yellow"],
  ["/designs/remote-styles", "Remote · 3 distinct styles (new)", "Same content, completely different looks: illustrated shopfront, blueprint drawing, and a night scene with a glowing door.", "bg-blue"],
  ["/designs/remote-checks", "Remote · Checkered frame variations (new)", "Three takes on the chosen checkered-frame door: sunny, tilted with a starburst, and reversed in blue.", "bg-sky"],
  ["/designs/remote", "Remote section · 3 designs (new)", "Only the Remote section: the arch window from the client reference as a door with a knob, in three layouts.", "bg-blue"],
  ["/designs/pop", "Style 1 · Sticker Pop (new)", "Same layout, no journal look: thick outlines, hard shadows, slanted ribbons and round stickers.", "bg-orange"],
  ["/designs/postage", "Style 2 · Postage Stamp (new)", "Same layout as an airmail envelope: perforated stamps, ticket stubs, lined letter paper.", "bg-sky"],
  ["/designs/collage", "Wavy Collage (previous home page)", "The earlier home page: clean cards, digital-marketing icons.", "bg-yellow"],
  ["/", "★ Home page: Summit layout (Bold, Row hero)", "The main website now: headline and button on top, four rounded founder cards in a row, door Remote section.", "bg-yellow"],
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
