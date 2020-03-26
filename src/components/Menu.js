import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';

import logoRedux from '../assets/img/redux.png';
import { useDispatch } from 'react-redux';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';

export default function Menu() {
	// Dispatch  para ejecutar nuestra acciones
	const dispatch = useDispatch();
	const openCloseAddTweetModal = state => dispatch(openCloseAddTweetModalAction(state));

	const openModal = () => {
		openCloseAddTweetModal(true);
	};
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand>
					<img
						alt="Tweets Simulator Redux"
						src={logoRedux}
						width="30"
						heigth="30"
						className="d-inline-block align-top mr-4"
					/>
					Tweets Simulator Redux
				</Navbar.Brand>
				<Button variant="outline-success" onClick={openModal}>
					Nuevo Tweet
				</Button>
			</Container>
		</Navbar>
	);
}
