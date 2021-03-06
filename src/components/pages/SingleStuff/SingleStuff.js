import React from 'react';
import { Link } from 'react-router-dom';
import './SingleStuff.scss';
import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    stuffData.getSingleStuff(itemId)
      .then((response) => this.setState({ item: response.data }))
      .catch((err) => console.error('cannot get single item', err));
  }

  removeItem = () => {
    const { itemId } = this.props.match.params;
    stuffData.removeItem(itemId)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('unable to delete singleview item', err));
  }

  render() {
    const { item } = this.state;
    const { itemId } = this.props.match.params;
    const editLink = `/edit/${itemId}`;
    return (
      <div className="SingleStuff col-3 offset-4">
        <h1> Single Item </h1>
        <Link className="btn btn-dark" to={editLink}> <i className="fas fa-pencil-alt"></i> </Link>
        <h2 className="card-title">{item.itemName}</h2>
        <img className="card-img-top" src={item.itemImage} alt="item" />
        <p className="card-text">{item.itemDescription}</p>
        <button className="btn btn-danger" onClick={this.removeItem}> <i className="fas fa-trash"></i> </button>
      </div>
    );
  }
}
export default SingleStuff;
