export default function handler(req, res) {
    const id = req.query.id;

    if (id < 1 ) {
        return res.status(400).json({error : "invalid"});
    }

    res.status(200).json({ id })
  }