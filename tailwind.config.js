/** @type {import('tailwindcss').Config} */
module.exports = {
    
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#333A73",
                secondary: "#FCCA46",
                highlightOne: "#fe7f2d",
                highlightTwo: "#fcca46",
                background: "#233d4d",
                backgroundUI: "#A1C181",
            },
            fontFamily: {
                sans: ['Lato', 'sans-serif']
            }
        },
    },
    plugins: [
        require('tailwindcss/plugin')(function({ addComponents }) {

            addComponents({
                '.slide-link': {
                    color: "#fcca46",
                    fontWeight: '700',
                },
            });
        }),
    ],
};

