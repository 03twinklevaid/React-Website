import React from 'react';
import './footer.scss';
import { Container, Row } from 'react-bootstrap';
import logo from '../../assets/1-header/logo.png';
import Image from '../Image/image';

const Footer = () => {
	return (
		<div className="footer-wrapper">
			<Container className="footer-wrapper__container">
				<Row className="footer-wrapper__row align-items-center">
					<Image src={logo} className="logo" wrapperClass="col-md-1" />
					<h4 className="col-md-2 ml-1">
						<strong>Easy Work</strong>
					</h4>
					<div class="address-section col-md-4">
						<p>
							<strong>Address</strong>
							<br />
							<span>
								<small>
									52-1, Jalan Awan Hijau, Taman
									<br />
									Overseas Union, 58200 Kuala
									<br />
									Lumpur, Wialayah PerseKutuan Kuala Lumpur
								</small>
							</span>
						</p>
					</div>
					<div className="contact-section col-md-4">
						<p>
							<strong>Contact</strong>
							<br />
							<span>
								<small>03-7451 5283</small>
							</span>
						</p>
						<p>
							<strong>Fax</strong>
							<br />
							<span>
								<small>03-7451 5283</small>
							</span>
						</p>
					</div>
				</Row>
			</Container>
		</div>
	);
};
export default Footer;
