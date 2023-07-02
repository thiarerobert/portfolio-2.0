import React from 'react';
import styles from "./Header.module.css";
import { Link, useNavigate} from 'react-router-dom';


export default function Header(props) {
    const navigate= useNavigate();
    const menuItems = [
        { id: 1, title: "À propos", link: "/" },
        { id: 2, title: "Parcours", link: "/parcours" },
        { id: 3, title: "Projets", link: "/projets" },
        { id: 4, title: "Blogs", link: "/blogs" },
        { id: 5, title: "Contacts", link: "/contacts" },
      ];
    const [title, setTitle] = React.useState(props.title);

    const handleContactsClick = (event, newTitle, newLink) => {
        event.preventDefault()
        setTitle(newTitle);
        navigate(newLink);
      };

      

    return <header>
        <div className={styles.header}>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <nav>
                    <ul className={styles.nav}>
                        {menuItems.map(item =>(
                            <li key={item.id}>
                                <Link to={item.link} onClick={(event) => handleContactsClick(event, item.title, item.link)}>{item.title}</Link>
                                
                            </li>
                        ))}
                        
                        
                    </ul>
                </nav>

            </div>
        </div>
    </header>    
}