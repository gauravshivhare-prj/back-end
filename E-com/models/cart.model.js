const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        items: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                },
                quantity: Number,

            },
        ],
    },
    {
        timestamps: true,
    }
)

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;