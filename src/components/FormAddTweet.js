import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { validationFormAddTweetAction } from '../actions/validationActions';
import { addtweetAction } from '../actions/tweetActions';
import { openCloseAddTweetModalAction } from '../actions/modalsActions';
import uuid from 'uuid/v4';
import moment from 'moment';

export default function FormAddTweet() {
	const [formValue, setFormValue] = useState({
		name: '',
		tweet: ''
	});

	// Inicialización del dispatch y ejecución de las acciones
	const dispatch = useDispatch();
	const errorForm = state => dispatch(validationFormAddTweetAction(state));
	const addTweet = state => dispatch(addtweetAction(state));
	const closeModal = state => dispatch(openCloseAddTweetModalAction(state));

	// Obtener estado de la validación del formulario
	const errorFormValue = useSelector(state => state.validation.errorFormAddTweet);

	const onChange = e =>
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		const { name, tweet } = formValue;
		if (!name || !tweet) {
			errorForm(true);
		} else {
			addTweet({
				id: uuid(),
				name,
				tweet,
				date: moment()
			});
			closeModal(false);
		}
	};
	return (
		<Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
			<Form.Group className="text-center">
				<h1>Nuevo Tweet</h1>
			</Form.Group>
			<Form.Group>
				<Form.Control type="text" name="name" placeholder="Escribe tu nombre" />
			</Form.Group>
			<Form.Group>
				<Form.Control
					as="textarea"
					name="tweet"
					row="3"
					placeholder="Escribe lo que quieras comunicar"
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Enviar Tweet
			</Button>
			{errorFormValue && (
				<Alert variant="danger" className="mt-4">
					Todos los campos son abligatorios
				</Alert>
			)}
		</Form>
	);
}
