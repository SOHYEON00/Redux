# Vanila Redux
***
Learning Vanila-Redux and React-Redux 
by Nomad Coders

<br/><br/>

## reducer(countModifier)
: 현재 상태의 어플리케이션과 함께 불려지는 function.

- parameter: currentState, action
    - currentState: 만약 현재 상태(count)가 없다면 0로 끝난다.
    - action: reducer(countModifier)와 소통하는 방법

- reducer가 return 하는 것은, 현재 어플리케이션의 state가 된다.


## how Action to Reducer - using Dispatch

- dispatch가 Reducer를 불러서 currentState와 내가 보낸 action을 더한다.


## Action
: reducer와 커뮤니케이션하는 방법이다.

- 항상 Object여야 하며 'type' 프로퍼티를 가져야 한다. (이름 변경 불가능)


## subcribe()
: state를 변화를 store에서 감지하고 싶다면, 그 변화를 subcribe()해주면 된다.



<br/><br/>
***
<br/><br/>

# Pure-Redux

- never use MUTATE STATE

<br/><br/>
***

### 출처
무료강의 [노마드코더 초보자를 위한 리덕스101](https://nomadcoders.co/redux-for-beginners/lobby)
