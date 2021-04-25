import React, { useState } from 'react';
import './reviewCard.scss';
import Image from '../Image/image';
import { Edit, EmptyCircle, Checkbox } from '../icons/icons';
import PeopleModal from '../peopleModal/peopleModal';

const ReviewCard = (props) => {
	const {
		id,
		src,
		reviewerName,
		reviewerPosition,
		description,
		review,
		cardWrapper,
		imageWrapper,
		cardDetails,
		imageStyle,
		cardDetails__text,
		isEditable,
		data,
		setData,
		onItemSelection,
		imagePreview,
		setImagePreview,
	} = props;

	const [showEditModal, setShowEditModal] = useState(false);
	const [ isSelected, setIsSelected ] = useState(false);

	const showModal = () => {
		setShowEditModal(true);
	};

	const handleEditModalClose = () => {
		setShowEditModal(false);
	};

	const selectUserAndShowDelete = (id) => {
		setIsSelected(true)
		onItemSelection(id, true);
	};

	const unCheckSelectedUser = () => {
		setIsSelected(false);
		onItemSelection(id, false);
	};
	return (
		<div className={cardWrapper}>
			<div className={cardDetails}>
				<Image src={src} className={imageStyle} wrapperClass={imageWrapper} />
				<div className={cardDetails__text}>
					<span className="black-heading">{reviewerName}</span>
					<span className="sub-heading-color">
						<small>{reviewerPosition}</small>
					</span>
				</div>
			</div>

			{review ? (
				<div className="review">
					<span>"{review}"</span>
				</div>
			) : null}

			{isEditable ? (
				<div className="edit-wrapper" onClick={showModal}>
					<Edit />
				</div>
			) : null}

			{isEditable && !isSelected ? (
				<div
					className="empty-circle-wrapper"
					onClick={() => selectUserAndShowDelete(id)}
				>
					<EmptyCircle />
				</div>
			) : null}

			{isEditable && isSelected ? (
				<div className="checkbox-wrapper" onClick={() => unCheckSelectedUser(id)}>
					<Checkbox />
				</div>
			) : null}

			{showEditModal ? (
				<PeopleModal
					showModal={showEditModal}
					handleClose={handleEditModalClose}
					modalTitle="Edit People"
					editableUser={{
						id: id,
						img: src,
						name: reviewerName,
						position: reviewerPosition,
						description: description,
					}}
					data={data}
					setData={setData}
					imagePreview={imagePreview}
					setImagePreview={setImagePreview}
				/>
			) : null}
		</div>
	);
};
export default ReviewCard;
