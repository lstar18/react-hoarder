import React from 'react';
import { Link } from 'react-router-dom';
import './StuffCard.scss';

class StuffCard extends React.Component {
  // static propTypes = {
  //   scat: scatShape.scatShape,
  // }

  render() {
    const { item } = this.props;
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
          </div>
        </div>
      </div>
    );
  }
}
export default StuffCard;
