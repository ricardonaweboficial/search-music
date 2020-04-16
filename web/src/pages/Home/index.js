import React, { useState } from 'react';
import { FiSearch, FiLoader } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import musicImg from '../../assets/nothingImg.png'

import { 
	MusicContainer, 
	InputSearch, 
	Button, 
	Title, 
	ImageMusic, 
	ButtonPage, 
	ListMusic,
	ItemList,
	LoadingMusics,
	NotFound
} from './styles';

function Home() {
	const [ musics, setMusics ] = useState([]);
	const [ search, setSearch ] = useState('');

	const [ loading, setLoading ] = useState(false);

	const history = useHistory();


	async function loadMusics(e) {
		e.preventDefault();
		setMusics([]);
		
		try {
			setLoading(true);
			const response = await fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${search}`);

			const data = await response.json();

			const id = data.artists.map(artist => (
				artist.idArtist
			));
			const responseVideo = await fetch(`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${id.toString()}`);
			const dataVideo = await responseVideo.json();
			setMusics(dataVideo.mvids);
			console.log(dataVideo.mvids);

			setLoading(false);	

		} catch (err) {
			alert('Erro ao pesquisar este artista, tente novamente.');
			setLoading(false);
			setSearch('');
		}
	}

	async function handlePage(id) {
		history.push(`/music/${id}`);
	}



	return (
		<MusicContainer>
			<form onSubmit={loadMusics}>
				<InputSearch
					value={search}
					onChange={e => setSearch(e.target.value)}
					required
					placeholder="Search musics of your artist"
				/>		
				<Button type="submit"><FiSearch size={16} color="#f1f1f1" /></Button>
			</form>
			<section>
				<ListMusic>
						{musics !== null ? musics.map(music => (
							<ItemList key={music.idTrack}>
								<Title>{music.strTrack}</Title>
								<ImageMusic src={music.strTrackThumb === null ? music.strTrackThumb = musicImg : music.strTrackThumb} alt="Music"/>	
								<ButtonPage onClick={() => handlePage(music.idTrack)}>
									Click here
								</ButtonPage>
							</ItemList>
							)
						) : <NotFound>Error search musics of your artist</NotFound>}
				</ListMusic>


			</section>
			{loading && (
				<LoadingMusics>
					<FiLoader /> Loading
				</LoadingMusics>
			)}
		</MusicContainer>
	);
}

export default Home;