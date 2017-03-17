import React from 'react';
import ReactDOM from 'react-dom';
import {Comment} from './Comment';
const comment = {
    date:'2017-03-05',
    text:'this is the comment from Ran',
    author:{
      name:'Ran',
      avatarUrl:'http://placekitten.com/g/64/64'
    }
};
const element = <Comment
                  date = {comment.date}
                  text = {comment.text}
                  author = {comment.author} />;
ReactDOM.render(element, document.getElementById('hw'));
