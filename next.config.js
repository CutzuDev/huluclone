// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

module.exports = {
  images: {
    domains: [
      "links.papareact.com",
      "image.tmdb.org",
      "press.hulu.com",
      "tmdb.org",
      "themoviedb.org",
      "cdn.discordapp.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmbd.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tmdb.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "themoviedb.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
