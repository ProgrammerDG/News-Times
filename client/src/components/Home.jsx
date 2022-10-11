import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Home.css";
import "./styles.css";

function Home() {

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setNewsList(response.data.articles);
    });
  }, []);

  return (
    <>

    <div id="homeIntroDiv">
      <h1>WHO ARE WE?</h1>
      <p>We are not just a news website company, but we are the true information sharing medium, who never gives false or un-true news but rather focuses on genuine and actual content. Delivering pure and accurate news is our 1st priority. We are proud in saying, that we have won various awards for our genuine content. We provide latest, top news in various fields like sports, science, entertainment, technology, etc.</p>
      <h2>WE ARE THE TEAM "NEWS TIMES"</h2>
    </div>
      <h1 className="mainH1">LATEST TOP HEADLINES ☝️</h1>
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

export default Home