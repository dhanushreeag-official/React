import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/SideNavBar.css";

export default function SideNavBar() {
  // Dynamic menu list (you can modify or fetch this)
  const menuList = {
    Home: "/homepage",
    Projects: "/projects",
    Tasks: "/tasks",
    Calendar: "/calendar",
    Teams: "/teams",
     Profile: "/profile"
  };

  return (
    <section className="side-nav-container">
      <nav className="side-nav">
        <h2 className="nav-title">Hustly</h2>
        <ul className="nav-list">
          {Object.entries(menuList).map(([menu, link]) => (
            <li key={menu}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
