import { makeStyles, Theme } from '@material-ui/core'
import React, { FC } from 'react'
import { Entity as EntityInterface } from '../../interface'
import { Directory as DirectoryInterface, Item as ItemInterface, SubItem as SubItemInterface } from '../../interface'
import { Directory } from './Directory'
import { Item } from './Item'
import { SubItem } from './SubItem'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../store/store'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%'
  },
  label: {
    '&:hover': {
      background: theme.palette.action.hover,
      cursor: 'pointer',
      userSelect: 'none'
    }
  },
  selected: {
    backgroundColor: theme.palette.action.selected
  },
  children: {}
}))

const getRenderer = (entity: EntityInterface) => {
  if (entity.type === 'directory') {
    const directory = entity as DirectoryInterface
    return <Directory item={directory} />
  }
  if (entity.type === 'item') {
    const item = entity as ItemInterface
    return <Item item={item} />
  }
  if (entity.type === 'subItem') {
    const subItem = entity as SubItemInterface
    return <SubItem item={subItem} />
  }
  return null
}

interface Props {
  item: EntityInterface
  paddingLeft?: number
}

export const Entity: FC<Props> = observer(({ item, paddingLeft = 8 }) => {
  const classes = useStyles()

  const store = useStore()

  const handleSelect = () => {
    store.selectEntity(item)
  }

  const handleToggle = () => {
    store.toggleEntity(item)
  }

  const isChildrenVisible = store.isEntityOpened(item) && item.children

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.label, {
          [classes.selected]: store.isEntitySelected(item)
        })}
        style={{ paddingLeft }}
        onDoubleClick={handleToggle}
        onClick={handleSelect}>
        {getRenderer(item)}
      </div>
      {isChildrenVisible && (
        <div className={classes.children}>
          {item.children!.map(item => (
            <Entity key={item.id} item={item} paddingLeft={paddingLeft + 16} />
          ))}
        </div>
      )}
    </div>
  )
})
