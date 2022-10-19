import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __getCommentsByFeedId } from '../../redux/modules/commentsSlice';
import Comment from '../comment/comment';
import styled from 'styled-components';

const ListSpan = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
const ListHr = styled.hr`
  margin-top: 10px;
`;

const CommentList = ({ feedId }) => {
  const TargetComments = useSelector(
    (state) => state.comments.commentsByFeedId
  );
  const dispatch = useDispatch();

  useEffect(() => {
    //console.log('commentList useEffect!');
    dispatch(__getCommentsByFeedId(feedId));
  }, [dispatch, feedId]);

  return (
    <>
      <ListSpan>댓글 목록</ListSpan>
      {TargetComments.data.map((comment) => {
        return (
          <>
            <ListHr />
            <Comment key={comment.id} comment={comment} />
          </>
        );
      })}
      <ListHr />
    </>
  );
};

export default CommentList;
