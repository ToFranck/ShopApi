import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


// https://fakestoreapi.com/docs

function App() {
  
  const [products, setProducts] = useState([])
  const [users , setUsers] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  
    .then(res => res.json())
    .then(json => setProducts(json))
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    
    .then(res => res.json())
    .then(json => setUsers(json))
  }, [])






  return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              {/* <p>{product.description}</p> */}
              {/* <img src={product.image} alt={product.title} style={
                {width: '200px'}
              }/> */}
            </li>
          ))}
        </ul>

        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
        
        



    </div>
  );
}

export default App;
