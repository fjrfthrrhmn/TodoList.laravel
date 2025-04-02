import React from 'react'
import Typography from './typography'

const Title = ({name, description}: {name: string, description: string}) => {
  return (
    <div>
        <Typography variant='h3'>{name}</Typography>
        <Typography variant='p'>{description}</Typography>
    </div>
  )
}

export default Title