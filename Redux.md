# React-Redux

> todo 만들기


## 그 전에! React와 React+Redux의 결정적 차이 구분하기
- React는 React 컴포넌트 자신이 개별적으로 상태관리를 한다.
- React + Redux는 상태관리를 하는 전용 장소(store)에서 상태를 관리하고, React 컴포넌트는 그걸 보여주기만 하는 용도로 쓰인다.

## Redux Flow
![](https://images.velog.io/images/sohyeon00/post/c8fbe7af-e4ea-4f60-b922-6b778ff0b266/image.png)


## 1. Get information from redux state.

> 이전엔, store.getState()로 state를 가져올 수 있었다. 그러면 각 컴포넌트에서 state를 어떻게 가지고 올까?

### 어떤 컴포넌트에서 state를 필요로 하는가?  
  -> Home.js를 보면 '<ul></ul>' 이 곳이 todo를 그려주는 부분이므로
     So, from Home, we need to get the state from the store.


### connect() 
: connect()함수는 말 그대로, 컴포넌트들을 store에 연결해준다.

- arguments
1) state
2) dispatch

> state와 dispatch의 각 역할이 헷갈린다면?
  store.getState()와 store.dispatch()를 생각하면 쉽다.
  
  getState()는 store에 있는 state를 컴포넌트가 가져오는 것이고, .dispatch()는 컴포넌트가 store 혹은 reducer에 메시지를 전달해주는 것으로 컴포넌트가 변경한 state값을 store에 보내는(넣어주는) 것으로 이해할 수 있다.(reducer를 통해 store의 state가 업데이트되기 때문에)

- connect(mapStateToProps)(Componenet)

### mapStateToProps

- 사용 이유 : 해당 컴포넌트에서 store로부터 무엇인가를 가져오고 싶기 때문에!

- function mapStateToProps(state, ownProps)
  This will give you the state from store to our Componenet.

- mapStateToProps는 함수로서 두 종류의 arguments와 함께 호출된다. 
  (redux store에서 온 state와 컴포넌트의 props)

- ownProps : Router를 통해 해당 컴포넌트에게 준 props들
- state : store로부터 가져온 state

- return값
    - mapStateToProps에 리턴값을 넣어주게 되면, 그 리턴값은 결국 해당 컴포넌트가 받는 props에 들어가게 된다
     왜?
     - connect()는 컴포넌트로 보내는 props에 props로서 추가될 수 있도록 허용해주기 때문.
     - ***그래서 state를 return값으로 넣어주면 컴포넌트가 store로부터 state를 받아오는 동작을 할 수 있게 되는 것***이다.

<br/><br/>
***

## How Component do dispatch


### mapDispatchToProps(dispatch, ownProps?)

- 이 함수는 connect의 2번째 argument이다.

- 사용방법
```
connect(mapStateToProps, mapDispatchToProps) // 기본
connect(null, mapDispatchToProps) //mapState는 필요하지 않고, dispatch만 필요한 경우

- object를 리턴해줘야 함. -> dispatch를 리턴하면 됨.