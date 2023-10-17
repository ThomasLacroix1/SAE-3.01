/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "base-white": "hsl(var(--base--white))",
        "base-black": "hsl(var(--base--black))",
        "clr-light-grey": "hsl(var(--colors--light-grey))",
        "clr-grey": "hsl(var(--colors--grey))",
        "clr-dark-grey": "hsl(var(--colors--dark-grey))",
        "clr-light-green": "hsl(var(--colors--light-green))",
        "clr-green": "hsl(var(--colors--green))",
        "clr-cons-xbox": "hsl(var(--consoles--green-xbox))",
        "clr-cons-ps": "hsl(var--consoles--blue-ps))",
        "clr-cons-nintendo": "hsl(var(--consoles--red-nintendo))",
    },
    fontFamily:{
        'inter': ["'Inter', sans-serif"],
      
  },
    },
  },
  plugins: [],
}

