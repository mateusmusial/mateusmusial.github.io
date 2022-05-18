module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "wall-theme": "url('../public/background.jpg')",
      }),
      backgroundSize: {
        "100%": "100%",
        "195%": "195%",
      },
      backgroundPosition: {
        banner: "46% 4%",
        "banner-mobile": "top 25% center",
      },
    },
  },
  plugins: [],
};
