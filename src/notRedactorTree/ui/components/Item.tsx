import React, { FC } from 'react'
import { Item as ItemInterface } from '../../interface'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import { StatusBadge } from './StatusBadge'
import { observer } from 'mobx-react-lite'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    paddingLeft: theme.spacing(2)
  }
}))

interface Props {
  item: ItemInterface
}

export const Item: FC<Props> = observer(({ item }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <StatusBadge status={item.status} />
      <Typography>{item.label}</Typography>
    </div>
  )
})
