import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Card from './components/Card'
import UseEffectProduct from './pages/UseEffectProduct'
import NotesApp from './components/NotesApp'
import UserProvider from './Providers/UserProvider'
import FormsValidation from './components/FormsValidation'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProduct from './components/singleProduct'
import PrivateRoutes from './routing/PrivateRoutes'
import PublicRoutes from './routing/PublicRoutes'
import Login from './pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux/counterSlice'
import { addItem, clearCart, removeItem } from './redux/cartSlice'
import { fetchUsers } from './redux/userSlice'


function App() {
  //   const products = [
  //   {
  //     id: 1,
  //     name: "Wireless Headphones",
  //     price: 59.99,
  //     inStock: true,
  //     category: "Electronics",
  //     rating: 4.5
  //   },
  //   {
  //     id: 2,
  //     name: "Mechanical Keyboard",
  //     price: 89.99,
  //     inStock: false,
  //     category: "Computers",
  //     rating: 4.8
  //   },
  //   {
  //     id: 3,
  //     name: "Running Shoes",
  //     price: 74.50,
  //     inStock: true,
  //     category: "Sportswear",
  //     rating: 4.3
  //   },
  //   {
  //     id: 4,
  //     name: "Coffee Maker",
  //     price: 129.00,
  //     inStock: true,
  //     category: "Home Appliances",
  //     rating: 4.7
  //   },
  //   {
  //     id: 5,
  //     name: "Smartwatch",
  //     price: 199.99,
  //     inStock: false,
  //     category: "Electronics",
  //     rating: 4.6
  //   }
  // ]; 

  // const [count, setCount] = useState(0);

  // function incrementCountHandler(){
  //   if (count == 10) {
  //     setCount(count);
  //   } else {
  //     setCount(count + 1);
  //   } 
  // }

  // function decrementCountHandler(){
  //   if (count == 0) {
  //     setCount(count);
  //   } else {
  //     setCount(count - 1);
  //   }
  // }
  const counterSliceData = useSelector((state) => state.counter);
  // console.log(counterSliceData,"counterSliceData");

  const cartSliceData = useSelector((state) => state.cart);
  // console.log(cartSliceData, "cartSliceData");

  const { usersData, loading, error } = useSelector((state) => state.user);
  // console.log(usersData);  

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showFields, setShowFields] = useState(true);
  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  function userInfoChangeHandler(fieldName, value) {
    setUserInfo({ ...userInfo, [fieldName]: value });
  }
  function passwordShowHandler(fieldName) {
    console.log([fieldName], showPassword[fieldName])
    setShowPassword({ ...showPassword, [fieldName]: !(showPassword[fieldName]) })
  }
  function checkPasswordsAndSubmit() {
    console.log(userInfo["password"], userInfo["confirmPassword"]);
    if (userInfo.password !== userInfo.confirmPassword) {
      alert("Password Fields do not match");
    } else {
      alert("Form Submitted Successfully!");
    }
  }

  return (
    <div style={{ width: "100%" }}>

      {/* <Header />
      <Navbar />
      <div className="cards-container">
      {products.map((p) => {
        return (
          <div>
            <Card product={p}/>
          </div>
        )
      })}  
      </div> */}
      {/* <button onClick={incrementCountHandler}>+</button>
    <h3>{count}</h3>
    <button onClick={decrementCountHandler}>-</button>
    <br /><br />  */}
      {/* {showFields && 
      <form >
      <div>
      <label for='username'>Name</label>  
      <input type='text' id='username' value={userInfo.username} name='Name' onChange={(e) => {
        userInfoChangeHandler("username", e.target.value);
      }}/> 
      </div>
      <div>
      <label for='email'>Email</label>
      <input type='email' id='email' value={userInfo.email} name='Email' onChange={(e) => {
        userInfoChangeHandler("email", e.target.value);
      }}/> 
      </div>
      <div>
      <label for='password'>Password: </label>
      <input type={showPassword["password"] ? "text" : "password"} id='password' value={userInfo.password} name='Password' onChange={(e) => {
        userInfoChangeHandler("password", e.target.value);
      }}/> */}
      {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 2L22 22" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
      {/* <button type='button' onClick={(e) => {passwordShowHandler("password")}}>
      { 
        !showPassword["password"] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.05 18.05 0 0 1 4.51-5.02m2.41-1.42A10.07 10.07 0 0 1 12 4c7 0 11 8 11 8a18.05 18.05 0 0 1-1.26 1.62"></path>
        <path d="M10 12a2 2 0 1 0 4 0"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      }
      </button>
      </div>
      <div>
      <label>Confirm Password: </label>
      <input type={showPassword["confirmPassword"] ? "text" : "password"} value={userInfo.confirmPassword} onChange={(e) => {
        userInfoChangeHandler("confirmPassword", e.target.value);
      }}/>
      <button type='button' onClick={(e) => {passwordShowHandler("confirmPassword")}}>
      { 
        !showPassword["confirmPassword"] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="15" height="15">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.05 18.05 0 0 1 4.51-5.02m2.41-1.42A10.07 10.07 0 0 1 12 4c7 0 11 8 11 8a18.05 18.05 0 0 1-1.26 1.62"></path>
        <path d="M10 12a2 2 0 1 0 4 0"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
        </svg>
      }
      </button>
      </div>
      <div>
        <button type="submit" onClick={checkPasswordsAndSubmit}>SUBMIT</button>
      </div>
    </form>
    }
    
    <button onClick={() => setShowFields(!showFields) }>
      {showFields ? "Hide" : "Show"}
    </button> */}

      {/* <UseEffectProduct />
      <UserProvider>
        <NotesApp />
      </UserProvider> */}
      {/* <FormsValidation /> */}
      <Header />
      <div>
        <button onClick={() => { dispatch(increment()) }}>+</button>
        {/* <button onClick={()=>{dispatch(addItem())}}>Add</button> 
      <button onClick={()=>{dispatch(removeItem())}}>Remove</button> 
      <button onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>  */}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {
        // usersData?.users?.length ? (
          usersData && usersData.users.map(user => (
            <p key={user.id}>{user.firstName}</p>
          ))
        // ) : ""
      }
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/notes" element={<NotesApp />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/list-products/" element={<UseEffectProduct />} />
          <Route path="/list-product/:id" element={<SingleProduct />} />
          <Route path="/register" element={<FormsValidation />} />
          <Route path="/login" element={<Login />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App
// logged in allow wishlist 
// wishlist 
// cart