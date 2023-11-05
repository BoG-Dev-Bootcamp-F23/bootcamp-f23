import Dog from "../models/Dog";
import connectDB from "../index";


export default async function readDog(id) {

    try {

        await connectDB();
        const { identifier } = id;
        return await Dog.findById(identifier);

    } catch (e) {
        console.log(e);
        throw new Error("Unable to read dog. Invalid data or database issue.");
    }
}