module.exports = {
  ignoreFiles: ["**/public/index.html"],
  extends: [
    "stylelint-config-rational-order",
    "stylelint-config-html",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-order", "stylelint-config-rational-order/plugin"],
  rules: {
    "order/properties-order": [],
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": false,
        "empty-line-between-groups": true,
      },
    ],
    "declaration-empty-line-before": [
      "always",
      { ignore: ["after-declaration"], except: ["first-nested"] },
    ],
    "rule-empty-line-before": [
      "always-multi-line",
      { except: ["first-nested"] },
    ],
    "max-empty-lines": 1,
    "color-hex-length": "long",
    "color-hex-case": "lower",
    "selector-class-pattern": /\w+/,
    "at-rule-no-unknown": null,
    "selector-id-pattern": null,
  },
}
