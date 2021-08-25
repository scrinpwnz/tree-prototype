import React, { FC } from 'react'
import { Entity as EntityInterface } from '../interface'
import { Entity } from './components/Entity'
import { Divider, makeStyles, Paper, Theme, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 320
  },
  header: {
    padding: theme.spacing(1, 2)
  },
  content: {}
}))

interface Props {
  data: EntityInterface[]
}

export const Tree: FC<Props> = ({ data }) => {
  const classes = useStyles()

  return (
    <Paper elevation={6} className={classes.root}>
      <div className={classes.header}>
        <Typography variant={'h6'}>Дерево объектов</Typography>
      </div>
      <Divider />
      <div className={classes.content}>
        {data.map(item => (
          <Entity key={item.id} item={item} />
        ))}
      </div>
    </Paper>
  )
}
