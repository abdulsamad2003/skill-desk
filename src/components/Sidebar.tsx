"use client";

import { Dispatch, SetStateAction } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface SidebarProps {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ sidebar, setSidebar }: SidebarProps) => {
  return (
    <>
      {/* <!-- aside dropdown start--> */}
      <div className={`aside-dropdown ${sidebar ? 'aside-dropdown--active' : ''}`}>
        <div className="aside-dropdown__inner">
          <span className="aside-dropdown__close" onClick={() => setSidebar(!sidebar)}>
            <CloseIcon />
          </span>
          <div className="aside-dropdown__item">
            <ul className="aside-menu">
              <li className="aside-menu__item">
                <a className="aside-menu__link" href="#">
                  <span>Home</span>
                </a>
              </li>
              <li className="aside-menu__item">
                <a className="aside-menu__link" href="#about">
                  <span>About Us</span>
                </a>
              </li>
              <li className="aside-menu__item aside-menu__item--has-child">
                <a className="aside-menu__link" href="#">
                  <span>Courses</span>
                </a>
                {/* <!-- sub menu start--> */}
                <ul className="aside-menu__sub-list">
                  <li>
                    <a href="#">
                      <span>All Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Popular Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Featured Courses</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Course Categories</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- sub menu end--> */}
              </li>
              <li className="aside-menu__item">
                <a className="aside-menu__link" href="#">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
            
            {/* Auth buttons for mobile */}
            <div className="aside-auth-buttons">
              <a className="button button--login" href="#">
                <span>Login</span>
              </a>
              <a className="button button--signup" href="#">
                <span>Signup</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- aside dropdown end--> */}
    </>
  );
};

export default Sidebar;
