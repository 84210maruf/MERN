// import React, { useState } from 'react'

// function Dashboard() {

//     const [products, setProducts] = useState([]);
//     const [formData, setFormData] = useState({ title: '', price: '', discount: '', description: '', category: '', subCategory: '', color: '', productId: '' });
//     const [editIndex, setEditIndex] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (editIndex !== null) {
//             const updatedProducts = products.map((product, index) => (index === editIndex ? formData : product));
//             setProducts(updatedProducts);
//             setEditIndex(null);
//         } else {
//             setProducts([...products, formData]);
//         }
//         setFormData({ title: '', price: '', discount: '', description: '', category: '', subCategory: '', color: '', productId: '' });
//     };

//     const handleEdit = (index) => {
//         setFormData(products[index]);
//         setEditIndex(index);
//     };

//     const handleDelete = (index) => {
//         const updatedProducts = products.filter((_, i) => i !== index);
//         setProducts(updatedProducts);
//     };

//     return (
//         <div id='top' className="container mx-auto p-5">
//             <h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1>

//             <h2 className="text-xl font-semibold my-2 text-sky-500">{editIndex !== null ? 'Edit Product' : 'Add New Product'}</h2>

//             <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Title:</p>
//                     <input
//                         type="text"
//                         name="title"
//                         placeholder="Product title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         className="p-2 border text-sm rounded w-full"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>productId:</p>
//                     <input
//                         type="text"
//                         name="productId"
//                         placeholder="productId"
//                         value={formData.productId}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Category:</p>
//                     <input
//                         type="text"
//                         name="category"
//                         placeholder="Category as men, women"
//                         value={formData.category}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Sub-ategory:</p>
//                     <input
//                         type="text"
//                         name="subCategory"
//                         placeholder="subCategory as shirt, pant"
//                         value={formData.subCategory}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Price:</p>
//                     <input
//                         type="text"
//                         name="price"
//                         placeholder="price"
//                         value={formData.price}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Discount:</p>
//                     <input
//                         type="text"
//                         name="discount"
//                         placeholder="discount"
//                         value={formData.discount}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <div className='flex gap-2'>
//                     <p className='btn btn-sm font-bold h-auto w-28'>Color:</p>
//                     <input
//                         type="text"
//                         name="color"
//                         placeholder="color hex"
//                         value={formData.color}
//                         onChange={handleChange}
//                         className="p-2 border rounded w-full text-sm"
//                         required
//                     />
//                 </div>
//                 <textarea
//                     name="description"
//                     placeholder="Product Description hare.."
//                     value={formData.description}
//                     onChange={handleChange}
//                     className="p-2 border rounded w-full mb-2"
//                     required
//                 ></textarea>
//                 <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded">
//                     {editIndex !== null ? 'Update Product' : 'Add Product'}
//                 </button>
//             </form>

//             <h2 className="text-xl font-semibold">Products</h2>
//             <table className="min-w-full border-collapse border border-gray-200 mt-3">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-2">ID</th>
//                         <th className="border border-gray-300 p-2">productId</th>
//                         <th className="border border-gray-300 p-2">Title</th>
//                         <th className="border border-gray-300 p-2">Category</th>
//                         <th className="border border-gray-300 p-2">Sub-Category</th>
//                         <th className="border border-gray-300 p-2">Price</th>
//                         <th className="border border-gray-300 p-2">Discount</th>
//                         <th className="border border-gray-300 p-2">Color</th>
//                         <th className="border border-gray-300 p-2">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product, index) => (
//                         <tr key={index} className="bg-white border-b">
//                             <td className="border border-gray-300 p-2">{index}</td>
//                             <td className="border border-gray-300 p-2">{product.productId}</td>
//                             <td className="border border-gray-300 p-2">{product.title}</td>
//                             <td className="border border-gray-300 p-2">{product.category}</td>
//                             <td className="border border-gray-300 p-2">{product.subCategory}</td>
//                             <td className="border border-gray-300 p-2">Tk {product.price}</td>
//                             <td className="border border-gray-300 p-2">Tk {product.discount}</td>
//                             <td className="border border-gray-300 p-2">{product.color}</td>
//                             <td className="border border-gray-300 p-2 flex flex-wrap justify-around">
//                                 <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded">
//                                     <a href="#top">Edit</a>
//                                 </button>
//                                 <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>

//     );
// };

// export default Dashboard

import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        title: '', price: '', discount: '', description: '', category: '', subCategory: '', color: [], size: [], image: [], productId: '', session: '', brand: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        // Fetch products from the server on component mount
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle dynamic array input for size, color, and image
    const handleArrayChange = (name, index, value) => {
        const newArray = [...formData[name]];
        newArray[index] = value;
        setFormData({ ...formData, [name]: newArray });
    };

    const handleAddField = (name) => {
        setFormData({ ...formData, [name]: [...formData[name], ''] });
    };

    const handleRemoveField = (name, index) => {
        const newArray = formData[name].filter((_, i) => i !== index);
        setFormData({ ...formData, [name]: newArray });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            // Update product
            await updateProduct(products[editIndex]._id, formData);
        } else {
            // Add product
            await createProduct(formData);
        }
        setFormData({
            title: '', price: '', discount: '', description: '', category: '', subCategory: '',
            color: [], size: [], image: [], productId: '', session: '', brand: ''
        });
        setEditIndex(null);
        fetchProducts();
    };

    const createProduct = async (product) => {
        try {
            await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    const updateProduct = async (id, updatedProduct) => {
        try {
            await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedProduct),
            });
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleEdit = (index) => {
        setFormData(products[index]);
        setEditIndex(index);
    };

    const handleDelete = async (index) => {
        const productId = products[index]._id;
        try {
            await fetch(`/api/products/${productId}`, { method: 'DELETE' });
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div id='top' className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1>
            <h2 className="text-xl font-semibold my-2 text-sky-500">{editIndex !== null ? 'Edit Product' : 'Add New Product'}</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>ProductId:</p>
                    <input
                        type="text"
                        name="productId"
                        placeholder="Product ID"
                        value={formData.productId}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Title:</p>
                    <input
                        type="text"
                        name="title"
                        placeholder="Product title"
                        value={formData.title}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>session:</p>
                    <input
                        type="text"
                        name="session"
                        placeholder="Product session"
                        value={formData.session}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>category:</p>
                    <input
                        type="text"
                        name="category"
                        placeholder="Product category"
                        value={formData.category}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>subCategory:</p>
                    <input
                        type="text"
                        name="subCategory"
                        placeholder="Product subCategory"
                        value={formData.subCategory}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                {/* <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>size:</p>
                    <input
                        type="text"
                        name="size"
                        placeholder="Product size"
                        value={formData.size}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div> */}
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>description:</p>
                    <input
                        type="text"
                        name="description"
                        placeholder="Product description"
                        value={formData.description}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                {/* <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>image:</p>
                    <input
                        type="text"
                        name="image"
                        placeholder="Product image"
                        value={formData.image}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div> */}
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>discount:</p>
                    <input
                        type="text"
                        name="discount"
                        placeholder="Product discount"
                        value={formData.discount}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>price:</p>
                    <input
                        type="text"
                        name="price"
                        placeholder="Product price"
                        value={formData.price}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>
                {/* <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>color:</p>
                    <input
                        type="text"
                        name="color"
                        placeholder="Product color"
                        value={formData.color}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div> */}
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>brand:</p>
                    <input
                        type="text"
                        name="brand"
                        placeholder="Product brand"
                        value={formData.brand}
                        onChange={handleChange}
                        className="p-2 border text-sm rounded w-full"
                        required
                    />
                </div>

                {/* Size Array Field */}
                <div>
                    <p className='btn btn-sm font-bold h-auto w-28 mr-3'>size:</p>
                    {formData.size.map((size, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={size}
                                onChange={(e) => handleArrayChange("size", index, e.target.value)}
                                className="p-2 border text-sm rounded w-full"
                                required
                            />
                            <button type="button" className='text-warning' onClick={() => handleRemoveField("size", index)}>close</button>
                        </div>
                    ))}
                    <button type="button" className='btn btn-info btn-sm font-bold h-auto w-28 mr-3' onClick={() => handleAddField("size")}>⇉ Add Size</button>
                </div>

                {/* Color Array Field */}
                <div>
                <p className='btn btn-sm font-bold h-auto w-28 mr-3'>color:</p>
                    {formData.color.map((color, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={color}
                                onChange={(e) => handleArrayChange("color", index, e.target.value)}
                                className="p-2 border text-sm rounded w-full"
                                required
                            />
                            <button type="button" className='text-warning' onClick={() => handleRemoveField("color", index)}>close</button>
                        </div>
                    ))}
                    <button type="button" className='btn btn-info btn-sm font-bold h-auto w-28 mr-3' onClick={() => handleAddField("color")}>⇉ Add Color</button>
                </div>

                {/* Image Array Field */}
                <div>
                <p className='btn btn-sm font-bold h-auto w-28 mr-3'>image:</p>
                    {formData.image.map((image, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => handleArrayChange("image", index, e.target.value)}
                                className="p-2 border text-sm rounded w-full"
                                required
                            />
                            <button type="button" className='text-warning' onClick={() => handleRemoveField("image", index)}>close</button>
                        </div>
                    ))}
                    <button type="button" className='btn btn-info btn-sm font-bold h-auto w-28 mr-3' onClick={() => handleAddField("image")}>⇉ Add Image</button>
                </div>

                <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded">
                    {editIndex !== null ? 'Update Product' : 'Add Product'}
                </button>
            </form>

            <h2 className="text-xl font-semibold">Products</h2>
            <table className="min-w-full border-collapse border border-gray-200 mt-3">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2"><small>Unique</small>_ID</th>
                        <th className="border border-gray-300 p-2">ProductI<small>(uniq)</small></th>
                        <th className="border border-gray-300 p-2">Title</th>
                        <th className="border border-gray-300 p-2">Category</th>
                        <th className="border border-gray-300 p-2">Sub-Category</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Discount</th>
                        <th className="border border-gray-300 p-2">Color</th>
                        <th className="border border-gray-300 p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="bg-white border-b">
                            <td className="border border-gray-300 p-2">{product._id}</td>
                            <td className="border border-gray-300 p-2">{product.productId}</td>
                            <td className="border border-gray-300 p-2">{product.title}</td>
                            <td className="border border-gray-300 p-2">{product.category}</td>
                            <td className="border border-gray-300 p-2">{product.subCategory}</td>
                            <td className="border border-gray-300 p-2">Tk {product.price}</td>
                            <td className="border border-gray-300 p-2">Tk {product.discount}</td>
                            <td className="border border-gray-300 p-2">{product.color.join(', ')}</td>
                            <td className="border border-gray-300 p-2 flex flex-wrap justify-around">
                                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                                    <a href='#top'>Edit</a>
                                </button>
                                <button onClick={() => handleDelete(index)} className="bg-red-500 text-white px-2 py-1 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;


