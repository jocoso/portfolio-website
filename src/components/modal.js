import React from 'react';

function Modal(props) {
	return (
		<div className= "inline-block gallery-card" onClick={() => props.onClick(props.item)}>
			{/* Triggers the Modal */}
			<img src={props.item.img} alt={props.item.img}/>
			{/* This is the modal */}
			{props.item.selected && (
				<div className="modal" >
					{/* Modal Content (The Image) */}
					<img src={props.item.img} alt={props.item.img} className="modal-content" />
				</div>
			)}
		</div>
	);
}

export default Modal;
