import React from 'react';
import { useForm } from 'react-hook-form';

const Search = ({ addTodo }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    return (
        <div>
            <h1 style={{ fontSize: '29px', color: 'white' }}>Welcome to my React.js Todo Application</h1>
            <div className="todo-search">
                <form action="" onSubmit={handleSubmit((data) => {
                    addTodo(data);
                    reset();
                })}>
                    <input type="text" id="task" placeholder="Enter your Todo here" { ...register("task", { required: true}) } />
                    <button>Add</button>
                </form>
                {errors.task?.type === "required" && <small>This field is required</small>}
            </div>
        </div>
    );
};

export default Search;
