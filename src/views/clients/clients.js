import React from 'react';
import './clients.scss';
import { Container, Row } from 'react-bootstrap';
import Image from '../../views/Image/image';
import airbnb from '../../assets/5-partners/airbnb.png';
import apple from '../../assets/5-partners/apple.PNG';
import google from '../../assets/5-partners/google.PNG';
import nvidia from '../../assets/5-partners/nvidia.PNG';
import tesla from '../../assets/5-partners/tesla.PNG';
import samsung from '../../assets/5-partners/samsung.PNG';
import facebook from '../../assets/5-partners/facebook.PNG';
import microsoft from '../../assets/5-partners/microsoft.PNG';

const Clients = () => {
	const clients = [
		airbnb,
		apple,
		google,
		nvidia,
		tesla,
		samsung,
		facebook,
		microsoft,
	];
	return (
		<Container className="clients-wrapper text-center section-spacing">
			<h3 className="clients-heading">
				<strong>We've worked with</strong>
			</h3>
			<Row className="clients-wrapper__row justify-content-center">
				{clients.map((client) => {
					return <Image src={client} wrapperClass="mx-2"/>;
				})}
			</Row>
		</Container>
	);
};
export default Clients;
