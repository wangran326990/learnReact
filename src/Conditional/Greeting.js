import React from 'react';
import {UserGreeting} from './UserGreeting';
import {GuestGreeting} from './GuestGreeting';

var Greeting = React.createClass({
    render:function(){
      var isLoggedIn = this.props.isLoggedIn;
      if(isLoggedIn){
        return <UserGreeting/>;
      }
      return <GuestGreeting/>;
    }
});

export {Greeting};
