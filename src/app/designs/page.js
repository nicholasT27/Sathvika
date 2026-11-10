import Link from "next/link";

const options = [
  ["/designs/summit-calm", "Summit layout · Calm (new)", "Centred-logo menu, collage hero, ticker, two-tone split panels, pattern borders. Quiet and elegant.", "bg-blue"],
  ["/designs/summit-bold", "Summit layout · Bold (new)", "Same editorial layout with louder colour, chunky headings and checks.", "bg-yellow"],
  ["/designs/summit-cascade", "Hero · Cascade (new)", "Calm look. Four founder photos step down a staircase, overlapping and slanted, like the Wayo Girl reference.", "bg-sky"],
  ["/designs/summit-quad", "Hero · Quad (new)", "Bold look. Four pastel squares (blue, mint, pink, yellow), each with a flower-framed photo and a headline card in the middle.", "bg-yellow"],
  ["/designs/summit-row", "Hero · Row (new)", "Bold look. Headline and button on top, then four tilted rounded cards in a row that lift on hover.", "bg-orange"],
  ["/designs/layout-launcher", "Whole-page Layout G · Launcher (new)", "The hero, then a grid of chapter tiles; each opens as a full-screen page with a close button.", "bg-red"],
  ["/designs/layout-split", "Whole-page Layout H · Split screen (new)", "A sticky left half shows the current chapter number, name and colour while the right half scrolls.", "bg-ink text-butter"],
  ["/designs/layout-waves", "Whole-page Layout I · Checks flow (now the home page)", "Colour bands step into each other through checks dividers, with a progress ring that follows you.", "bg-sky"],
  ["/designs/layout-chapters", "Whole-page Layout D · Chapter title bands (new)", "A big numbered title band opens every chapter, so each section starts the same way.", "bg-orange"],
  ["/designs/layout-tabs", "Whole-page Layout E · Tab dock (new)", "One chapter on screen at a time with a bottom tab dock, arrow keys and links that switch chapters.", "bg-sky"],
  ["/designs/layout-journey", "Whole-page Layout F · Journey line (new)", "A dashed line down the left with a numbered stop at every chapter.", "bg-butter"],
  ["/designs/layout-frames", "Whole-page Layout A · Framed panels (new)", "Every chapter a rounded panel in one cream frame, with a floating menu that follows you.", "bg-sky"],
  ["/designs/layout-rail", "Whole-page Layout B · Chapter rail (new)", "A numbered 01-09 chapter rail stays on the left; phones get a chapter strip.", "bg-butter"],
  ["/designs/layout-scenes", "Whole-page Layout C · Full-screen scenes (new)", "Each chapter is one centred full screen, the page settles on each, with dot navigation.", "bg-yellow"],
  ["/designs/criminals", "Creative Criminals with the mascot · 3 designs (new)", "Police lineup with camera flashes, a catch-Penny game, and a detective corkboard.", "bg-red"],
  ["/designs/services", "Services · 4 designs (new)", "Postage stamps, a book you page through, a shopping basket you fill, and vintage newspaper coupons you clip.", "bg-sky"],
  ["/designs/ideology-night", "Ideology Night · 3 variations (new)", "Spotlight, neon sign with scrolling words, and a cinema screen with subtitles. All auto-rotate.", "bg-ink text-butter"],
  ["/designs/ideology-stage", "Ideology Stage · 3 takes (new)", "Night stage with a glowing arch, triple-arch slider, and an outline-type list. All auto-rotate.", "bg-ink text-butter"],
  ["/designs/ideology-flow", "Ideology under the ribbon · 3 distinct designs (new)", "Ribbon stack, a giant-type stage with an arch photo, and a fanned card deck. All auto-rotate.", "bg-red"],
  ["/designs/flow", "Founder to ideology flow · 3 fixes (new)", "Three ways to connect the founder section and the ideology section: checks fade, one band with matching boxes, and a ribbon handover.", "bg-sky"],
  ["/designs/ideology-interactive", "Ideology · Design C, interactive (new)", "Pick a belief and the photo swaps, with new photos for each.", "bg-orange"],
  ["/designs/ideology-box", "Ideology · Split panel in a box, slanted title (new)", "Three designs: the split panel inside the rounded box on thick checks, with a slanted ribbon title.", "bg-yellow"],
  ["/designs/ideology-mix", "Ideology · Mixed designs 2 + 3 (new)", "Three hybrids of the split panel and the box on checks: checks half with a box, a checks-framed box on the seam, and a split intro over four boxes on checks.", "bg-orange"],
  ["/designs/ideology", "Ideology · 4 designs (new)", "Slanted lines on checks, split panel with a checks strip, a box over checks, and checks down the sides. Each switches between orange and white or butter and blue.", "bg-orange"],
  ["/designs/remote-portal", "Remote · Door, side by side (new)", "Just the door: words on the left, one arch door on the right that opens to a computer photo.", "bg-butter"],
  ["/designs/remote-more", "Remote · 3 more styles (new)", "Paper-cut portal, an always-on 24-hour coverage chart, and a knock-knock comic you play by knocking.", "bg-yellow"],
  ["/designs/remote-styles", "Remote · 3 distinct styles (new)", "Same content, completely different looks: illustrated shopfront, blueprint drawing, and a night scene with a glowing door.", "bg-blue"],
  ["/designs/remote-checks", "Remote · Checkered frame variations (new)", "Three takes on the chosen checkered-frame door: sunny, tilted with a starburst, and reversed in blue.", "bg-sky"],
  ["/designs/remote", "Remote section · 3 designs (new)", "Only the Remote section: the arch window from the client reference as a door with a knob, in three layouts.", "bg-blue"],
  ["/designs/pop", "Style 1 · Sticker Pop (new)", "Same layout, no journal look: thick outlines, hard shadows, slanted ribbons and round stickers.", "bg-orange"],
  ["/designs/postage", "Style 2 · Postage Stamp (new)", "Same layout as an airmail envelope: perforated stamps, ticket stubs, lined letter paper.", "bg-sky"],
  ["/designs/collage", "Wavy Collage (previous home page)", "The earlier home page: clean cards, digital-marketing icons.", "bg-yellow"],
  ["/", "★ Home page: Checks flow layout", "The main website now: colour bands step into each other through checks dividers, with a chapter progress badge.", "bg-yellow"],
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
