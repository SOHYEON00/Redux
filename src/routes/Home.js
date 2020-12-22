import React, { useState } from "react";
import {connect} from "react-redux";
import { actionCreators} from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addToDo}) {

  const [text, setText] = useState("");
  const setTargetValue = (e) => {
    setText(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To</h1>
      <form onSubmit={formSubmit}>
        <input type="text" value={text} onChange={setTargetValue} />
        <button>add</button>
      </form>
      <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}</ul>
    </>
  );
}

//이 두 function을 나눠서 사용하게 된다면 HOME 컴포넌트가 직접 dispatch할 이유가 없음
const mapStateToProps = (state) => {
  return {toDos : state}; //store에서 받아온 toDos는 HOME컴포넌트의 props이 되었다.
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo : text => {dispatch(actionCreators.addToDo(text))}
    // creating props using functions and send these functions to props.
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
