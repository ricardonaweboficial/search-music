import React from 'react';
import { useParams } from 'react-router-dom';


export default function Music() {
	const { idTrack } = useParams();

	return (
		<h1>Id Music: {idTrack}</h1>
	);

}