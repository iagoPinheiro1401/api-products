import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    product: { type: String, required: true, maxlength: 100 },
    price: { type: Number, required: true, maxlength: 400 },
    whatsapp: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true,  maxlength: 1000 },
    date : { type : Date , default : Date.now, required: true }
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)