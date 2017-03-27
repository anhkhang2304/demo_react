import React from 'react';

export default class Content extends React.Component {
  render() {
    return (
      <header>
        { this.props.name }
      </header>
    );
  }
}

