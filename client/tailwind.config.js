/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        
        extend: {
            colors: {
                primary: "#93bba6",
                accent: "#dc8563ff",
                background: "#e2cfb9ff",
                darkbrown: "#252121",
                meditation: "#617556"
            },
            fontFamily: {
                ramaraja: ["Ramaraja", "serif"],
            },
        },
    },
    plugins: [],
};
