/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#333A73",
                secondary: "rgba(80, 196, 237, 0.3)",
                highlight: "#FBA834",
                background: "#387ADF",
            },
        },
    },
};
