/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A202C',
        'secondary': '#3498DB',
        'accent': '#27AE60'
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "0.5rem", // Reduced padding for smallest screens
          sm: "1rem",
          md: "2rem",
          lg: "8rem"
        } 
      },
      animation: {
        'pulse-slow': 'pulse 3s infinite',
        'pulse-fast': 'pulse 1s infinite',
        'move-line': 'moveLine 5s linear infinite',
      },
      keyframes: {
        moveLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      // Responsive Font Sizes
      fontSize: {
        'xs-mobile': '0.75rem',
        'sm-mobile': '0.875rem',
        'base-mobile': '1rem',
        'lg-mobile': '1.125rem',
        'xl-mobile': '1.25rem',
      },
      // Responsive Spacing
      spacing: {
        'mobile': '0.5rem',
        'tablet': '1rem',
        'desktop': '1.5rem'
      }
    },
    // Responsive Breakpoints
    screens: {
      'xs': '320px',     // Extra small devices
      'sm': '640px',     // Small devices
      'md': '768px',     // Medium devices
      'lg': '1024px',    // Large devices
      'xl': '1280px',    // Extra large devices
      '2xl': '1536px'    // 2X large devices
    }
  },
  plugins: [
    // Responsive Typography Plugin
    function({ addBase, theme }) {
      addBase({
        'html': { 
          fontSize: '16px',
          '@media (max-width: 1200px)': {
            fontSize: '14px'
          },
          '@media (max-width: 768px)': {
            fontSize: '12px'
          }
        }
      })
    }
  ],
}