/* eslint-disable no-undef */
/** This is a script run during the build process in a node environment */
/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("@deriv/quill-design/quill-tailwind/tailwind.config.cjs")],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            animation: {
                loading: "loading 1s ease-in-out infinite",
                fadeIn: "fadeIn 0.3s ease-in-out",
            },
        },
        keyframes: {
            loading: {
                "0%, 100%": {
                    opacity: 1,
                },
                "50%": {
                    opacity: 0.3,
                },
            },
            fadeIn: {
                "0%": {
                    opacity: 0,
                },
                "100%": {
                    opacity: 1,
                },
            },
        },
    },
};
