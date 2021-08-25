import { Entity, Item } from '../interface'
import { createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'
import { initializeEntities } from '../utils/initializeEntities'
import { mock } from '../mock'

export class Store {
  private _entitiesSelectedState: Map<Entity, boolean> = new Map()
  private isMultiselect: boolean = false

  private _entitiesOpenedState: Map<Entity, boolean> = new Map()

  private state: Map<'active', Item> = new Map()

  private _tree = initializeEntities(mock)

  public get tree() {
    return this._tree
  }

  public get activeItem() {
    return this.state.get('active')
  }

  constructor() {
    makeAutoObservable(this)
  }

  public isEntitySelected(entity: Entity) {
    return this._entitiesSelectedState.get(entity)
  }

  public selectEntity(entity: Entity) {
    if (!this.isMultiselect) {
      this._entitiesSelectedState.clear()
    }
    this._entitiesSelectedState.set(entity, true)
  }

  public isEntityOpened(entity: Entity) {
    return this._entitiesOpenedState.get(entity)
  }

  public toggleEntity(entity: Entity) {
    this._entitiesOpenedState.set(entity, !this._entitiesOpenedState.get(entity))
  }

  public setActive(item: Item) {
    this.state.set('active', item)
  }

  public changeItem(item: Item, payload: Partial<Item>) {
    Object.entries(payload).forEach(([key, value]) => {
      if (item.hasOwnProperty(key)) {
        // @ts-ignore
        item[key] = value
      }
    })
  }
}

export const store = new Store()

declare global {
  interface Window {
    store: Store
  }
}

window.store = store

const StoreContext = createContext(store)

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) throw new Error('Store not found')
  return store
}
