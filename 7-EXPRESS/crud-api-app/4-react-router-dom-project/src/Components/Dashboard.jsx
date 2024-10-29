import React, { useState } from 'react'

function Dashboard() {

    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({ title: '', price: '', discount: '', description: '', category: '', subCategory: '', color: '', SKU: '' });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedProducts = products.map((product, index) => (index === editIndex ? formData : product));
            setProducts(updatedProducts);
            setEditIndex(null);
        } else {
            setProducts([...products, formData]);
        }
        setFormData({ title: '', price: '', discount: '', description: '', category: '', subCategory: '', color: '', SKU: '' });
    };

    const handleEdit = (index) => {
        setFormData(products[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedProducts = products.filter((_, i) => i !== index);
        setProducts(updatedProducts);
    };

    return (
        <div id='top' className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1>

            <h2 className="text-xl font-semibold my-2 text-sky-500">{editIndex !== null ? 'Edit Product' : 'Add New Product'}</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
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
                    <p className='btn btn-sm font-bold h-auto w-28'>SKU:</p>
                    <input
                        type="text"
                        name="SKU"
                        placeholder="SKU"
                        value={formData.SKU}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Category:</p>
                    <input
                        type="text"
                        name="category"
                        placeholder="Category as men, women"
                        value={formData.category}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Sub-ategory:</p>
                    <input
                        type="text"
                        name="subCategory"
                        placeholder="subCategory as shirt, pant"
                        value={formData.subCategory}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Price:</p>
                    <input
                        type="text"
                        name="price"
                        placeholder="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Discount:</p>
                    <input
                        type="text"
                        name="discount"
                        placeholder="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <p className='btn btn-sm font-bold h-auto w-28'>Color:</p>
                    <input
                        type="text"
                        name="color"
                        placeholder="color hex"
                        value={formData.color}
                        onChange={handleChange}
                        className="p-2 border rounded w-full text-sm"
                        required
                    />
                </div>
                <textarea
                    name="description"
                    placeholder="Product Description hare.."
                    value={formData.description}
                    onChange={handleChange}
                    className="p-2 border rounded w-full mb-2"
                    required
                ></textarea>
                <button type="submit" className="bg-sky-500 text-white px-4 py-2 rounded">
                    {editIndex !== null ? 'Update Product' : 'Add Product'}
                </button>
            </form>

            <h2 className="text-xl font-semibold">Products</h2>
            <table className="min-w-full border-collapse border border-gray-200 mt-3">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">SKU</th>
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
                            <td className="border border-gray-300 p-2">{index}</td>
                            <td className="border border-gray-300 p-2">{product.SKU}</td>
                            <td className="border border-gray-300 p-2">{product.title}</td>
                            <td className="border border-gray-300 p-2">{product.category}</td>
                            <td className="border border-gray-300 p-2">{product.subCategory}</td>
                            <td className="border border-gray-300 p-2">Tk {product.price}</td>
                            <td className="border border-gray-300 p-2">Tk {product.discount}</td>
                            <td className="border border-gray-300 p-2">{product.color}</td>
                            <td className="border border-gray-300 p-2 flex flex-wrap justify-around">
                                <button onClick={() => handleEdit(index)} className="bg-yellow-500 text-white px-2 py-1 rounded">
                                    <a href="#top">Edit</a>
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
};

export default Dashboard
