import React from 'react'

type Prop = {
  text: string
}

const Component: React.FC<Prop> = ({ text }) => {
  return (
    <div className="tile title">
      <span>{text}</span>
    </div>
  )
}

export default Component
