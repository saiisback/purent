"use client";

import Image from "next/image";
import { Rubik_Pixels, Jersey_10 } from "next/font/google";

const rubikPixels = Rubik_Pixels({
  weight: "400",
  subsets: ["latin"],
});

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/landing.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.5rem",
        margin: 0,
        padding: 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <h1
        className={jersey10.className}
        style={{
          fontSize: "clamp(6rem, 18vw, 12rem)",
          color: "#3d2a24",
          textShadow: "3px 3px 0px rgba(201, 125, 96, 0.6)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          margin: 0,
          lineHeight: 1,
        }}
      >
        purent
      </h1>

      <p
        className={jersey10.className}
        style={{
          fontSize: "clamp(1.2rem, 4vw, 2rem)",
          color: "#5c3d2e",
          margin: 0,
          textAlign: "center",
          fontStyle: "italic",
          letterSpacing: "0.05em",
        }}
      >
        A fur-ever record of shared love.
      </p>

      <button
        className={rubikPixels.className}
        style={{
          fontSize: "clamp(1rem, 3vw, 1.8rem)",
          padding: "0.8rem 2rem",
          backgroundColor: "#c97d60",
          color: "#fff8f0",
          border: "4px solid #3d2a24",
          borderRadius: "4px",
          cursor: "pointer",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          boxShadow: "4px 4px 0px #3d2a24",
          transition: "all 0.2s ease",
          marginTop: "0.5rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#b86a4d";
          e.currentTarget.style.transform = "translate(2px, 2px)";
          e.currentTarget.style.boxShadow = "2px 2px 0px #3d2a24";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#c97d60";
          e.currentTarget.style.transform = "translate(0, 0)";
          e.currentTarget.style.boxShadow = "4px 4px 0px #3d2a24";
        }}
      >
        Coming Soon
      </button>
    </div>
  );
}
