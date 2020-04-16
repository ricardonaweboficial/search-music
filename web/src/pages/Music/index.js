import React, { useEffect, useState, Fragment } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import {
	InfoContainer,
	ButtonBack,
	InfoVideo,
	Video,
	InfoMusic,
	InfoGroup,
	Description
} from './styles';


export default function Music() {
	const [ music, setMusic ] = useState([]);

	const { idVideo } = useParams();

	const history = useHistory();

	useEffect(() => {
		async function loadMusic() {
			try {
				const response = await fetch(`https://theaudiodb.com/api/v1/json/1/track.php?h=${idVideo}`);
				const data = await response.json();
				setMusic(data.track);
				console.log(data.track);
			} catch (err) {
				return alert('Error' + err)
			}
		}

		loadMusic();
	}, [idVideo]);

	function handleBack() {
		history.push('/');
	}

	return (
		<InfoContainer>
			<ButtonBack onClick={handleBack}><FiArrowLeft size={16} color="#fff" />Back</ButtonBack>
			<section>
				{music.map(info => (
					<Fragment>
						<InfoVideo>
							<Video src={`http://www.youtube.com/embed/${info.strMusicVid.slice(-11)}`}
							  allowFullScreen
							></Video>
							<InfoMusic>
								<InfoGroup>
									<h3>Name: <span>{info.strTrack}</span></h3>
									<h3>Artist: <span>{info.strArtist}</span></h3>
								</InfoGroup>

								<InfoGroup>
									<h4>Album: <span>{info.strAlbum}</span></h4>
									<h4>Gênero: <span>{info.strGenre}</span></h4>
								</InfoGroup>
							</InfoMusic>
						</InfoVideo>
						<Description>
							<h1>Description</h1>
							<p>{info.strDescriptionEN}</p>
						</Description>
					</Fragment>
				))}
			</section>
		</InfoContainer>
	);

}