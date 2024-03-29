const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Añade esta línea

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "70c8bf64-e05a-42ae-85e9-8eb45a00976f" } }
        );
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.data)
    }
  
  
});

app.listen(3001, () => console.log("Server running"));