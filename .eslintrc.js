// required to load local dependencies of kidsloop-eslint-config
// https://github.com/eslint/eslint/issues/3458
require(`@rushstack/eslint-patch/modern-module-resolution`);

module.exports = {
    extends: [ `@kl-engineering/eslint-config` ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: `module`,
        project: `tsconfig.eslint.json`,
    },
};
