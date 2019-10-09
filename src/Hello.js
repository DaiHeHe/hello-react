import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

class Hello extends Component {
    render() {
      return (
        <div>
           name={this.props.name},
           age={this.props.age},
           user={this.props.user}
        </div>
      );
    }
}


Hello.protoType = {
  name:PropTypes.string.isRequired,
  age:PropTypes.string.isRequired,
  user:PropTypes.number.isRequired
}

export default Hello;
