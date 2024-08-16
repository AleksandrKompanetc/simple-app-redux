import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD</button>
        <button onClick={() => getCash(Number(prompt()))}>GET</button>
      </div>
      {customers.length > 0 ?
        <div>

        </div>  
        :
        <div style={{fontSize: '2rem'}}>
          No client!
        </div>
      }
    </div>
  );
}

export default App;
