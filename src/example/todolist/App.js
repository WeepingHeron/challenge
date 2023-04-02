import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todos";
// import Router from './shared/Router';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
    // return <Router />;

};

export default App;
