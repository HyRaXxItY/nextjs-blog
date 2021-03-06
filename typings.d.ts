export interface AuthorType {
    name: string
    img: string
    designation: string
}

export interface Data {
    id: number
    title: string
    subtitle: string
    category: string
    img: string
    description: string
    published: string
    author: AuthorType
}

export interface FallbackType {
    '/api/posts': Data
}

export interface ParamsType {
    postId: string
}