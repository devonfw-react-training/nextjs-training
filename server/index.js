require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    [
      "inline-svg",
      {
        exportDataURI: true,
      },
    ],
  ],
});

require("./server");
