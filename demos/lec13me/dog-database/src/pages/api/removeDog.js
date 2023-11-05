import deleteDog from "../../../server/mongodb/actions/deleteDog"

export default async function handler(req, res) {
    if (req.method === "DELETE") {
        try {
            await deleteDog(req.query);
        } catch (e) {
            return res.status(500).send("Unable to delete dog");
        }
        return res.status(200).send("Successfully delete dog");

    }
  }
  