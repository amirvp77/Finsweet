export const dynamic = "force-static";

export default function manifest() {
  return {
    name: "Finsweet Agency",
    short_name: "Finsweet",
    description: "Finsweet Agency Landing Page",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000",
    icons: [
      {
        src: "/pwa192.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/pwa512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/desktop.png",
        sizes: "1080x1080",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/mobile.png",
        sizes: "547x365",
        type: "image/png",
      },
    ],
  };
}
