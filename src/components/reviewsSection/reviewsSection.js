import React, {useState, useEffect} from 'react';
import './reviewsSection.scss';
import { Container, Row } from 'react-bootstrap';
import Image from '../../views/Image/image';
import ReviewCard from '../../views/reviewCard/reviewCard';
import heartIcon from '../../assets/7-icons/heart.svg';
import arrowRight from '../../assets/7-icons/arrow-right.svg';
import { reviewersDetails } from './staticData';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Reviews = () => {
	const [ selectedItem, setSelectedItem ] = useState(0);
	const [centerMode, setCenterMode] = useState(window.innerWidth > 768);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setCenterMode(window.innerWidth > 768)
		})
	})
	const moveSlider = () => {
		setSelectedItem(selectedItem+1);
	}
	return (
		<Container className="section-spacing">
			<Row className="review-section-row">
				<Image
					src={heartIcon}
					className="heart-img"
					wrapperClass="heart-img-wrapper"
				/>
				<h3 className="review-section-row__heading mr-auto">
					<strong>
						What other people say about
						<br />
						our service
					</strong>
				</h3>
				<div onClick={moveSlider}>
					<Image
						src={arrowRight}
						className="arrow-img"
						wrapperClass="arrow-img-wrapper"
					/>
				</div>
			</Row>
			<Carousel
				selectedItem={selectedItem}
				autoPlay={false}
				showArrows={false}
				showStatus={false}
				centerMode={centerMode}
				centerSlidePercentage={34}
				infiniteLoop={true}
			>
				{reviewersDetails.map((reviewer, key) => {
					return (
						<ReviewCard
							key={key}
							cardWrapper="reviews-card-wrapper"
							cardDetails="card-details"
							cardDetails__text="card-details__text"
							imageStyle="circle"
							src={reviewer.img}
							reviewerName={reviewer.name}
							reviewerPosition={reviewer.position}
							review={reviewer.review}
						/>
					);
				})}
			</Carousel>
		</Container>
	);
};
export default Reviews;
