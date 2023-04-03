import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { editPost } from './postSlice'
import axios from 'axios'

const Modal = ({ closeHandler, closeLabel, post }) => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setContent(post.content)
    }
  }, [post])

  const onEditPost = () => {
    axios
      .put(`http://localhost:3001/posts/${post.id}`, {
        title,
        content,
      })
      .then(function () {
        dispatch(editPost({ id: post.id, title, content }))
        closeHandler()
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    if (name === 'title') {
      setTitle(value)
    } else if (name === 'content') {
      setContent(value)
    }
  }

  return (
    <div key={post}>
      <Dimmed onClick={!closeLabel ? closeHandler : () => {}} />
      <StContainer className={'modal'}>
        <section>
          <label>제목</label>
          <input type="text" name="title" value={title || ''} onChange={onChangeHandler} />
          <footer>
            {closeLabel && (
              <StButton className="close" onClick={closeHandler}>
                {closeLabel}
              </StButton>
            )}
            <StButton2 className="editButton" onClick={onEditPost}>
              수정 완료
            </StButton2>
          </footer>
        </section>
      </StContainer>
    </div>
  )
}

export default Modal

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: lightgray;
  z-index: 1;
  opacity: 0.8;
`

const StContainer = styled.div`
  width: 500px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  z-index: 999;
`

const StButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 40px;
  width: 100px;
  background-color: rgb(250, 177, 160);
  margin: 5px;
  color: rgb(214, 48, 49);
  bottom: 12px;
  right: 117px;
  position: absolute;
`

const StButton2 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  border: 3px solid rgb(85, 239, 196);
  background-color: #fff;
  height: 40px;
  width: 100px;
  margin: 5px;
  bottom: 12px;
  right: 10px;
  position: absolute;
`
