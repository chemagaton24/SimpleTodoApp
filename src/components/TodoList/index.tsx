import { Dispatch, SetStateAction } from "react";
import { TodoListType } from "../../types/Todo";
import { Button, FlexBox, FlexCol, ListFlexBox } from "../GlobalStyles.style";
import TodoItem from "../TodoItem";

const TodoList = ({
  data,
  setTodoList,
}: {
  data: TodoListType[];
  setTodoList: Dispatch<SetStateAction<TodoListType[]>>;
}) => {
  const clearTodoFn = () => {
    setTodoList([]);
  };

  return (
    <>
      <ListFlexBox gap={8} flexDirection="column">
        {data &&
          data.map((item) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                deleteTodo={setTodoList}
              />
            );
          })}
        {!data.length && <TodoItem title="You have no task." />}
      </ListFlexBox>
      <FlexBox gap={8}>
        <FlexCol flexGrow={1}>
          {!!data.length && <>You have {data.length} pending task.</>}
        </FlexCol>
        <FlexCol>
          <Button onClick={clearTodoFn}>Clear All</Button>
        </FlexCol>
      </FlexBox>
    </>
  );
};

export default TodoList;
