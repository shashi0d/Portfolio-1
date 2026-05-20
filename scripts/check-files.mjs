import { existsSync } from "node:fs";

const required = [
  "index.html",
  "src/App.js",
  "src/data.js",
  "src/styles.css",
  "vendor/react.production.min.js",
  "vendor/react-dom.production.min.js",
  "vendor/tailwind-cdn.js",
  "picture.jpeg"
];

const missing = required.filter((file) => !existsSync(file));

if (missing.length) {
  console.error(`Missing required files: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("All portfolio files are present.");
