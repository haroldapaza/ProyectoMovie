import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
/**
 * Mostrará la información de cada película, es decir, el título, año e imagén
 */
	const {onClickCard, title, year, image} = props;
	return (
		<React.Fragment>
			<div onClick={onClickCard} className={styles.cardContainer}>
				<div className={styles.description}>
					<p>{title}</p>
					<p>{year}</p>
				</div>
				<img src={image}/>
			</div>
		</React.Fragment>
	)
}

export default Card;