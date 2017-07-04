import React from 'react';

var BoilingVerdict = React.createClass(
    {
      render:function(){
        console.log(this);
        if(this.props.celsius >= 100){
          return <p>The water would boil </p>;

        }
        return <p>The water would not boil </p>;
      }
    }
);

export {BoilingVerdict};
