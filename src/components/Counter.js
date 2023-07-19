import classes from './Counter.module.css';
import { counterActions } from '../store/index';
import {useSelector , useDispatch} from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const IncrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const DecrementHandler = () =>{
    dispatch(counterActions.decrement())
  }
  const IncrementBy2 = () =>{
    dispatch(counterActions.increaseByAmount(2))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.action}>
        <button onClick={IncrementHandler}>Increment</button>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={IncrementBy2}>IncrementBy2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    
  );
};

export default Counter;

// class counter extends Component{

//   IncrementBy2Handler(){
//     this.props.incrementBy2()
//   }

//   DecrementBy2Handler(){
//     this.props.decrementBy2()
//   }

//   toggleCounterHandler(){

//   }

//   render(){
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div className={classes.action}>
//         <button onClick={this.IncrementBy2Handler.bind(this)}>IncrementBy5</button>
//         <button onClick={this.DecrementBy2Handler.bind(this)}>DecrementBy5</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
    
//   )
//   }
// }

// const mapStateToProps = state =>{
//   return {
//     counter : state.counter
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     incrementBy2 : () => dispatch({type : 'incrementBy2'}),
//     decrementBy2 : () => dispatch({type : 'decrementBy2'})
//   }
// }

// export default connect(mapStateToProps , mapDispatchToProps)(counter)