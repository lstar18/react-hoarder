import React from 'react';

import './Home.scss';

import stuffData from '../../../helpers/data/stuffData';
import StuffCard from '../../shared/StuffCard/StuffCard';

class Home extends React.Component {
  state = {
    stuff: [],
  }

  getItems = () => {
    stuffData.getStuff()
      .then((stuff) => this.setState({ stuff }))
      .catch((err) => console.error('cannot get stuff', err));
  }

  componentDidMount() {
    this.getItems();
  }

  removeItem = (itemId) => {
    stuffData.removeItem(itemId)
      .then(() => this.getItems())
      .catch((err) => console.error('cannot delete item', err));
  }

  render() {
    const { stuff } = this.state;

    const buildStuffCards = stuff.map((item) => (
      <StuffCard key={item.id} item={item} removeItem={this.removeItem}/>
    ));
    return (
      <div className="Home">
        <h1> My Stuff </h1>
        <div className="d-flex flex-wrap">
        { buildStuffCards }
        </div>
      </div>
    );
  }
}
export default Home;
