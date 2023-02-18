import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import { TodoListType } from "../../types/Todo";
import { Button, FlexBox, FlexCol, InputText } from "../GlobalStyles.style";

const AddTodo = ({
  addTodo,
}: {
  addTodo: Dispatch<SetStateAction<TodoListType[]>>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<TodoListType, "title">>();
  const addTodoFn = (title: string) => {
    addTodo((prev) => [...prev, { id: uuid(), title }]);
    reset();
  };

  const onSubmit = ({ title }: Pick<TodoListType, "title">) => {
    addTodoFn(title);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FlexBox gap={4}>
        <FlexCol flexGrow={1}>
          <InputText {...register("title", { required: true })} />
          {errors.title && <span>This field is required</span>}
        </FlexCol>
        <FlexCol>
          <Button type="submit">Add Todo</Button>
        </FlexCol>
      </FlexBox>
    </form>
  );
};

export default AddTodo;
