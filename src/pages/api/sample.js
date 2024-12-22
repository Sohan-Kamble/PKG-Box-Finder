import fs from "fs";
import path from "path";
import csv from "csv-parser";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public/sample.csv");
  const results = [];

  // Read the CSV file and parse it into JSON
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.status(200).json(results);
    })
    .on("error", (err) => {
      res.status(500).json({ error: "Failed to read CSV file", details: err });
    });
}
