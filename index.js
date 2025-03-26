/** @type {import("prettier").Config} */
const config = {
	printWidth: 130,
	useTabs: true,
	objectWrap: "collapse",
	overrides: [{ files: ["*.yml", "*.yaml"], options: { useTabs: false } }],
};

export default config;
