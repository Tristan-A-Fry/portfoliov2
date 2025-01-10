/** @type {import('tailwindcss').Config} */


module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                matteGray: "#2F3136", // Custom matte gray
                customCyan: "#00c0d6",
            },
        },
    },
    plugins: [],
};

