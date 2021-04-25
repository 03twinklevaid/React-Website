import React from 'react';
import './image.scss';

const Image = (props) => {
	const { src, className, wrapperClass } = props;
	return (
		<div className={wrapperClass}>
			<img src={src} className={className} />
		</div>
	);
};
export default Image;
