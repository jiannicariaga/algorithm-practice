import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from './copy-cat';

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: true,
      input: ''
    };
    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    const { copying, input } = this.state;
    return (
      <CopyCat
        copying={copying}
        toggleTape={this.toggleTape}
        input={input}
        handleChange={this.handleChange} />
    );
  }
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
