import React from 'react'

export default function UpdateUser() {
    const updateUserData = () => {
        
    }
    const [updateState] = React.useState<() => void>(updateUserData)

    React.useEffect(() => {
        updateUserData()
    }, [updateState])
    
  return (
    <div>index</div>
  )
}
