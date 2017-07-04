import React from 'react';
import {UserInfo} from './UserInfo';
function formateDate(date){
    return new Date(date).toLocaleDateString();
}


function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user = {props.author}/>
        <div className="Comment-text">
          {props.text}
        </div>

        <div className="Comment-data">
          {formateDate(props.date)}
        </div>
    </div>
  );
}

export {Comment};
