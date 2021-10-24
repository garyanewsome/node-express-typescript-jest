module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "14" } }], "@babel/preset-typescript"],
  sourceMaps: "inline",
  ignore: ["node_modules/**", "./dist", "./coverage", ".eslintrc.js", "babel.config.js", "jest.config.js"],
}
