import React, {useState} from "react";
import PropTypes from 'prop-types';

const styles = {
    form: {
        marginBottom: '1rem',
    },
    input: {
        margin: '5px'
    }
}

function useInputValue(defaultValue='') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value

    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input style={styles.input} {...input.bind}/>
            <button type='submit'>Add To do</button>
        </form>
    )
}

AddTodo.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default AddTodo