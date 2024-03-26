const colors = require('tailwindcss/colors')
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#fc3858",
          '50': '#fff0f1',
          '100': '#ffe3e5',
          '200': '#ffcbd1',
          '300': '#ffa0ab',
          '400': '#ff6b80',
          '500': '#fc3858',
          '600': '#ea1441',
          '700': '#c60a36',
          '800': '#a50c35',
          '900': '#8d0e34',
          '950': '#4f0217',
          foreground: "#fff",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        active: {
          DEFAULT: "#fc3858",
          '50': '#fff0f1',
          '100': '#ffe3e5',
          '200': '#ffcbd1',
          '300': '#ffa0ab',
          '400': '#ff6b80',
          '500': '#fc3858',
          '600': '#ea1441',
          '700': '#c60a36',
          '800': '#a50c35',
          '900': '#8d0e34',
          '950': '#4f0217',
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#fc3858",
          '50': '#fff0f1',
          '100': '#ffe3e5',
          '200': '#ffcbd1',
          '300': '#ffa0ab',
          '400': '#ff6b80',
          '500': '#fc3858',
          '600': '#ea1441',
          '700': '#c60a36',
          '800': '#a50c35',
          '900': '#8d0e34',
          '950': '#4f0217',
          foreground: "#fff",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
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
  plugins: [require("tailwindcss-animate"),require("tailwindcss-bg-patterns")],
} satisfies Config

export default config