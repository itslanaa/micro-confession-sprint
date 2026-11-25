import fs from "node:fs";
const TEXT = "To: the human who taught me to say sorry.\nI apologized a thousand times, but I never told you I didn't know what sorry meant until you stopped replying.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 260) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");
