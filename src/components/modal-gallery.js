import React from 'react';

import PropTypes from 'prop-types';
import Modal from './modal';

/**
 * Component Name: ModalGallery
 * Type: component
 * File Name: modal-gallery.js
 * Description: Returns a interactable gallery of images. If an image gets clicked, it will open up bigger for the person to see.
 * Requirements: prop-types, modal
 * Returns: A React component
 * Usage: <ModalGallery items=[‘Link’]  />
 */

class ModalGallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: this.processItems(this.props.items)
		};
	}

	processItems = (objs) => {
		return objs.map((img, idx) => {return {id: idx, img, selected: false}});
    };

    handleCardClick = (id) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id)
                item.selected = false;
        });
        this.setState(items);
    }
    
    makeItems = (obj) => {
        return obj.map(item => {
            return <Modal key={item.id} item={item} onClick={() => this.handleCardClick(item.id)} />
        })
    }

	render() {
		return (<div style={{width: this.props.width}}>
			<div className={this.props.className}>
				{this.makeItems(this.state.items)}
			</div>
            {this.props.item}
            </div>
		);
	}
}

ModalGallery.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    width: PropTypes.string
}

ModalGallery.defaultProps = {
    width: '100%'
}

export default ModalGallery;