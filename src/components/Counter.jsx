import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "../redux/features/Counter/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="w-2/3 flex gap-5 mx-auto py-28 space-y-6">
      <button
        onClick={() => dispatch(incrementByValue(5))}
        className="bg-sky-700 px-3 py-2 rounded-lg"
      >
        Increment By 5
      </button>
      <button
        onClick={() => dispatch(increment())}
        className="bg-sky-400 px-3 py-2 rounded-lg"
      >
        Increment
      </button>
      <div>
        <h1>{count}</h1>
      </div>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-rose-400 px-3 py-2 rounded-lg"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
