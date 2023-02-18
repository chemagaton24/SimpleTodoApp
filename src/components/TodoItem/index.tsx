import { Dispatch, SetStateAction, useState } from "react";
import { TodoListType } from "../../types/Todo";
import { TodoItem } from "./Style";
import { MdDelete } from "react-icons/md";
import { ButtonAddTodo } from "../GlobalStyles.style";

const Index = ({
  id,
  title,
  deleteTodo,
}: {
  id?: string;
  title: string;
  deleteTodo?: Dispatch<SetStateAction<TodoListType[]>>;
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const deleteTodoFn = (id: string) => {
    if (deleteTodo) deleteTodo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TodoItem
      key={id}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {title}
      {isHovered && id && (
        <ButtonAddTodo onClick={() => deleteTodoFn(id)}>
          <MdDelete size={22} color="#fff" />
        </ButtonAddTodo>
      )}
    </TodoItem>
  );
};

export default Index;
