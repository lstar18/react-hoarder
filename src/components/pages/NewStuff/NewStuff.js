import React from 'react';

import './NewStuff.scss';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  itemNameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  itemImageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  itemDescriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

    saveItem = (e) => {
      e.preventDefault();
      const {
        itemName,
        itemImage,
        itemDescription,
      } = this.state;
      const newItem = {
        itemName,
        itemImage,
        itemDescription,
        uid: authData.getUid(),
      };
      stuffData.postItem(newItem)
        .then(() => this.props.history.push('/home'))
        .catch((err) => console.error('unable to save item', err));
    }

    render() {
      const {
        itemName,
        itemImage,
        itemDescription,
      } = this.state;
      return (
      <div className="NewStuff col-12">
         <form className="col-6 offset-3 text-left">
          <div className="form-group">
            <label htmlFor="item-name">Item Name: </label>
            <input
              type="text"
              className="form-control"
              id="item-name"
              value={itemName}
              onChange={this.itemNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-image"> Item Image Url</label>
            <input
              type="text"
              className="form-control"
              id="item-image"
              value={itemImage}
              onChange={this.itemImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="item-description">Description </label>
            <input
              type="text"
              className="form-control"
              id="item-description"
              value={itemDescription}
              onChange={this.itemDescriptionChange}
            />
          </div>
          <button className="btn btn-dark" onClick={this.saveItem}>Save Item</button>
        </form>
      </div>
      );
    }
}
export default NewStuff;
