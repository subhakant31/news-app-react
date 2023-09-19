import ContentTitle from "../components/content-title/ContentTitle";
import React, { useState } from "react";
import NewsCard from "../components/news-card/NewsCard";
import Loader from "../components/Loader/Loader";
function HomePage(props) {
    const [isContentLoaded, setIsContentLoaded] = useState(true);
  return (
    <React.Fragment>
      <ContentTitle
        selectedNewsCategory={props.selectedNewsCategory}
      ></ContentTitle>
      {isContentLoaded ? <NewsCard></NewsCard> :
            <Loader></Loader>
      }
    </React.Fragment>
  );
}
export default HomePage;
