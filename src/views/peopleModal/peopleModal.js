import React, { useState, useEffect } from 'react';
import './peopleModal.scss';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { User, Edit } from '../icons/icons';
import Image from '../../views/Image/image';

const PeopleModal = (props) => {
	const initialState = {
		name: '',
		position: '',
		description: '',
		img: null,
	};
	const {
		showModal,
		handleClose,
		modalTitle,
		data,
		editableUser,
		setData,
		imagePreview,
		setImagePreview,
  } = props;

	const [userInput, setUserInput] = useState(initialState);
	const [editMode, setEditMode] = useState(false);

	const hiddenFileInput = React.useRef(null);

	useEffect(() => {
		if (editableUser) {
			setEditMode(true);
			setUserInput({ ...editableUser });
		}
	}, [editableUser]);

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setUserInput({ ...userInput, [name]: value });
	};

	const fileChangeHandler = (event) => {
		const fileUploaded = event.target.files[0];
		setImagePreview(URL && URL.createObjectURL(fileUploaded));
	};

	const addPeople = (e) => {
		e.preventDefault();
		setData([...data, { ...userInput, img: imagePreview }]);
		setImagePreview(null)
		handleClose();
	};

	const updateUser = (e) => {
		e.preventDefault();
		const userIndex = data.findIndex((user) => user.id === editableUser.id);
		data[userIndex] = { ...userInput, img: imagePreview };
		setImagePreview(null)
		setData([...data]);
		handleClose();
	};

	const onEditIconClick = () => {
		hiddenFileInput.current.click();
	};

	const validateName = !!userInput['name'] && userInput['name'] !== null;
	const validatePosition =
		!!userInput['position'] && userInput['position'] !== null;

	return (
		<Modal show={showModal} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{modalTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form
					className="form"
					onSubmit={(e) => (editMode ? updateUser(e) : addPeople(e))}
				>
					{imagePreview || (editableUser && editableUser.img) ? (
						<div className="uploaded-image-wrapper">
							<Image
								src={imagePreview || editableUser.img}
								className="uploaded-image"
							/>
						</div>
					) : (
						<User />
					)}
					<input
						type="file"
						ref={hiddenFileInput}
						style={{ display: 'none' }}
						onChange={(event) => fileChangeHandler(event)}
					/>
					<div className="edit-user-img" onClick={onEditIconClick}>
						<Edit />
					</div>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter name"
							value={userInput.name}
							name="name"
							onChange={(event) => onChangeHandler(event)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Position</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter position"
							value={userInput.position}
							name="position"
							onChange={(event) => onChangeHandler(event)}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							placeholder="Enter description"
							value={userInput.description}
							name="description"
							onChange={(event) => onChangeHandler(event)}
						/>
					</Form.Group>
					<div class="buttons">
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
						<Button
							variant="primary"
							type="submit"
							disabled={!validateName || !validatePosition}
						>
							Save
						</Button>
					</div>
				</Form>
			</Modal.Body>
		</Modal>
	);
};
export default PeopleModal;
