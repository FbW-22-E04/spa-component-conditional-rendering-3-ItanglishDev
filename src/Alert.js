import React from "react"


const Alert = props => {
	//add the condition inside this function

	const { text, show } = props

	if ({ show })
		return (
			// <div className="alert alert-danger" role="alert">
			// 	This is a primary alert-check it out!
			// </div>
			{ text }
		);
};

export default Alert;