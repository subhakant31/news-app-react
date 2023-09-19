import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  
  function toggleSlidePanel() {
    setIsSidePanelOpen((prev) => {
      return !prev;
    });
  }

  function showSelectedNewsCategory(e) {
    e.preventDefault();
    const navElements = document.querySelectorAll('.nav-el');
    for(var i=0;i<navElements.length;i++)
    {
      navElements[i].classList.remove('active-nav-item');
    }
    e.target.classList.add('active-nav-item');
    if (setIsSidePanelOpen) {
      setIsSidePanelOpen(false);
    }
    props.setSelectedNewsCategory(e.target.innerText);
  }

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="logo-wrapper">
          <div className="logo-wrapper__image-wrapper">
            <img src="./assets/images/logo.avif" alt="logo of news app" />
          </div>
          <h1>NEWS</h1>
        </a>
        <nav className={`navigation ${isSidePanelOpen ? "open" : ""}`}>
          <ul className="navigation__list" onClick={showSelectedNewsCategory}>
            <li>
              <a href="#" className="nav-el active-nav-item">trending</a>
            </li>
            <li>
              <a href="#" className="nav-el">sports</a>
            </li>
            <li>
              <a href="#" className="nav-el">fitness</a>
            </li>
            <li>
              <a href="#" className="nav-el">health</a>
            </li>
            <li>
              <a href="#" className="nav-el">technology</a>
            </li>
            <li>
              <a href="#" className="nav-el">cinema</a>
            </li>
          </ul>
        </nav>
        <div className="header__container__user">
          <h2 className="user-name">subhakant</h2>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon
            icon={isSidePanelOpen ? faXmark : faBars}
            onClick={toggleSlidePanel}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
