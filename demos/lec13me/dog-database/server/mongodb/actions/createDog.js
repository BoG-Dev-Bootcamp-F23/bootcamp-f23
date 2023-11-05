import Dog from "../models/Dog";
import connectDB from "../index";


export default async function createDog(data) {

    try {
        await connectDB();
        const dog = new Dog(data);
        await dog.save();

    } catch (e) {
        console.log(e);
        throw new Error("Unable to create dog. Invalid data or database issue.");
    }
}