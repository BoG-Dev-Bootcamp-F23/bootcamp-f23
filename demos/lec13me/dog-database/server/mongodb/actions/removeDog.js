import Dog from "../models/Dog";
import connectDB from "../index";


export default async function deleteDog(id) {

    try {
        await connectDB();
        const { identifier } = id;
        await Dog.findByIdAndDelete(identifier);
    } catch (e) {
        console.log(e);
        throw new Error("Unable to delete dog. Invalid data or database issue.");
    }
}