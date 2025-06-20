export default {
  extends: ["@commitlint/config-angular"],
  rules: {
    "subject-case": [
      2,
      "always",
      ["sentence-case", "start-case", "pascal-case", "upper-case", "lower-case"]
    ],
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
};
