import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './StuffCard.scss';
import itemShape from '../../../helpers/propz/itemShape';

class StuffCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    removeItem: PropTypes.func.isRequired,
  }

  render() {
    const { item, removeItem } = this.props;
    const singleLink = `/stuff/${item.id}`;
    const editLink = `/edit/${item.id}`;
    return (
      <div className="StuffCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.itemName}</h5>
            <img className="card-img-top" src={item.itemImage} alt="item" />
            <p className="card-text">{item.itemDescription}</p>
            <Link className="btn btn-info ml-1" to={singleLink}> <i class="far fa-eye"></i> </Link>
            <Link className="btn btn-warning mr-1" to={editLink}> <i className="fas fa-pencil-alt"></i> </Link>
            <button className="btn btn-danger" onClick={() => removeItem(item.id)}> <i className="fas fa-pencil-alt"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
export default StuffCard;
