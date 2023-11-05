import Dog from "../models/Dog";
import connectDB from "../index";


export default async function updateDog(data) {

    try {
        await connectDB();
        const { identifier, age } = data
        await Dog.findByIdAndUpdate(identifier, {age : age});
    } catch (e) {
        console.log(e);
        throw new Error("Unable to update dog. Invalid data or database issue.");
    }
}