import { RESPONSE_PROJECT } from '@/types/response'
import React from 'react'
import CardProject from './CardProject'

const ProjectsTrash = ({data}: {data: RESPONSE_PROJECT[]}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
        {data.length > 0 ? data.map((item) => <CardProject {...item}/>) : 'Tidak ada data ditemukan!'}
    </div>
  )
}

export default ProjectsTrash