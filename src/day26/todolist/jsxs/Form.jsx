import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import nextId from 'react-id-generator/lib/nextId'
import { addTodo } from '../redux/modules/todos'

const Form = () => {
	const id = nextId()

	const dispatch = useDispatch()
	const [todos, setTodo] = useState({
		id: 0,
		title: '',
		body: '',
		isDone: false,
	})

	const onChangeHandler = (event) => {
		const { name, value } = event.target
		setTodo({ ...todos, [name]: value })
	}

	const onSubmitHandler = (event) => {
		event.preventDefualt()
		if (todos.title.trim() === '' || todos.body.trim() === '') return

		dispatch(addTodo({ ...todos, id }))
		setTodo({
			id: 0,
			title: '',
			body: '',
			isDone: false,
		})
	}

	return (
		<StAddForm onSubmit={onSubmitHandler}>
			<StInputGroup>
				<StFormLabel>제목</StFormLabel>
				<StAddInput type='text' name='title' value={todos.title} onChange={onChangeHandler} />
			</StInputGroup>
			<StAddButton>추가하기</StAddButton>
		</StAddForm>
	)
}

export default Form

const StInputGroup = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
`

const StFormLabel = styled.label`
	font-size: 16px;
	font-weight: 700;
`

const StAddForm = styled.form`
	background-color: #eee;
	border-radius: 12px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	gap: 20px;
`

const StAddInput = styled.input`
	height: 40px;
	width: 240px;
	border: none;
	border-radius: 12px;
	padding: 0 12px;
`

const StAddButton = styled.button`
	border: none;
	height: 40px;
	cursor: pointer;
	border-radius: 10px;
	background-color: teal;
	width: 140px;
	color: #fff;
	font-size: 700;
`
