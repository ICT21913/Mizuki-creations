import React,{useState} from 'react'
import './AddProduct.css'
import upload_area from 'C:/Users/HP/Desktop/E-Commerce/admin/src/assets/upload_image.png'

const AddProduct = () => {

    const[image,setImage] = useState(false);
    const[productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"necklace",
        price:""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler =(e) =>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const Add_product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('productImage',image);

        await fetch('http://localhost:4000/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        })
        .then((resp) => resp.json())
        .then((data)=>{responseData=data})
        

        if(responseData.success)
        {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                    <input value={productDetails.price} onChange={changeHandler} type="text" name="price" placeholder="Type here" />
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="necklace">Necklace</option>
                    <option value="keytag">keytag</option>
                    <option value="earing">earring</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} className='addproduct-thumnail-img' alt=""/>
                </label>
                <input onChange={imageHandler} type="file" name="image" id='file-input' hidden />
                <button onClick={()=>{Add_product()}} className="addproduct-btn">ADD</button>
            </div>
        </div>

    </div>
  )
}

export default AddProduct