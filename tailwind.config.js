/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0a0a0f", panel: "#1a1a25", cobra: "#dc2650", raspberry: "#f43f6e", mauve: "#e8366d", violetSoft: "#7c5fd6" },
      boxShadow: { accent: "0 12px 34px rgba(220,38,80,.26)", glow: "0 24px 80px rgba(220,38,80,.18)", soft: "0 16px 45px rgba(0,0,0,.28)" }
    }
  },
  plugins: []
};
