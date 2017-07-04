import React from 'react';
var LoginButton = React.createClass({
    render:function(){
      return (
            <button onClick = {this.props.onClick}>
              Login
            </button>
      );
    }
});

export {LoginButton};
