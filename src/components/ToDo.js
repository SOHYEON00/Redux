import React from "react";
import {connect} from "react-redux";
import {actionCreators} from "../store";

function ToDo({text, onDelBtnClick}) { //2. onDelBtnClick을 props로 받아 사용하겠다고 함.
    return <li>
        {text} 
        <button onClick={onDelBtnClick}>DEL</button> 
        {/* 버튼 onCLick을 props인 onDelBtnClick으로 수행 */}
        </li>
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        onDelBtnClick : () => {dispatch(actionCreators.deleteToDo(ownProps.id))} 
        //1. {dispatch..} 내용을 수행하는 함수 onDelBtnClick이 ToDo.js의 props로 들어가게 됨
        //3. 파라미터로 넘어가는 ownProps.id를 parseInt해줘야 함. 근데 이건 store에서 함! id: parseInt(id)
    }
}

export default connect(null, mapDispatchToProps)(ToDo);