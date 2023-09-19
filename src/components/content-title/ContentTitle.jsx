import "./ContentTitle.scss";

function ContentTitle(props) {
  return <h2 className="news-title">{props.selectedNewsCategory}</h2>;
}

export default ContentTitle;
