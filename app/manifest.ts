import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aman Kumar — Full-Stack Developer",
    short_name: "Aman Kumar",
    description: "A build log from Ranchi, Jharkhand.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0b09",
    theme_color: "#0c0b09",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
