import React from 'react';
import './icons.scss';
import Image from '../../views/Image/image';
import editIcon from '../../assets/7-icons/pencil.svg';
import checkbox from '../../assets/7-icons/checked.svg';
import deleteIcon from '../../assets/7-icons/garbage.svg';
import userIcon from '../../assets/7-icons/user.svg';

export const Edit = () => {
	return (
		<div className="edit-icon-wrapper">
			<Image
				src={editIcon}
				className="edit-icon"
				wrapperClass="edit-icon-img__wrapper"
			/>
		</div>
	);
};
export const EmptyCircle = () => {
	return (
		<div className="empty-circle">
		</div>
	)
}

export const Checkbox = () => {
	return (
		<div className="checked-icon-wrapper">
			<Image
				src={checkbox}
				className="check-icon"
				wrapperClass="check-icon-img__wrapper"
			/>
		</div>
	);
};
export const Delete = () => {
	return (
		<div className="delete-icon-wrapper">
			<Image
				src={deleteIcon}
				className="delete-icon"
				wrapperClass="delete-icon-img__wrapper"
			/>
		</div>
	);
};
export const User = () => {
	return (
		<div className="user-icon-wrapper">
			<Image
				src={userIcon}
				className="user-icon"
				wrapperClass="user-icon-img__wrapper"
			/>
		</div>
	);
};
