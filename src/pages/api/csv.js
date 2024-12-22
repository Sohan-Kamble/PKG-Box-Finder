import csvData from "@/public/sample.csv";

export default function handler(req, res) {
  res.status(200).json(csvData);
}
