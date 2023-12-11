import { useMutation, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import styled from 'styled-components';
import { deleteComment, updateComment } from '../api/comments';

function Comment({ comment }) {
  const queryClient = useQueryClient();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState(comment.content);

  const deleteMutation = useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('firebase/comments');
      console.log('성공');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const updateMutation = useMutation(updateComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('firebase/comments');
      console.log('성공');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const onEditModeBtnClickHandler = () => {
    setIsEditMode(true);
  };

  const onEditBtnClickHandler = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      const data = {
        updateContent: { content: updateValue, editedAt: dayjs().format('YYYY년 MM월 DD일 hh:mm') },
        commentId: comment.commentId
      };

      updateMutation.mutate(data);
      setIsEditMode(false);
    }
  };

  const onDeleteBtnClickHandler = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteMutation.mutate(comment.commentId);
    }
  };

  const onCancelEditBtnClickHandler = () => {
    setIsEditMode(false);
    setUpdateValue(comment.content);
  };

  const onEditContentChangeHandler = (e) => {
    setUpdateValue(e.target.value);
  };

  return (
    <StCommentContainer>
      <p>{dayjs(comment.createdAt).format('YYYY년 MM월 DD일 hh:mm')}</p>
      <StCommentContentContainer>
        <h3>{comment.nickname}</h3>
        {isEditMode ? (
          <textarea
            value={updateValue}
            id="contents"
            placeholder="200자 이내의 내용을 입력해주세요"
            maxLength={200}
            rows={2}
            onChange={onEditContentChangeHandler}
          />
        ) : (
          <p>{comment.content}</p>
        )}
      </StCommentContentContainer>
      {isEditMode ? (
        <StBtnContainer>
          <button onClick={onEditBtnClickHandler}>수정 완료</button>
          <button onClick={onCancelEditBtnClickHandler}>취소</button>
        </StBtnContainer>
      ) : (
        <StBtnContainer>
          <button onClick={onEditModeBtnClickHandler}>수정</button>
          <button onClick={onDeleteBtnClickHandler}>삭제</button>
        </StBtnContainer>
      )}
    </StCommentContainer>
  );
}

export default Comment;

const StCommentContainer = styled.div`
  width: 900px;
  margin-bottom: 12px;
  & > p {
    text-align: end;
    font-size: 0.7rem;
  }
`;

const StCommentContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
  h3 {
    width: 30%;
  }
  textarea {
    width: 70%;
    flex-shrink: 1;
  }
`;

const StBtnContainer = styled.div`
  background-color: #ddd;
`;
