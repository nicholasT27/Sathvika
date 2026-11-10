/** @type {import('next').NextConfig} */
const nextConfig = {
  // Builds the site as plain static files in the "out" folder, which is what Cloudflare Pages publishes.
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
