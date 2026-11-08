import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://amankumar2006.vercel.app/sitemap.xml",
    host: "https://amankumar2006.vercel.app/",
  };
}
