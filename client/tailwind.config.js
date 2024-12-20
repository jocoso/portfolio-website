
/** @type {import('tailwindcss').Config} */
export default {
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
                background: "#e2cfb9ff",
                darkbrown: "#252121",
                accent: "#dc8563ff",
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
