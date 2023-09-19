import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import "./NewsCard.scss";
import {
  faBookBookmark,
  faBookmark,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function NewsCard() {
  return (
    <div class="news-card">
      <h2 className="news-card__title">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
        architecto. Repudiandae, et qui voluptatem maiores hic consequatur
        necessitatibus. Placeat iure repudiandae vitae nam voluptas sit sint
        libero ullam nobis aliquid!
      </h2>
      <span className="news-card__update-time">updated just now</span>
      <div className="news-card__author-wrapper">
        <div className="author-wrapper__img-wrapper">
          <img src="" alt="" />
        </div>
        <div className="author-wrapper__name-wrapper">
          <span className="published-by-title">published by</span>
          <h3 className="author-name">subhakanta mishra</h3>
        </div>
        <button className="author-wrapper__follow-btn card-btn">follow</button>
      </div>
      <p className="news-card__news-article">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        deserunt eligendi voluptatum excepturi officiis et quae, repudiandae
        nostrum aliquid nam? In maxime alias vero tenetur vitae dolorem ut
        corporis perspiciatis!
      </p>
      <div className="news-card__btn-wrapper">
        <button className="know-more-btn card-btn">know more</button>
        <div className="action-btn-wrapper">
          <FontAwesomeIcon icon={faThumbsUp} />
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faShare} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
