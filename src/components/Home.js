import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../Store';
import ToDo from './ToDo'


const Home = ({toDos, addToDo}) => {
    const [text,setText] = useState("")

    const onChange = (e) =>{
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

  return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write something" value={text}
        onChange={onChange} ></input>
        <button>Add</button>
        </form>
        <ul>
            {toDos.map(toDo => (
                <ToDo {...toDo} key={toDo.id} />
            ))}
        </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {toDos: state}
}

const mapDispatchToProps = (dispatch) => {
    return { 
        addToDo: (text) =>{
            dispatch(actionCreators.addToDo(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
