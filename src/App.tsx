import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { Container } from "./components/Container/index.style";
import { FlexBox, GloablStyles } from "./components/GlobalStyles.style";
import SectionHeading from "./components/SectionHeading";
import TodoList from "./components/TodoList";
import { TodoListType } from "./types/Todo";

const App = () => {
  const [todoList, setTodoList] = useState<TodoListType[]>([]);

  return (
    <>
      <GloablStyles />
      <Container>
        <SectionHeading title="Todo App" />
        <FlexBox flexDirection="column" gap={20}>
          <AddTodo addTodo={setTodoList} />
          <TodoList setTodoList={setTodoList} data={todoList} />
        </FlexBox>
      </Container>
    </>
  );
};

export default App;
