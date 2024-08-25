import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { mockRepos } from "./mockData.js";
dotenv.config(); // For environment variables

const app = express();
const port = process.env.PORT || 5000;

// Route to fetch GitHub repositories
app.get("/api/repos", async (req, res) => {
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
  try{
    // console.log("api/repos called successfully")
    res.json(mockRepos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
