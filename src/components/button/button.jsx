import React from 'react';
import { Link } from 'react-router-dom';
import { DetailNavBtn, FeedUpdateBtn, CommentBtn } from './buttonStyle';

const Button = ({ btnType, children }) => {
  //console.log(`btnType: ${btnType}`);
  switch (btnType) {
    case 'DetailNav':
      return (
        <Link to='/feeds'>
          <DetailNavBtn>{children}</DetailNavBtn>
        </Link>
      );
    case 'FeedUpdate':
      return <FeedUpdateBtn>{children}</FeedUpdateBtn>;
    case 'Comment':
      return <CommentBtn>{children}</CommentBtn>;
    default:
      return <button>{children}</button>;
  }
};

export default Button;
