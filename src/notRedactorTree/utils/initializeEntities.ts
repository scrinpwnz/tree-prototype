import { Entity } from '../interface'

export const initializeEntities = (data: Entity[], parent?: Entity): Entity[] => {
  return data.map(item => ({
    ...item,
    ...(item.children && { children: initializeEntities(item.children, item) }),
    ...(parent && { parent })
  }))
}
