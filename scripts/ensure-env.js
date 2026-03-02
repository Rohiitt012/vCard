/**
 * Ensures DATABASE_URL is set so prisma generate can run (npm install / build).
 * Loads .env; if DATABASE_URL is missing, sets a dummy URL so generate succeeds.
 * Then runs prisma generate. App still needs real DATABASE_URL in .env at runtime for vCards.
 */
const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

function loadEnv() {
  try {
    const envPath = path.join(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf8");
      for (const line of content.split("\n")) {
        const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*["']?([^"'\n#]*)["']?/);
        if (m) process.env[m[1]] = m[2].trim();
      }
    }
  } catch (_) {}
}

loadEnv();
if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes("dummy")) {
  process.env.DATABASE_URL = "postgresql://localhost:5432/dummy?schema=public";
}

execSync("npx prisma generate", { stdio: "inherit", env: process.env });
