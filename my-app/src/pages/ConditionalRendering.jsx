import React, { useState } from 'react'

export default function ConditionalRendering() {
    const [vote, setVote] = useState(true)

    if (vote) {
        return (
            <div>
                <h1>hello from if</h1>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>hello from else</h1>
            </div>
        )
    }
}
