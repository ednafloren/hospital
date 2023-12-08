import { Icon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { navData } from "../lib/navData";

export default function Sidenav() {
  const [open, setOpen] = useState(true);
  const [user, setUser] = useState(null);

  const toggleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    try {
      const userString = localStorage.getItem('user');

      if (userString) {
        const storedUser = JSON.parse(userString);
        setUser(storedUser);
      } else {
        console.error('User data not found in localStorage');
        // Handle the case where user data is not found in localStorage
      }
    } catch (error) {
      console.error('Error parsing user data:', error);
      // Handle the error as needed
    }
  }, []);

  return (
    <div>
      <div className={open ? styles.sidenav : styles.sidenavClosed}>
        <div>
          <button className={styles.menuBtn} onClick={toggleOpen}>
            {open ? (
              <img src="images/hambergicon.png" alt="menu icon" />
            ) : (
              <img src="images/hambergicon.png" alt="menu icon" />
            )}
          </button>
        </div>
        <div className={styles.userp}>
      
        <Icon sx={{ fontSize: 80}}>
  <AccountCircleIcon style={{ fontSize: 80 }}  />
</Icon>

     {user ? (
            <div>
              <p>{user.name}</p>
              {/* Add other user details as needed */}
            </div>
          ) : (
            <p>Loading user profile...</p>
          )}
        </div>

        {navData.map((item) => (
          <NavLink key={item.id} className={styles.sideitem} to={item.link}>
            {item.icon}
            <span className={styles.linkText}>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}