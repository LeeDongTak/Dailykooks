import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';

function CommentsList({ markerId }) {
  return (
    <StCommentsListWrapper>
      <ul>
        <li>
          <Comment markerId={markerId} />
        </li>
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
