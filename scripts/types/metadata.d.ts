export interface ArticleTree {
  index: string
  text: string
  link?: string
  lastUpdated?: number
  collapsible?: true
  collapsed?: true
  items?: ArticleTree[]
  category?: string
}

export interface Doc {
  relativePath: string
  hashes: {
    sha256: {
      content: string
      contentDiff?: string
    }
  }
  ignoreWhenGenerateTagsFromGPT?: boolean
}

export interface Tag {
  name: string
  alias: string[]
  description: string
  appearedInDocs: string[]
  count: number
}

export interface DocsMetadata {
  docs: Doc[]
  tags: Tag[]
  sidebar: ArticleTree[]
}

export interface DocsTagsAlias {
  name: string
  alias: string[]
}
