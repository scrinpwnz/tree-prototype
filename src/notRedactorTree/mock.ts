import { Entity } from './interface'

export const mock: Entity[] = [
  {
    id: 1,
    type: 'directory',
    label: 'Директория 1',
    children: [
      {
        id: 2,
        type: 'directory',
        label: 'Саб-Директория 1',
        children: [
          {
            id: 3,
            type: 'item',
            label: 'Итем 1',
            status: 'green'
          },
          {
            id: 4,
            type: 'item',
            label: 'Итем 2',
            status: 'red'
          },
          {
            id: 5,
            type: 'item',
            label: 'Итем 3',
            status: 'grey',
            children: [
              {
                id: 6,
                type: 'subItem',
                label: 'Саб-итем 1',
                status: 'red',
                value: '0,6A'
              },
              {
                id: 7,
                type: 'subItem',
                label: 'Саб-итем 2',
                status: 'red',
                value: '0,3A'
              },
              {
                id: 8,
                type: 'subItem',
                label: 'Саб-итем 3',
                status: 'green',
                value: '0,7A'
              }
            ]
          }
        ]
      }
    ]
  }
]
