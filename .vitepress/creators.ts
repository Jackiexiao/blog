export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '肖鉴津',
    avatar: '',
    username: 'jackiexiao',
    title: '博客作者',
    desc: '全栈开发者，渴望理解世界的运作模式',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/jackiexiao' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/realjackiexiao' },
    ],
    nameAliases: ['jackiexiao', '肖鉴津'],
    emailAliases: ['jackie.xiao@outlook.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
