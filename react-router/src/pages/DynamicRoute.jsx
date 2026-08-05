import React from 'react'

import { useParams } from 'react-router-dom'

const DynamicRoute = () => {
    const param = useParams()
  return (
    <div>
        <h1>{param.id}dynamic routing</h1>
    </div>
  )
}

export default DynamicRoute