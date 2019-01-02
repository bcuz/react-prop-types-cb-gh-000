// Code Goes Here
import React from 'react';
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          {/* <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li> */}
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: 5,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool
};

ReactDOM.render(<Order />, document.getElementById('root'))
