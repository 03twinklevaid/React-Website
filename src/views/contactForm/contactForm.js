import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import './contactForm.scss';

const ContactForm = () => {
	const subjects = ['Subject1', 'Subject2', 'Subject3', 'Subject4', 'Subject5'];
	return (
		<Form className="form">
			<Form.Group>
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter your name" />
			</Form.Group>
			<Form.Group>
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" placeholder="Enter your email" />
			</Form.Group>
			<Form.Group>
				<Form.Label>Subject</Form.Label>
				<Form.Control as="select" size="lg" custom>
					{subjects.map((subject) => (
						<option>{subject}</option>
					))}
				</Form.Control>
			</Form.Group>
			<Form.Group>
				<Form.Label>Message</Form.Label>
				<Form.Control as="textarea" rows={6} placeholder="Write your message here" />
			</Form.Group>
			<div className="button">
				<Button variant="primary" type="submit">
					Send
				</Button>
			</div>
		</Form>
	);
};
export default ContactForm;
