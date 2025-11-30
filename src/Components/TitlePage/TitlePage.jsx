import React from 'react'

function TitlePage({title, text}) {
  return (
    <div>
        <h2 className='mb-2 text-2xl md:text-27 font-Noto-Medium font-medium dark:text-zinc-100'>{title}</h2>
        <h6 className='text-sm mb-6 dark:text-zinc-100'>{text}</h6>
    </div>
  )
}

export default TitlePage