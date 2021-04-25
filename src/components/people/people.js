import React, { useState } from 'react';
import './people.scss';
import { Container, Row } from 'react-bootstrap';
import Image from '../../views/Image/image';
import ReviewCard from '../../views/reviewCard/reviewCard';
import smiley from '../../assets/7-icons/happy-face.svg';
import { reviewersDetails } from '../reviewsSection/staticData';
import PeopleModal from '../../views/peopleModal/peopleModal';
import { Delete } from '../../views/icons/icons';

const People = () => {
	const [showModal, setShowModal] = useState(false);
	const [isEditable, setIsEditable] = useState(false);
	const [peopleData, setPeopleData] = useState(reviewersDetails);
	const [imagePreview, setImagePreview] = useState(undefined);
	const [selectedItems, setSelectedItems] = useState([]);

	const addPeople = () => {
		setShowModal(true);
	};

	const editPeople = () => {
		setIsEditable(true);
	};

	const cancelHandler = () => {
		setIsEditable(false);
		setSelectedItems([]);
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	const onItemSelection = (id, selected) => {
		if (selected) {
			setSelectedItems([...selectedItems, id]);
		} else {
			const updatedSelectedItems = selectedItems.filter((item) => item !== id);
			setSelectedItems([...updatedSelectedItems]);
		}
	};

	const deleteSelectedItems = () => {
		const updatedPeopleData = peopleData.filter(
			(item) => !selectedItems.includes(item.id)
		);
		setSelectedItems([]);
		setPeopleData([...updatedPeopleData]);
	};

	const showDeleteIcon = !!selectedItems.length;
	return (
		<Container className="section-spacing">
			<Row className="people-section-row">
				<Image
					src={smiley}
					className="smiley-img"
					wrapperClass="smiley-img-wrapper"
				/>
				<h3 className="people-section-row__heading mr-auto">
					<strong>
						Our important people is listed
						<br />
						here
					</strong>
				</h3>
				<div className="people-actions">
					{!isEditable && !showDeleteIcon ? (
						<button className="edit" onClick={editPeople}>
							Edit
						</button>
					) : null}

					{!showDeleteIcon ? (
						<button className="add" onClick={addPeople}>
							Add
						</button>
					) : null}

					{isEditable && !showDeleteIcon ? (
						<button className="cancel" onClick={cancelHandler}>
							Cancel
						</button>
					) : null}

					{showDeleteIcon ? (
						<div className="delete-wrapper" onClick={deleteSelectedItems}>
							<Delete />
						</div>
					) : null}
				</div>
			</Row>
			<Row className="justify-content-center">
				{peopleData &&
					peopleData.length &&
					peopleData.map((people) => {
						return (
							<ReviewCard
								key={people.id}
								src={people.img}
								reviewerName={people.name}
								reviewerPosition={people.position}
								description={people.description}
								cardWrapper="card-wrapper col-md-2"
								imageStyle="square"
								cardDetails__text="card-details__text"
								isEditable={isEditable}
								id={people.id}
								data={peopleData}
								setData={setPeopleData}
								onItemSelection={onItemSelection}
								imagePreview={imagePreview}
								setImagePreview={setImagePreview}
							/>
						);
					})}
			</Row>
			{showModal ? (
				<PeopleModal
					showModal={showModal}
					handleClose={handleModalClose}
					modalTitle="Add People"
					data={reviewersDetails}
					setData={setPeopleData}
					imagePreview={imagePreview}
					setImagePreview={setImagePreview}
				/>
			) : null}
		</Container>
	);
};
export default People;
