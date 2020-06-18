const cssModuleRegex = /\.module\.css$/;
const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
    ].filter(Boolean);
    if (preProcessor) {
        loaders.push(
            {
                loader: require.resolve('resolve-url-loader'),
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: require.resolve(preProcessor),
                options: {
                    sourceMap: true,
                },
            }
        );
    }
    return loaders;
};

module.exports = {
    stories: ['../src/**/*.stories.*'],
    addons: [
        'storybook-addon-themes'
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                },
            ],
        });
        config.module.rules.push({
            test: /\.(?:le|c)ss$/,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: true,
            }, 'less-loader'),
            sideEffects: true,
        },);
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};