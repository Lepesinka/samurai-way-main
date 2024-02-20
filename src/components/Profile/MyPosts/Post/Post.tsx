import React from 'react';
import s from './Post.module.css';

const Post = (props:any) => {
  
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXgRT3oZnbui5rD_0I-nljnat3bplaxZ7VQ&usqp=CAU' />
      {props.message}
      <div>
        <span> like</span>{props.likesCount}
      </div>
    </div>
    
  )
}
export default Post;