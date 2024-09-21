/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        
        extend: {
            gridTemplateColumns: {
                'autofill-400': 'repeat(auto-fill, 425px)',
                'fill-remaining': '1fr',
            },
            gridTemplateRows: {
                '650': '650px',
            },
            colors: {
                primary: "#93bba6",
                accent: "#dc8563ff",
                background: "#e2cfb9ff",
                darkbrown: "#252121",
                meditation: "#617556",
                test: "red"
            },
            fontFamily: {
                ramaraja: ["Ramaraja", "serif"],
            },
        },
    },
    plugins: [],
};
