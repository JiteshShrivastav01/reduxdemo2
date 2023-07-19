import classes from './Counter.module.css';
import {useSelector , useDispatch} from 'react-redux'

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  const IncrementBy5Handler = () =>{
    dispatch({type : 'incrementBy5'})
  }

  const DecrementBy5Handler = () =>{
    dispatch({type : 'decrementBy5'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.action}>
        <button onClick={IncrementBy5Handler}>IncrementBy5</button>
        <button onClick={DecrementBy5Handler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
    
  );
};

export default Counter;
