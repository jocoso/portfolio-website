/** @type {import('tailwindcss').Config} */
module.exports = {

    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#333A73",
                secondary: "rgba(80, 196, 237, 0.3)",
                highlightOne: "#fe7f2d",
                highlightTwo: "#fcca46",
                background: "#233d4d",
            },
            minHeight: {
                section: ".2vh",
            },
            minWidth: {
                section: "full",
            },
        },
    },
};

