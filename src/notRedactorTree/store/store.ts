import { Entity } from '../interface'
import { createContext, useContext } from 'react'
import { makeAutoObservable } from 'mobx'

export class Store {
  private _entitiesSelectedState: Map<Entity, boolean> = new Map()
  private isMultiselect: boolean = false

  private _entitiesOpenedState: Map<Entity, boolean> = new Map()

  constructor() {
    makeAutoObservable(this)
  }

  public isEntitySelected(entity: Entity) {
    return this._entitiesSelectedState.get(entity)
  }

  public selectEntity(entity: Entity) {
    if (!this.isMultiselect) {
      this._entitiesSelectedState = new Map()
    }
    this._entitiesSelectedState.set(entity, true)
  }

  public isEntityOpened(entity: Entity) {
    return this._entitiesOpenedState.get(entity)
  }

  public toggleEntity(entity: Entity) {
    this._entitiesOpenedState.set(entity, !this._entitiesOpenedState.get(entity))
  }
}

export const store = new Store()

const StoreContext = createContext(store)

export const useStore = () => {
  const store = useContext(StoreContext)
  if (!store) throw new Error('Store not found')
  return store
}
