const express = require("express");
const router = express.Router();
const fs = require("fs");

// Load Keys
function loadKeys() {
  try {
    const raw = fs.readFileSync("./keys.json");
    return JSON.parse(raw).admin_keys || [];
  } catch (err) {
    return [];
  }
}

router.get("/", (req, res) => {
  const key = req.query.key;

  if (!key) {
    return res.json({
      success: false,
      message: "No key provided!"
    });
  }

  const keys = loadKeys();
  const found = keys.find(k => k.key === key);

  if (!found) {
    return res.json({
      success: false,
      valid: false,
      message: "Invalid Key!"
    });
  }

  return res.json({
    success: true,
    valid: true,
    key: found.key,
    type: found.type
  });
});

module.exports = router;
