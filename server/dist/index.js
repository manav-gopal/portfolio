var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import dotenv from "dotenv";
import { mockRepos } from "./mockData.js";
dotenv.config(); // For environment variables
const app = express();
const port = process.env.PORT || 5000;
// Route to fetch GitHub repositories
app.get("/api/repos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   try {
    //     const response = await axios.get('https://api.github.com/users/manav-gopal/repos', {
    //       headers: {
    //         Authorization: `token ${process.env.GITHUB_TOKEN}`
    //       }
    //     });
    //     res.json(response.data);
    //   } catch (error) {
    //     res.status(500).json({ error: error.message });
    //   }
    try {
        // console.log("api/repos called successfully")
        res.json(mockRepos);
    }
    catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}));
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
