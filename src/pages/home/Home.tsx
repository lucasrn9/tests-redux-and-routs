import { useDispatch,useSelector } from "react-redux";
import { rootState } from "../../redux/reducers";
import { Increment,Decrement } from "../../redux/actions/counter.actions";

const Home = ()=> {
    
    const dispatch = useDispatch()
    const counter = useSelector((state:rootState)=>state.counter)

    const increment = ()=>{
        dispatch(Increment())
    }

    const decrement = ()=>{
        dispatch(Decrement())
    }


    return (
        <div className="App">
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    )
}

export default Home