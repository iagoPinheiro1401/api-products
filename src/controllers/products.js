import { Router } from "express"

import { listerProduct, createProduct, deleteProduct, updateProduct } from "../services/products"

const router = Router()

router.get('/', async (req, res) => {
    const noteProduct = await listerProduct()
    res.send(noteProduct)
})

router.post('/', async (req, res) => {
    try {
        const product = await createProduct(req.body)
        res.status(201).send(product)
    } catch (err) {
        res.status(400).send()
    }
})

router.delete('/:productId', async (req, res) => {
    await deleteProduct(req.params.productId)
    res.send('delete')
})

router.put('/:productId', async (req, res) => {
    await updateProduct(req.params.productId, req.body)
    res.send('update')
})

export default router