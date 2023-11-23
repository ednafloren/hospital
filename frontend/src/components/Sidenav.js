import styles from "./sidenav.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { navData } from "../lib/navData";

export default function Sidenav() {
  const [open, setOpen] = useState(true);


  const toggleOpen = () => {
    setOpen(!open);
  };

    const [user, setUser] = useState(null);
  
    useEffect(() => {
        const fetchUser = async () => {
            try {
              const response = await fetch('http://127.0.0.1:5000/users/user');
              console.log('Response:', response);
          
              if (!response.ok) {
                console.error('Request failed with status:', response.status);
                const errorText = await response.text();
                console.error('Error response:', errorText);
                // Handle other non-OK responses if needed
                return;
              }
          
              const contentType = response.headers.get('content-type');
              const responseBody = await response.text();
              
              console.log('Response Body:', responseBody);
          
              if (contentType && contentType.includes('application/json')) {
                const data = JSON.parse(responseBody);
                setUser(data.user);
              } else {
                console.error('Invalid JSON response');
                // Handle non-JSON response (possibly an error page)
              }
            } catch (error) {
              console.error('Fetch user error:', error);
              // Handle other fetch errors
            }
          };
          
  
      fetchUser();
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
          <img
            src="images/profile.png"
            alt="profile logo"
            className={styles.img}
          />
        {user ? (
        <div>
       
          <p>Username: {user.name}</p>
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
