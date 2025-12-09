import React from 'react'

function HomeBoxs({title, icon, upDown, amount, colorText, borderColors, colorBg}) {
  return (
    <div className={`flexCenter relative max-w-[274px] max-h-[140px] py-6 px-4 gap-3 border-2 rounded-md border-solid ${borderColors} ${colorBg} ${colorText}`}>
        <div>
         {icon}
        </div>
        <div className='flexCenter flex-col'>
          <h1 className='mb-2 text-4xl font-Noto-Medium font-medium '>{amount}</h1>
          <h6>Weekly new {title}</h6>
          <div className={`absolute top-1 right-1 border-2 rounded-lg py-1 px-1.75 border-solid ${borderColors}`}>
            {upDown}
          </div>
        </div>

    </div>
  )
}

export default HomeBoxs