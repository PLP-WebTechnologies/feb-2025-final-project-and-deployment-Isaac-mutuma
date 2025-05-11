export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: {
    heading?: string
    paragraphs: string[]
  }[]
  author: string
  date: string
  readTime: number
  category: string
  tags: string[]
  coverImage: string
}
