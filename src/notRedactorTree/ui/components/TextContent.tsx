import React, { FC } from 'react'
import { Item, Status } from '../../interface'
import { textContent } from '../../mock'
import { Button, Typography } from '@material-ui/core'
import { useStore } from '../../store/store'

interface Props {
  item: Item
}

export const TextContent: FC<Props> = ({item}) => {

  const {title, text} = textContent[item.id as keyof typeof textContent] ?? {}

  const store = useStore()

  const handleSetColor = () => {
    store.changeItem(item, {
      status: ['green', 'red', 'grey'][Math.floor(Math.random()*3)] as Status
    })
  }

  return (
    <div style={{padding: 16, display: 'flex', gridGap: 16, flexDirection: 'column' }}>
      <Typography variant={'h4'}>{title}</Typography>
      <Typography>{text}</Typography>
      <Button variant={'contained'} onClick={handleSetColor} disableRipple>
        Поменять цвет баджа
      </Button>
    </div>
  )
}
