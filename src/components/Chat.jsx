import React, { useState } from 'react'
import PrivateKeyFetcher from './privateKeyFetcher'

const Chat = () => {
    const [openaiApiKey, setOpenaiApiKey] = useState('')

    const handleFetchedData = (apiKey) => {
        setOpenaiApiKey(apiKey)
    }
  
    return (
    <div>Chat</div>
  )
}

export default Chat