// Shared wording for the Summit-style designs. Edit the text here.
export const beliefs = [
  ["Boring is the only bad idea.", "We push every brief until it has a clear point of view."],
  ["Strategy first, sparkle second.", "Every creative choice answers a business goal."],
  ["Brands are people.", "We give them a voice, values and a personality worth following."],
  ["Done is good. Delightful is better.", "We ship fast, then keep improving with what the data tells us."],
];

export const services = [
  { icon: "branding", name: "Branding", line: "Identities that look sharp and sound like you." },
  { icon: "performance", name: "Performance Marketing", line: "Paid campaigns built around measurable growth." },
  { icon: "website", name: "Website Designing", line: "Fast, clear websites designed to convert." },
  { icon: "strategy", name: "Marketing Strategy", line: "A plan with a point of view and a path to results." },
  { icon: "creative", name: "Creative", line: "Campaign ideas and assets people stop scrolling for." },
  { icon: "content", name: "Content", line: "Content that earns attention and keeps it." },
];

export const tickerWords = ["Branding", "Performance Marketing", "Website Designing", "Marketing Strategy", "Creative", "Content"];

// One photo per belief, used by the rotating ideology designs.
export const ideologyPhotos = [
  { src: "/images/social.jpg", alt: "Social media apps on a phone", note: "Standing out in the feed" },
  { src: "/images/analytics.jpg", alt: "A marketing analytics dashboard on a laptop", note: "Numbers behind every idea" },
  { src: "/images/cheers.jpg", alt: "Two coffee cups clinking over a cafe table", note: "People talking to people" },
  { src: "/images/latte.jpg", alt: "Latte art on a cafe table with plants", note: "Finishing touches matter" },
];

// Photo and bullet points for each service, in the same order as "services" above.
export const serviceExtras = [
  { key: "branding", photo: "/images/services/branding.jpg", points: ["Logo and visual identity", "Brand guidelines", "Tone of voice"] },
  { key: "performance", photo: "/images/services/performance.jpg", points: ["Paid social and search", "Conversion tracking", "Monthly reporting"] },
  { key: "website", photo: "/images/services/website.jpg", points: ["UX and UI design", "Landing pages", "Speed and SEO basics"] },
  { key: "strategy", photo: "/images/services/strategy.jpg", points: ["Audience research", "Positioning", "Channel planning"] },
  { key: "creative", photo: "/images/services/creative.jpg", points: ["Campaign concepts", "Ad creative", "Social visuals"] },
  { key: "content", photo: "/images/services/content.jpg", points: ["Social content", "Copywriting", "Video and reels"] },
];

// The nine chapters of the site in the client's order: id on the page and the short name shown in menus.
export const chapters = [["top", "Founder"], ["founder", "About"], ["ideology", "Ideology"], ["remote", "Remote"], ["criminals", "Criminals"], ["licence", "Licence"], ["rules", "Rules"], ["services", "Services"], ["contact", "Contact"]];

