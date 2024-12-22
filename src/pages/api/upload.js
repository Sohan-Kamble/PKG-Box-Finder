import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Limit the file size
    },
  },
};

export default function handler(req, res) {
  if (req.method === "POST") {
    const { fileContent } = req.body;

    const filePath = path.join(process.cwd(), "public/sample.csv");

    // Write the uploaded file content to sample.csv
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to upload CSV file" });
      }
      res.status(200).json({ message: "CSV file uploaded successfully" });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
