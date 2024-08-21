/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#52525b",
          primary: "#FFFFFF",
          info: "#3b82f6",
          success: "#272d1d",
          "success-content": "#bef264",
          neutral: "#52525b",
          "neutral-content": "#ffffff",
          "base-100": "#09090b",
          "base-200": "#18181b",
          "base-300": "#242427",
          "base-content": "#ffffff"
        }
      }
    ]
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
}