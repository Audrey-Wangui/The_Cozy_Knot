import axios from 'axios'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Loader from './Loader'
import card from '../css/Makepayment.css'
import Footer from './Footer'
import Backbutton from '../css/Backbutton.css'



const Makepayment = () => {
    // Destructure the details passed from the get products component
    // The useLocation hook allows us to destructure the properties passed from the previous component
    
    const {product} = useLocation().state || {}

      // Declaire the navigate hook
  const navigate = useNavigate()
    // console.log("The details of the products are...", product)
    
     // Below we specify the image base url
  const img_url = "https://audreywangui.alwaysdata.net/static/images/"

    //Initialize hooks to manage the state of your application
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    
    // Create a function that wiil handle the submit function
    const handlesubmit = async (e) =>{
        // Prevent the site from reloading
        e.preventDefault()
        // Update the loading hook
        setLoading(true)

        try{
            // Create a form data object
            const formdata = new FormData()

            // Append the data to the form data
            formdata.append("phone", number)
            formdata.append("amount", product.product_cost)

            const response = await axios.post("https://audreywangui.alwaysdata.net/api/mpesa_payment", formdata)
            
            // Set loading back to default
            setLoading(false)

            // Update the success hook with a message
            setSuccess(response.data.message)
            

        }

        catch(error){
            // If there is an error, respond to the error
            setLoading(false)

            // Update the error hook with the error message
            setError(error.message)

        }
    }
    
  return (
    <div>
        {/* <button className="btn btn-outline-primary">Back to Product</button> */}
     
        

        <form onSubmit={handlesubmit}>

        {loading && <Loader />}

        <h3 className='text-success'> {success} </h3>
        <h4 className='text-danger'> {error} </h4>

        <button onClick={() => navigate("/")} className="Btn">
        <div className="sign">
          <svg viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
        <div className="text">Back</div>
      </button>

           
        <div className="pay_container">  
        <div className="pay">
          <p className='text-light'>Lipa na Mpesa</p>     
              <div>
              <div className="pay-img"><div className="img" />
              <img 
              src={img_url + product.product_photo} 
              alt="product name"
              className='product_img mt-3' />
              </div> 
              <div className="pay-title">{product.product_name}</div>
              <div className="pay-subtitle">
               {product.product_description.slice(0, 70)}... 
              <hr className="pay-divider" />
              <div className="pay-footer">
 
              <div className="pay-price"><span>KES</span>{product.product_cost}
              
              <input type="number"
                className='form-control'
                placeholder='Phone Number (245xxxxxxxxxxx)'
                required 
                value={number}
                onChange={(e) => setNumber(e.target.value)}/> <br /><br />

              </div> 

              <button className="payment-btn">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 512 512"
              width="20"
              height="20"
            >
              <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
              <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
              <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
            </svg>
            Make Payment
          </button>
            </div>
            </div>
            </div>
            </div>
            </div>
            

                </form>
                <Footer />
            </div>
            


  )
}

export default Makepayment;