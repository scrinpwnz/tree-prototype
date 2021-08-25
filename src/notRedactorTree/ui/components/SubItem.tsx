import React, { FC } from 'react'
import { SubItem as SubItemInterface } from '../../interface'
import { Box, makeStyles, Theme, Typography } from '@material-ui/core'
import { StatusBadge } from './StatusBadge'
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    marginLeft: -8
  },
  container: {
    display: 'flex',
    width: '100%',
    '&>div:last-child': {
      paddingRight: theme.spacing(2)
    }
  }
}))

interface Props {
  item: SubItemInterface
}

export const SubItem: FC<Props> = ({ item }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SubdirectoryArrowRightIcon />
      <StatusBadge status={item.status} />
      <div className={classes.container}>
        <Box flexGrow={1}>
          <Typography>{item.label}</Typography>
        </Box>
        <Box>
          <Typography>{item.value}</Typography>
        </Box>
      </div>
    </div>
  )
}
