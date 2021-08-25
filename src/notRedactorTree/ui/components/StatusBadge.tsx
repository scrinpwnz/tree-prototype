import React, { FC } from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { Status } from '../../interface'

const colorMap: Record<Status, 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error'> = {
  green: 'primary',
  red: 'error',
  grey: 'disabled'
}

interface Props {
  status?: Status
}

export const StatusBadge: FC<Props> = ({ status }) => {
  if (!status) return null
  return <FiberManualRecordIcon color={colorMap[status]} />
}
