import mongoose from "mongoose";

const dogSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: String,
        required: false //optional if false
    }
}
)

export default mongoose.models?.Dog || mongoose.model("Dog", dogSchema)