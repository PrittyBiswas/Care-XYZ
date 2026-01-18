/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.ibb.co",
    },
  ],
},

   images: {
    remotePatterns: [
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "5.imimg.com" },
      { protocol: "https", hostname: "cdn.grofers.com" },
      { protocol: "https", hostname: "majesticbookclub.in" },
      { protocol: "https", hostname: "images-cdn.ubuy.co.in" },
      { protocol: "https", hostname: "www.cubelelo.com" }
    ],
  },

};

export default nextConfig;
