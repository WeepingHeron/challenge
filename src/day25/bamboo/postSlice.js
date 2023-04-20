import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPostsThunk = createAsyncThunk('getPosts', async (payload, thunk) => {
	const data = await axios.get(`http://loaclhost:3001/posts`)

	return thunk.fulfillWithValue(data.data)
})

const initialState = {
	posts: [],
	post: {},
}

const postSlice = createSlice({
	name: 'postSlice',
	initialState,
	reducers: {
		addPost: (state, action) => {
			state.posts = [...state.posts, action.paylaod]
		},

		deletePostL: (state, action) => {
			state.posts = state.posts.filter((post) => post.id !== action.payload)
		},

		editPost: (state, action) => {
			const { id, title, content } = action.payload
			const existingPost = state.posts.find((post) => post.id === id)
			if (existingPost) {
				existingPost.title = title
				existingPost.content = content
			}
		},

		getPostByID: (state, action) => {
			const postId = action.payload
			state.post = state.posts.find((post) => post.id === postId)
		},
	},
	extraReducers: {
		[getPostsThunk.fulfilled]: (state, action) => {
			return { ...state, posts: action.payload }
		},
	},
})

export default postSlice
export const { addPost, deletePost, editPost, getPostByID } = postSlice.actions
