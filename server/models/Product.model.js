const { Schema, model } = require("mongoose")


const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
            trim: true,
        },
        price: {
            type: Number
        },
        size: {
            type: String,
            enum: ['SMALL', 'MEDIUM', 'LARGE'],
        },
        type: [{
            type: String,
            enum: ['chocolat', 'strawberry', 'biscuit', 'cheesecake', 'LEMON CAKE'],
        }],

        description: {
            type: String,
            maxlength: 500,
            trim: true
        },
        images: [String],
    },
    {
        timestamps: true,
    }
);

const Product = model("Product", productSchema)

module.exports = Product