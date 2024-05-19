import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api/products';

export const CreateProducts = () => {
    const [description,setDescription]= useState ('')
    const [price,setPrice]= useState (0)
    const [stock,setStock]= useState (0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault(); // Corregido el error tipográfico
        await axios.post(endpoint, { description, price, stock });
        navigate('/');
    };
  return (
    <div>
        <h3>Create product</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <input
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    type='text'
                    className='form-control'                
                />
            </div> 
            <div className='mb-3'>
                <label className='form-label'>price</label>
                <input
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    type='number'
                    className='form-control'                
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Stock</label>
                <input
                    value={stock}
                    onChange={(e)=> setStock(e.target.value)}
                    type='number'
                    className='form-control'                
                />
            </div>
            <button type='submit'className='btn btn-primary'>Stock</button>          
        </form>
    </div>
    
  )
}

export default CreateProducts;