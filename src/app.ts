import express from "express";
import path from "path";

const app = express();
const port = 3000;

// 정적 파일 경로 설정
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
