// import { createStore } from "redux"; //not react-redux!

// // // store : data(state)를 넣는 곳

// // //redux는 data를 관리하는 걸 도와주는 역할을 하기 위해 만들어짐.

// // //what is state?
// // // state : application에서 바뀌는 data를 의미함

// // const add = document.getElementById("add");
// // const minus = document.getElementById("minus");
// // const number = document.querySelector("span");

// // // ****************** improvement 2 (using const variable instead of string)
// // const ADD = "ADD";
// // const MINUS = "MINUS";



// // //countModifier(reducer) 외에 그 어떤 다른 함수에서 state(data)를 변경시킬 수 있는 함수는 없다.
// // //state = 0 : state 초기화하는 건데 항상 하는게 아니라, 만약 state(count)값이 없다면 초기화해주는 것.
// // const countModifier = (count = 0, action) => {
// //   //modify state code, but how? => using action => countModifier(currentState = 0, {type: "HELLO"}) 이렇게 실행됨.
// //   console.log(count, action);
// //   //적용하기
// //   // if (action.type === "ADD") {
// //   //   return count += 1;
// //   // }
// //   // else if(action.type === "MINUS"){
// //   //   return count = count-1;
// //   // }
// //   // else {
// //   //   return count;
// //   // }
// //   // ******************** improvement 1 (using switch() instead of if-else if-else )
// //   switch (action.type) {
// //     case ADD:
// //       return count + 1;
// //     case MINUS:
// //       return count - 1;
// //     default:
// //       return count;
// //   }
// // };
// // // reducer : data의 의미를 찾고 수정(modify)하는 function이다.
// // // reducer가 return 하는 것이 application의 data가 된다.

// // const countStore = createStore(countModifier); // => Reducer가 필요함

// // //reducer에게 action을 보내는 방법 : store.dispatch()사용하기
// // //action 은 항상 object여야 한다.

// // //얘네는 선언하면 바로 실행됨.
// // // countStore.dispatch({type: "ADD"});
// // // countStore.dispatch({type: "MINUS"});

// // // console.log(countStore.getState());
// // //countStore는 총 4개의 함수를 가진다.
// // // dispatch() , getState() , replaceReducer() , subscribe()

// // // subscribe : store안에 있는 변화들을 알게 해준다.
// // // 즉, state에 변화가 생기면 실행되는 함수 == html에 number(state)를 업데이트하는 기능
// // const onChange = () => {
// //   number.innerText = countStore.getState();
// // };

// // countStore.subscribe(onChange);

// // // 작성 순서
// // // 1. create store using createStore
// // // 2. create reducer and add it on store
// // // 3. dispatch를 이용해서 msg를 store에 보내면 된다. (msg==={type: "ADD"})
// // // 4. 전송한 MSG는 action에 넣고 action을 체크한다.

// // // let count = 0; //이 곳이 이 어플리케이션에서 변하는 유일한 데이터
// // // number.innerText = count;

// // // //html에게 count 업데이트 하라고 알려주는 코드
// // // const updateText = () => {
// // //   number.innerText = count;
// // // }

// // // //여기서 코드 끝까지는 오직 count를 수정하기 위한 코드일 뿐이다.
// // // const addValue = () => {
// // //   count ++;
// // //   updateText();
// // // }

// // // const minusValue = () => {
// // //   count--;
// // //   updateText();
// // // }

// // // 버튼과 REDUCER연결하기
// // add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// // minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//   return {type: ADD_TODO, text: text};
// }

// const deleteTodo = (id) => {
//   return {type: DELETE_TODO, id}
// }
// const reducer = (state = [], action) => {
//   console.log(action);
  
//   switch(action.type){
//     case ADD_TODO:
//       return [...state, {text: action.text, id: Date.now()}]; //no mutate state. ...state(과거의 state), {text:~~}(new todo)
//     case DELETE_TODO:
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// // ************ improvement 1
// const dispatchAddTodo = text => {
//   store.dispatch(addToDo(text));
// }

// const dispatchDeleteTodo = (e) => {
//   const id = parseInt(e.target.parentNode.id); //클릭된 버튼을 가진 li의 id
//   store.dispatch(deleteTodo(id));
// }

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = ''; //everytime clean the whole list

//   // make a new list and paint 
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     delBtn.innerText = "Del";
//     delBtn.addEventListener("click", dispatchDeleteTodo);
//     li.id = toDo.id
//     li.innerText = toDo.text;
//     li.appendChild(delBtn);
//     ul.appendChild(li);
//   })
// }

// store.subscribe(paintToDos); //repaints states on html


// const onSubmit = (e) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddTodo(toDo)
// }

// form.addEventListener("submit", onSubmit);



import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}> 
  {/* //여기에다가 스토어 사용!!!!! */}
    <App /> 
  </Provider>  
  
  ,document.getElementById("root")
);