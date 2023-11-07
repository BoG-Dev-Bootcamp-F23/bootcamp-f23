import { users } from "../_data";


export default function handler(req, res) {
    if (req.method === "DELETE") {
        const id = req.query;

        const newUsers = users.filter((x) => {
            return x.id !== id;
        })

        while (users.length !== 0) {
            users.pop();
        }

        newUsers.forEach((x) => {
            users.push(users)
        })
        res.status(200).json({status : "del"})
    }
}