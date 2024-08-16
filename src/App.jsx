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

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch({ type: 'ADD_CUSTOMER', payload: customer})
  }

  const removeCustomer = (customer) => {
    dispatch({ type: 'REMOVE_CUSTOMERS', payload: customer.id})
  }

  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD</button>
        <button onClick={() => getCash(Number(prompt()))}>GET</button>
        <button onClick={() => addCustomer(prompt())}>ADD CLIENT</button>
        <button onClick={() => removeCustomer()}>DELETE CLIENT</button>
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => 
            <div onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid black', padding: '10px 20px', marginTop: 5}}>{customer.name}</div>
          )}
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
