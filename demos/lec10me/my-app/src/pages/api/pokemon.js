export default async function handler(req, res) {
    const id = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";


   

    if (id) {
        const response = await fetch(url + id)
        const data = await response.json();
        return res.status(200).json(data)

    } else {
        const response = await fetch(url + (Math.floor(Math.random() * 1000) + 1))
        const data = await response.json();
        return res.status(200).json(data)

    }
  }