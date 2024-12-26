import { useState } from 'react'
import './App.css'
//Importing my containers 
import Header from './components/Header'
import Merch from './components/Merch'
import Music from './components/Music'
import About from './components/About'
import Events from './components/Events'
import Home from './components/Home'
import Data from './data.json'
import Cart from './components/Cart'
//Testing different methods to upload an image to gh-pages
// import image from './images/jasonCenter.jpg'


//import Images from 'src/images/jason-center.jpg/'
//Imoport from React Router
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

 function App() {
  const [products, setProdcuts] = useState(Data)
  const [basket, setBasket] = useState(0)
//  Testing: usingg class to create the shoping cart 
//  class item{
//     //Defining the properties with constructor
//     constructor(productName, quantity, price){
//       this.productName = productName;
//       this.quantity = quantity;
//       this.price = price;
//     }
//     //Definging the Methods
//     getTotalPrice(){
//       return this.quantity * this.price
//     }
//   }
//   class basket{
//     constructor(){
//       this.items = []
//     }
//     addItem(item){
//       this.items.push(item)
//     }
//     getTotal(){
//       let total = 0
      
//     }

//   }
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/music' element={<Music />}/>
        <Route path='/merch' element={<Merch products = {products} basket={basket} setBasket = {setBasket}/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/events' element={<Events />}/>
        
      </Routes>
      
      
    </>
  )
}

export default App
