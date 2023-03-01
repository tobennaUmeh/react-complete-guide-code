import React from 'react';

const Input = (props) => {
	return (
		<input
			onChange={props.onChange}
			type={props.type}
			id={props.id}
			value={props.value}
			onBlur={props.onBlur}
		></input>
	);
};

export default Input;
