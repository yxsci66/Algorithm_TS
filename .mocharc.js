module.exports = {
  spec: [
    "test/**/*.test.ts",
    // "test/**/21.merge-two-sorted-lists.test.ts",
    // "test/**/23.merge-k-sorted-lists.test.ts",
    "test/**/24.swap-nodes-in-pairs.test.ts",
  ],
  require: ["ts-node/register", "./.mocha.env.js"],
};
