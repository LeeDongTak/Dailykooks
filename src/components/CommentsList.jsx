import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useComments from '../hooks/useComments';
import Comment from './Comment';

function CommentsList() {
  const { selectedMarker } = useSelector((state) => state.marker);
  const currentMarker = JSON.parse(localStorage.getItem('selectedMarker'));
  const { data: comments } = useComments(currentMarker.id);
  console.log(comments);

  return (
    <StCommentsListWrapper>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.commentId}>
            <Comment currentMarker={currentMarker} />
          </li>
        ))}
      </ul>
    </StCommentsListWrapper>
  );
}

export default CommentsList;

const StCommentsListWrapper = styled.section`
  margin: 0 auto;
  width: 900px;
  background-color: #eee;
`;
