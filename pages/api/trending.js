// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data'

export default function handler(req, res) {
    let { Trending } = data;
    if (Trending) {
        return res.status(200).json(Trending);
    }
    return res.status(404).json({ error: "data not found" });
}