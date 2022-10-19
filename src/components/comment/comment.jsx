import React from 'react';
import Button from '../button/button';
import {
  CommentBox,
  ContentSet,
  CommentUserName,
  CommentContent,
  BtnSet,
} from './commentStyle';

const Comment = ({ comment }) => {
  return (
    <>
      <CommentBox>
        <ContentSet>
          <CommentUserName>{comment.username}</CommentUserName>
          <CommentContent>{comment.content}</CommentContent>
        </ContentSet>
        <BtnSet>
          <Button btnType='Comment'>
            <i className='fa-solid fa-wrench'></i>
          </Button>
          <Button btnType='Comment'>
            <i className='fa-solid fa-trash-can'></i>
          </Button>
        </BtnSet>
      </CommentBox>
    </>
  );
};

export default Comment;
