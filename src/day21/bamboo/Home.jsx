import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost, deletePost, getPostsThunk } from './postSlice'
import Modal from './Modal'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  const posts = useSelector((state) => state.postSlice.posts)

  const onDeletePost = (postId) => {
    axios
      .delete(`http://localhost:3001/posts/${postId}`)
      .then(function () {
        dispatch(deletePost(postId))
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const [post, setPost] = useState({
    id: 0,
    title: '',
    content: '',
  })
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeHandler = (event) => {
    const { name, value } = event.target
    if (name === 'title') {
      setTitle(event.target.value)
      setPost({ ...post, title: value })
    } else if (name === 'content') {
      setContent(event.target.value)
      setPost({ ...post, content: value })
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    if (post.title.trim() === '' || post.content.trim() === '') return

    axios
      .post(`http://localhost:3001/posts`, {
        title: post.title,
        content: post.content,
      })
      .then(function (response) {
        console.log(response)
        dispatch(addPost({ ...response.data, id: posts.length + 1 }))
        setTitle('')
        setContent('')
      })
  }
  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
        <input type="text" name="title" value={title} onChange={onChangeHandler} />
        <label>내용</label>
        <input type="text" name="content" value={content} onChagne={onChangeHandler} />
        <button type="submit">게시하기</button>
        <div>
          {post?.map((post) => {
            return (
              <div key={post.id}>
                <h2 className="post-title">{post.title}</h2>
                <div>{post.content}</div>
                <button onClick={() => setModalOpen(true)}>수정하기</button>
                {modalOpen && <Modal closeHandler={closeModal} closeLabel="닫기" post={post} />}
                <butotn onClick={() => onDeletePost(post.id)}>삭제하기</butotn>
              </div>
            )
          })}
        </div>
      </form>
    </>
  )
}

export default Home
