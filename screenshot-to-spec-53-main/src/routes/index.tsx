import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ITSE Conecta · Propuesta de proyecto" },
      { name: "description", content: "Propuesta académica de ITSE Conecta, plataforma de comunicación estudiantil del ITSE." },
      { property: "og:title", content: "ITSE Conecta · Propuesta de proyecto" },
      { property: "og:description", content: "Propuesta académica de ITSE Conecta, plataforma de comunicación estudiantil del ITSE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// The presentation itself is plain HTML/CSS/JS in public/itse-conecta/.
function Index() {
  useEffect(() => {
    window.location.replace("/itse-conecta/index.html");
  }, []);
  return null;
}
