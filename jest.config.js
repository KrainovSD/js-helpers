/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",

  testEnvironment: "node",
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  // transform: {
  //   "^.+\\.(t|j)s$": [
  //     "ts-jest",
  //     {
  //       tsconfig: "tsconfig.test.json",
  //       useESM: true,
  //     },
  //   ],
  // },
  transform: {
    "^.+\\.(t|j)s$": "@swc/jest",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
