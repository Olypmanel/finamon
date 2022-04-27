 import React from 'react'
import Header from './Header'
import Body from './Body'
import data from './Data.json'
import Footer from './Footer'

 const App = () => {
 const items = data.map(item => (
    <Body 
               key={item.id}
                {...item}
       />
   ))
 return (
  <div className='header'>
 <Header />
  {items}
  <Footer />
  </div>
 )
}
export default App