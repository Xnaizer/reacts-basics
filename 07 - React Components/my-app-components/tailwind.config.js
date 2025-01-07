/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Sesuaikan dengan struktur folder proyek Anda
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f4067",
        "primary-light": "#134a77",
        text: "#dee2e6",
        "text-dark": "#adb5bd",
        "background-100": "#343a40",
        "background-500": "#2b3035",
        "background-900": "#212529",
        red: "#fa5252",
        "red-dark": "#e03131",
      },
      spacing: {
        6: "1.5rem",    // 24px
        8: "2rem",      // 32px
        10: "2.5rem",   // 40px
        12: "3rem",     // 48px
        14: "3.5rem",   // 56px
        16: "4rem",     // 64px
        20: "5rem",     // 80px
        24: "6rem",     // 96px
        32: "8rem",     // 128px
        40: "10rem",    // 160px
        48: "12rem",    // 192px
        56: "14rem",    // 224px
        64: "16rem",    // 256px
      },
      fontSize: {
        sm: "0.875rem",     // 14px
        base: "1rem",       // 16px
        lg: "1.125rem",     // 18px
        xl: "1.25rem",      // 20px
        "2xl": "1.5rem",    // 24px
        "3xl": "1.875rem",  // 30px
        "4xl": "2.25rem",   // 36px
        "5xl": "3rem",      // 48px
        "6xl": "3.75rem",   // 60px
      },
      width: {
        42: "10.5rem", // 168px
      },
      maxWidth: {
        42: "10.5rem", // 168px
      },
      translate: {
        '0.5': '0.125rem', // 2px
      }
    },
  },
  plugins: [],
};