import React from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { remove } from '../Store';




const Detail = ({toDo, onBtnClick}) => {
    
    const id = useParams().id;
    

    const toDos = toDo.find(toDo => toDo.id === parseInt(id))
    const navigate = useNavigate();

    const delBtn = () =>{
        onBtnClick(id);
        setTimeout(()=>{
            navigate("/")
        },1000);
        alert("홈으로 이동합니다!");
    }

    return (
        <div>
            <h1>{toDos?.text}</h1>
            <h5>Created at: {id}</h5>
            <button onClick={delBtn}>DEL</button>
        </div>
    );
}


function mapStateToProps(state) {

    return {toDo : state};
}

function mapDispatchToProps(dispatch){

    return{
        onBtnClick: (id) => dispatch(remove(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
