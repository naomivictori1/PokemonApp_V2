import React, { useState } from 'react';

export default function Card(props) {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<div>
			<div className="card">
				<h1>{props.name.toUpperCase()}</h1>
				<img className="Card-image" src={props.img} alt={props.alt} />
				<div className="Card-info">
					<h2>Type : {props.type}</h2>
					<button onClick={() => setShowInfo(!showInfo)}>
						{showInfo === true ? 'Close' : 'Get details'}
					</button>
					{showInfo === true ? (
						<div>
							<h3>Base experience: {props.base_experience}</h3>
							<h3>weight: {props.weight}</h3>
							<h3>abilities: {props.abilities}</h3>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	);
}
