/** @type {import("prettier").Config} */
const config = {
	printWidth: 120,
	useTabs: true,
	experimentalTernaries: true,
	objectWrap: "collapse",
	overrides: [{ files: ["*.yml", "*.yaml"], options: { useTabs: false } }],
};

export default config;
