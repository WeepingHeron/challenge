import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const  onDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const onToggleStatusTodo = (id) => {
        dispatch(toggleStatusTodo(id));
    };

    return(

    )
}

export default List;

const StListContainer = styled.div`
    padding: 0 24px;
`;

const StListWrapper = styled.div`
    display: flex;
    flex: wrap;
    gap: 12px;
`;

const StTodoContainer = styled.div`
    width: 270px;
    border: 4px solid teal;
    min-height: 150px;
    border-radius: 150px;
    padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StDialogFooter = styled.footer`
    display: flex;
    justify-content: end;
    padding: 12px;
    gap: 12px;
`;