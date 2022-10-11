import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Technology.css"
import "./styles.css";

function Technology() {
  
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/technology").then((response) => {
      setNewsList(response.data.articles);
    });
  }, []);

  return (
    <>
     <h1 className="mainH1">LATEST TECHNOLOGY NEWS 💻</h1>
      <div className="newsContainer">
        {newsList.map((news) => {
          return (
            <div className="newsContainerDiv">
              <h2 className="newsContainerDivH2">{news.title}</h2>
              <img src={news.urlToImage} alt="NewsImage"className=" newsContainerDivImg" />
              <p className="newsContainerDivP">{news.description}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default Technology