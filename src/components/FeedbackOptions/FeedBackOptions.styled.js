import styled from "@emotion/styled";

const color = 'black';

const setBgColor = props => {
    switch (props.name) {
        case 'good':
            return '#00FF00';
        case 'neutral':
            return '#FFFF00'; 
        case 'bad':
            return '#D61800'; 
        default:
            return 'black'    
    }
}

export const ButtonList = styled.ul`
display: flex;
gap: 15px;
justify-content: space-around;
`;

export const Item = styled.li`
list-style: none;
`;

export const Button = styled.button`

background: #ECECEC;
	border-radius: 15px;
	padding: 10px 20px;
	display: block;
	font-family: arial;
	font-weight: bold;
	color:#7f7f7f;
	text-decoration: none;
	border:1px solid #a7a7a7;
	width: 145px;
	margin:0px auto;
	margin-top:50px;
	box-shadow: 0px 2px 1px white inset, 0px -2px 8px white, 0px 2px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.1);
	-webkit-transition:box-shadow 0.5s;
&:hover {
    background-color: ${setBgColor};
    color: ${color};
        }
`;
