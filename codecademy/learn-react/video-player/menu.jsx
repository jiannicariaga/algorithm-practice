import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    const { chooseVideo } = this.props;
    chooseVideo(target.value);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input
          type='radio'
          name='src'
          value='fast' >
          fast
        </input>
        <input
          type='radio'
          name='src'
          value='slow' >
          slow
        </input>
        <input
          type='radio'
          name='src'
          value='cute' >
          cute
        </input>
        <input
          type='radio'
          name='src'
          value='eek' >
          eek
        </input>
      </form>
    );
  }
}
