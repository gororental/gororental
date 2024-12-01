/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Jost: ["Jost"]
      },
      colors: {
        'cstm': '#001C3B',
      },
      screens: {
        'sm': '375px',        // Standard smartphones
        // @media(min-width: 375px)
        'md': '425px', // Large smartphones or small tablets
        // @media(min-width: 425px)
        'tmd': '600px',// Medium size tablets
        // @media(min-width: 600px)
        'lg': '768px',    // Tablets in portrait
        // @media(min-width: 768px)
        'tlg': '900px',   // Large tablets
        // @media(min-width: 900px)
        'xl': '1030px',   // Tablets in landscape or small laptops
        // @media(min-width: 1024px)
        'mxl': '1200px',  // Medium size laptops
        // @media(min-width: 1200px)#001C3B
        '2xl': '1440px',  // Standard desktops
        // @media(min-width: 1440px)
        '3xl': '1600px',   // Big screen desktops
        // @media(min-width: 1600px)
        '4k': '2560px',      // Large screens or 4K monitors
        // @media(min-width: 2560px)
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
      },
      animation: {
        slide: 'slide 100s linear infinite',
      },
    },
    plugins: [],
  }
}
