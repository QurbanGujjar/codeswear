import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";
const handler = async(req, res) => {
    if (req.method == 'PUT') {
        // console.log(req.body)
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])

        }
        res.status(200).json({ success: "Update SuccessFully" })
    } else {
        res.status(400).json({ error: "This Method is not allowed" })
    }
    // let products = await Product.find()
    // res.status(200).json({ products })
}
export default connectDB(handler)