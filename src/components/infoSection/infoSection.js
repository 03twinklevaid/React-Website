import React from 'react';
import './infoSection.scss';
import { Container, Row } from 'react-bootstrap';
import Image from '../../views/Image/image';
import Text from '../../views/text/text';
import { staticText } from './staticText';
import InvoiceDetailsImage from '../../assets/3-content/content-001.png';
import FinanceImage from '../../assets/3-content/content-002.png';

const InfoSection = () => {
	return (
		<Container className="content-wrapper">
			<Row className="section-spacing">
				<Image src={InvoiceDetailsImage} className="content-image" wrapperClass="col-md-6"/>
				<Text
					headerText1={staticText.infoSection_rowOne.headerText1}
					headerText2={staticText.infoSection_rowOne.headerText2}
					headerText3={staticText.infoSection_rowOne.headerText3}
				/>
			</Row>
			<Row>
				<Text
					headerText1={staticText.infoSection_rowTwo.headerText1}
					headerText2={staticText.infoSection_rowTwo.headerText2}
					headerText3={staticText.infoSection_rowTwo.headerText3}
				/>
				<Image src={FinanceImage} className="content-image" wrapperClass="col-md-6"/>
			</Row>
		</Container>
	);
};
export default InfoSection;
