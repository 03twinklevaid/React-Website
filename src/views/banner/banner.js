import React from 'react';
import './banner.scss';
import { Container, Row } from 'react-bootstrap';
import machine from '../../assets/2-banner/banner.png';

const Banner = () => {
	return (
		<div className="banner-wrapper">
			<Container className="banner-wrapper__container">
				<Row className="banner-wrapper__row">
					<div className="col-md-6 text-part">
						<p className="banner-heading">
							<strong>Make development</strong>
							<br />
							<strong>easy with us.</strong>
						</p>
						<h6>
							Doing development can never be easy, and it takes time and
							resources.
							<br />
							We at EasyWork has the solution.	
						</h6>
					</div>
					<div className="col-md-6 image-part">
						<img src={machine} alt="banner" className="img-fluid"/>
					</div>
				</Row>
			</Container>
		</div>
	);
};
export default Banner;
