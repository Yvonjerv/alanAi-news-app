import React, { useEffect } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = "378a8356eb378322fdbd7fa68baa44ee2e956eca572e1d8b807a3e2338fdd0dc/stage";


function App() {
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command }) => {
                if (command === 'testCommand') {
                    alert('This code executed')
                }
            }
        })
    }, [])  gh


    return ( <div>
        <h1> Alain AI News Application </h1> </div>
    )
}
export default App