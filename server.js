import express from "express";
import cors from "cors";
import createkeys from "./api/createkeys.js";
import login from "./api/login.js";
import logout from "./api/logout.js";
import verify from "./api/verify.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/createkeys", createkeys);
app.post("/api/login", login);
app.post("/api/logout", logout);
app.post("/api/verify", verify);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
