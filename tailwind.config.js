module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'btn-gradient': 'linear-gradient(169deg, #5560ff 17%, #aa52a1 63%, #ff4343 100%)',
      })
    },
    boxShadow: {
      'btn-shadow': '0px 10px 15px 0px rgba(59, 55, 188, 0.5)',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': 'var(--color-primary)',
      'secondary': 'var(--color-secondary)',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}