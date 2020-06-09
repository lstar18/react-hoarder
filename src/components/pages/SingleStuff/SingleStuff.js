import React from 'react';

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

  render() {
    const { item } = this.state;
    return (
      <div className="SingleStuff col-3 offset-4">
        <h1> Single Item </h1>
        <h2 className="card-title">{item.itemName}</h2>
        <img className="card-img-top" src={item.itemImage} alt="item" />
        <p className="card-text">{item.itemDescription}</p>
      </div>
    );
  }
}
export default SingleStuff;
