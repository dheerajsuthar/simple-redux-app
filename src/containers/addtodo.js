import React from 'react';

import { addTodo } from '../actions';
import { connect } from 'react-redux';
let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}>
                <input
                    ref={node => input = node}
                ></input>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

AddTodo = connect()(AddTodo);
export default AddTodo;