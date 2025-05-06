
import './App.css'
import Welcome from './component/Welcome'
import Employee from './component/Employee'
import Productcat from './component/ProductCat'
import Productlist from './component/Productlist'


function App() {
  const Categires=["Electronic","Clothing","Book","Home & Kitchen"]
  const productDetails= {productName:"laptop",Price:40000,isavailable:false}
  let array=[10,20,30,40,50]

  return (
    <>
    <div className="own">
      <h1>WELCOME MY FISRT PROGRAM</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, harum!</p>
      <h2>APP COMPONENTS</h2>
      <Welcome />
      {/*<Employee  name="John"  city="NewYork"/>
      <Employee name="David"  city="America"/>*/}
      <Productcat  categiresArr={ Categires} productDetails={productDetails} array={array} />
      <Productlist/>

    
      </div>
      
    </>
  )
}

export default App
