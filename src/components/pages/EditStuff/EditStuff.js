import React from 'react';

import './EditStuff.scss';

class EditStuff extends React.Component {
  render() {
    const { stuffId } = this.props.match.params;
    return (
      <div className="EditStuff">
        <h1>Edit Stuff</h1>
        <h2> The Edit Stuff id is {stuffId} </h2>
      </div>
    );
  }
}
export default EditStuff;
