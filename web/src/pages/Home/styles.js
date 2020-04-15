import styled from 'styled-components';

export const MusicContainer = styled.div`
	width: 100%;
	max-width:1120px;
	height:100%;
	margin:0 auto;

	form {
		width:100%;
		margin-top:20px;

		display:flex;
		justify-content:center;
		align-items:center;
	} 

	section {
		display:flex;
		
	}
`;

export const InputSearch = styled.input`
	width:420px;
	height:40px;
	background:#424242;
	border:none;
	color:white;
	border-radius:10px 0 0 10px;
	padding:0 10px;
`;

export const Button = styled.button`
	cursor:pointer;
	width:40px;
	height:40px;
	background:#424242;
	border:none;
	color:white;
	border-radius:0 10px 10px 0;
`;

export const ListMusic = styled.ul`
	list-style-type:none;
	display:grid;
	grid-template-columns:repeat(3, 1fr);
	margin: 20px auto;
	align-items:center;
`;

export const ItemList = styled.li`
	width:250px;
	padding:0 10px;
	background:#424242;
	margin:20px;
	border-radius:4px;
`;

export const Title = styled.p`
	color:white;
	font-size:20px;
	margin:5px;
	text-align:center;
	font-weight:bold;
`;

export const ImageMusic = styled.img`
	width:100%;
	border-radius:4px;
`;

export const ButtonPage = styled.button`
	cursor:pointer;
	width:100%;
	height:40px;
	background:#E9E9E9;
	border:none;
	font-weight:bold;
	margin:10px 0;
	border-radius:4px;
	transition:0.2s;

	&:hover  {
		background:#c1c1c1;
	}
`;

