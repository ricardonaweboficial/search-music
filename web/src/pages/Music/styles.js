import styled from 'styled-components';

export const InfoContainer = styled.div`
	background:#f1f1f1;
	width:100%;
	max-width:1120px;
	padding:40px;
	height:100vh;
	margin:0 auto;

	section {
		display:flex;
		justify-content: space-around;
		background:#424242;
		padding:20px;
		margin-top:30px;
		color:#F6F6F6;
	}
`;

export const ButtonBack = styled.button`
	background:#424242;
	border:0;
	border-radius:4px;
	color:#F6F6F6;
	padding:10px 40px;
	display:flex;
	align-items:center;
	justify-content:center;
	cursor:pointer;
	
	svg {
		margin-right:8px;
	}
`;

export const InfoVideo = styled.div`
	width:50%;
	display:flex;
	flex-direction:column;
`;

export const Video = styled.iframe`
	width:100%;
	height:100%;
	border-radius:4px;
	border:0;
	margin-bottom:10px;
`;


export const InfoMusic = styled.div`
	display:flex;
	justify-content:space-between;	
`;

export const InfoGroup = styled.div`
	display:flex;
	flex-direction:column;

	h3, h4 {
		color:#ADADAD;
	}

	span {
		color:#F6F6F6;
	}
`;

export const Description = styled.div`
	width:50%;
	padding:0 30px;
	display:flex;
	justify-content:center;
	flex-direction:column;
	overflow:auto;
	h1 {
		text-align:center;
		font-size:40px;
		margin-bottom:10px;
	}

	p {
		color: #f1f1f1;
		text-align: justify;
		text-justify:distribute;
		height:300px;
	}
`;

