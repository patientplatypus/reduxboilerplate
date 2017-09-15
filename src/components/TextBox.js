import React, { Component } from 'react';
import { connect } from 'react-redux'
import { textCHANGE } from '../Redux/actions'


class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localtext: 'Click Here to Change Text'
    };

    this.props.store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      this.setState({
        localtext: this.props.store.getState().textvalue
      });
    });
  }

  render() {
    return (
      <div>
        Current text value: {this.state.localtext}
        <form onClick={()=>{this.setState({localtext: ''})}}>
          <textarea value={this.state.localtext} onChange={this.props.store.dispatch(textCHANGE(this.state.localtext))}>
          </textarea>
        </form>
      </div>
    );
  }
};

TextBox = connect()(TextBox)

export default TextBox
