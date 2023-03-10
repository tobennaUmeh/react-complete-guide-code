import React from 'react';
import classes from './Header.module.css';
import Meals from '../../assets/meals.jpg'

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
      </header>
      <div className={classes['main-image']}><img src={Meals} alt="Meals" /></div>
		</>
	);
};

export default Header;
