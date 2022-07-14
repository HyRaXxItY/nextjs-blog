import data from '../data'
export default function handler(req, res) {
    const { postId } = req.query
    const { Posts } = data
    if (postId) {
        const result = Posts.find(el => el.id == postId)
        return res.status(200).json(result)
    }
    return res.status(404).json({ error: "Post not found" })
}