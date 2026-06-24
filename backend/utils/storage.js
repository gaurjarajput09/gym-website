const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "data");

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

/**
 * Read data from a JSON file
 * @param {string} filename - The JSON file name (e.g., "users.json")
 * @returns {Array} Parsed array from file, or empty array if file doesn't exist
 */
const readData = (filename) => {
  const filePath = path.join(dataDir, filename);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2));
    return [];
  }
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
};

/**
 * Write data to a JSON file
 * @param {string} filename - The JSON file name
 * @param {Array} data - The data array to write
 */
const writeData = (filename, data) => {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };
