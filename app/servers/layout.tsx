import React from 'react'

const layout = async ({children}) => {
  return (
    <div className="grid grid-cols-20 "> 
      {children} {/*This is gonna receive an array of servers or friends */}
    </div>
  )
}

export default layout 
