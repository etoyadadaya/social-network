import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

    const cssLoaders = {
      test: /\.s[ac]ss$/i,
      use: [
          "style-loader",
          "css-loader",
          "sass-loader",
      ],
    }

  return [
    typescriptLoader,
    cssLoaders,
  ]
}
