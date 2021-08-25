import React, { FC } from 'react'
import { Entity } from './components/Entity'
import { Divider, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import { useStore } from '../store/store'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 320
  },
  header: {
    padding: theme.spacing(1, 2)
  },
  content: {}
}))

export const Tree: FC = observer(() => {
  const classes = useStyles()

  const store = useStore()

  return (
    <Paper elevation={6} className={classes.root}>
      <div className={classes.header}>
        <Typography variant={'h6'}>Дерево объектов</Typography>
      </div>
      <Divider />
      <div className={classes.content}>
        {store.tree.map(item => (
          <Entity key={item.id} item={item} />
        ))}
      </div>
    </Paper>
  )
})
