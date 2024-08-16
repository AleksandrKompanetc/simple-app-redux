import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction } from './store/customerReducer';
import { removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

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
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div style={{ fontSize: '3rem' }}>{cash}</div>
      <div style={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>ADD</button>
        <button onClick={() => getCash(Number(prompt()))}>GET</button>
        <button onClick={() => addCustomer(prompt())}>ADD CLIENT</button>
        <button onClick={() => dispatch(fetchCustomers())}>GET CLIENT FROM BASE</button>
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
