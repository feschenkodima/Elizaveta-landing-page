const express = require("express");
require("dotenv").config();
const app = express();
const jsonParser = express.json();
const cors = require("cors");
const { API_PORT } = process.env;
const port = API_PORT;
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://FeshchenkoDmytro:dimassikdimka31081995@elizavetacluster.skxul.mongodb.net/Elizaveta?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const gallery = client.db().collection("Gallery");
const start = async () => {
  try {
    await client.connect();
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
start();

app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.get("/api/gallery", jsonParser, async (req, resp) => {
  const galleryArr = await gallery.find().toArray();
  resp.send(galleryArr);
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
