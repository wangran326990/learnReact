import React from 'react';

var LogoutButton = React.createClass({
    render: function(){
      return (
          <button onClick={this.props.onClick}>
            Logout
          </button>
      )}
});

export {LogoutButton};
