import express from "express";
const app = express();
app.listen(5000);
app.get("/api/test", (req, res) => res.send("hello"));
