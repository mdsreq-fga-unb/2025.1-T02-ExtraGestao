module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                chakra: ['var(--font-chakra-petch)', 'sans-serif'],
                nunito: ['var(--font-nunito)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
