// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data';


export default function handler(req, res) {
    const { Category } = data;
    if (Category) {
        return res.status(200).json(Category);
    }
    return res.status(404).json({ error: "data not found" });

}