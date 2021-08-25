import React, { FC } from 'react'
import { Directory as DirectoryInterface } from '../../interface'
import { makeStyles, Theme, Typography } from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import { useStore } from '../../store/store'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5)
  }
}))

interface Props {
  item: DirectoryInterface
}

export const Directory: FC<Props> = ({ item }) => {
  const classes = useStyles()

  const store = useStore()

  return (
    <div className={classes.root}>
      {store.isEntityOpened(item) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      <FolderIcon />
      <Typography>{item.label}</Typography>
    </div>
  )
}
