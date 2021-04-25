import React from 'react';
import './contactUs.scss';
import MapContainer from '../../views/map/map';
import { Container, Row } from 'react-bootstrap';
import ContactForm from '../../views/contactForm/contactForm';
import './contactUs.scss';

const ContactUs = () => {
	return (
		<Container className="section-spacing contact-us-wrapper">
			<Row>
				<h3 className="contact-us-heading">
					<strong>Contact Us</strong>
				</h3>
			</Row>
			<Row className="justify-content-center align-items-center">
				<div className="contact-form col-md-5">
          <ContactForm />
        </div>
				<div className="map-wrapper col-md-5">
					<MapContainer />
				</div>
			</Row>
		</Container>
	);
};
export default ContactUs;
