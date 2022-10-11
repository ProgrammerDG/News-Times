const express = require("express");
const cors = require("cors");
const NewsAPI = require("newsapi");

const app = express();

app.use(express.json());
app.use(cors());


const newsapi = new NewsAPI("49364a0abf0c4426a4b6339f35c85658");


app.get("/", (req, res) => {

  newsapi.v2.topHeadlines({
    country: "in"
  }).then(response => {
    res.json(response)
  });
})

app.get("/sports", (req, res) => {

  newsapi.v2.topHeadlines({
    category: "sports",
    country: "in"
  }).then(response => {
    res.json(response)
  });
})

app.get("/technology", (req, res) => {

  newsapi.v2.topHeadlines({
    category: "technology",
    country: "in"
  }).then(response => {
    res.json(response)
  });
})

app.get("/entertainment", (req, res) => {

  newsapi.v2.topHeadlines({
    category: "entertainment",
    country: "in"
  }).then(response => {
    res.json(response)
  });
})

app.get("/science", (req, res) => {

  newsapi.v2.topHeadlines({
    category: "science",
    country: "in"
  }).then(response => {
    res.json(response)
  });
})


app.listen(3001, () => {
  console.log("Server started on port 3001");
});

