import React, { useEffect, useState } from 'react'

export const useTheme = () => {
 const [dark, setDark] = useState(
        localStorage.getItem('theme') === 'dark'
    )

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [dark])

    const darkHandler = () =>  setDark(!dark)

    return {dark, darkHandler}
    
}
