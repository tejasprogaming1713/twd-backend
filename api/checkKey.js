import fs from "fs";

export default function handler(req, res) {
    const db = JSON.parse(fs.readFileSync("data/keys.json"));
    const { key } = req.body;

    res.json({ valid: db.keys.includes(key) });
}
