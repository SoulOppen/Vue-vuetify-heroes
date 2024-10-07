module.exports = {
  publicPath:
    ProcessingInstruction.env.NODE_ENV === "production"
      ? /"Vue-vuetify-heroes"/
      : "/",
};
