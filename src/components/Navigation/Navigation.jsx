import "./Navigation.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navigation() {
  return (
    <div className="footer-navigation">
      <button className="nav-btn back-btn">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="nav-btn back-btn">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Navigation;
