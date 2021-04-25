import React from 'react';
import './text.scss';

const Text = (props) => {
	const { headerText1, headerText2, headerText3 } = props;
	return (
		<div className="text-wrapper col-md-6">
			<h3 className="text-wrapper__heading">
				<strong>
					{headerText1}
					<br />
					{headerText2}
					<br />
					{headerText3}
				</strong>
			</h3>
			<p className="text-wrapper__para">
				It is a long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point of
				using Lorem Ipsum is that it has a more-or-less normal distribution of
				letters, as opposed to using 'Content here, content here', making it
				look like readable English.
			</p>
		</div>
	);
};
export default Text;
