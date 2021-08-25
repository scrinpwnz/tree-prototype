import React, { FC } from 'react'
import { Item } from '../../interface'
import { emojiContent } from '../../mock'

interface Props {
  item: Item
}

export const EmojiContent: FC<Props> = ({item}) => {

  const emoji = emojiContent[item.id as keyof typeof emojiContent]?.value
  const fontSize = !!emoji ? 124 : 24

  return (
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize }}>
      <span>{emoji ?? 'Емоджи не найден 🙄'}</span>
    </div>
  )
}
