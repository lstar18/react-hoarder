import React from 'react';

import './EditStuff.scss';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class EditStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleStuff(itemId)
      .then((response) => {
        const item = response.data;
        this.setState({
          itemName: item.itemName,
          itemImage: item.itemImage,
          itemDescription: item.itemDescription,
        });
      })
      .catch((err) => console.error('cannot update item', err));
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

  updateItem = (e) => {
    e.preventDefault();
    const { itemId } = this.props.match.params;
    const {
      itemName,
      itemImage,
      itemDescription,
    } = this.state;
    const updatedItem = {
      itemName,
      itemImage,
      itemDescription,
      uid: authData.getUid(),
    };
    stuffData.putItem(itemId, updatedItem)
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
      <div className="EditStuff">
        <h1>Edit Stuff</h1>
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
          <button className="btn btn-dark" onClick={this.updateItem}>update Item</button>
        </form>
      </div>
    );
  }
}
export default EditStuff;
