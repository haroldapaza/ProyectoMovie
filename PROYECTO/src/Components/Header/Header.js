import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
/**
 * props.children será el componente <Search />
 */
	const {children} = props;
	return (
		<div className={styles.headerContainer}>
			<h1>Movies Ratings</h1>
			<div className={styles.searchContainer}>
				{props.children}
			</div>
		</div>
	)
}

export default Header;