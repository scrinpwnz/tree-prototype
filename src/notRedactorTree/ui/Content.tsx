import React, { FC } from 'react'
import { Divider, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import { EmojiContent } from './components/EmojiContent'
import { useStore } from '../store/store'
import { observer } from 'mobx-react-lite'
import { Item } from '../interface'
import { TextContent } from './components/TextContent'


const getRenderer = (item: Item) => {
  if (item.contentType === 'emoji') {
    return <EmojiContent item={item} />
  }
  if (item.contentType === 'text') {
    return <TextContent item={item} />
  }
  return null
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 640
  },
  header: {
    padding: theme.spacing(1, 2)
  },
  content: {}
}))

export const Content: FC = observer(() => {
  const classes = useStyles()

  const store = useStore()

  const activeItem = store.activeItem

  return (
    <Paper elevation={6} className={classes.root}>
      <div className={classes.header}>
        <Typography variant={'h6'}>Контент</Typography>
      </div>
      <Divider/>
      {activeItem && getRenderer(activeItem)}
    </Paper>
  )
})
