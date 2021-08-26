export interface MyObject {
  id: number
  type: 'directory' | 'item' | 'subItem'
  label: string
  parent?: Entity
  children?: Entity[]
}

export interface Directory extends MyObject {
  opened?: boolean
}

export interface Item extends MyObject {
  status?: Status
  opened?: boolean
  contentType: ContentType
}

export interface SubItem extends Item {
  value: string
}

export type Entity = Directory | Item | SubItem

export type Status = 'green' | 'red' | 'grey'

export type ContentType = 'emoji' | 'text'
