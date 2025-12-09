import { FiPieChart } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { FiTwitch } from "react-icons/fi";



let colorBox = [
    {id:1, title: 'visitors', amount: '3,020' , icon: <FiPieChart size={33}/>, colorText:'text-emerald-500', colorBorder: 'border-emerald-100', colorBg: 'bg-emerald-100',  upDown:  <IoIosTrendingUp size={10}/>},
    {id:2, title: 'income', amount: '2,030' , icon: <LuShoppingBag size={33}/>, colorText:'text-red-500', colorBorder: 'border-red-100', colorBg: 'bg-red-100',  upDown:  <IoIosTrendingUp size={10}/>},
    {id:3, title: 'orders', amount: '8,630' , icon: <FiShoppingCart  size={33}/>, colorText:'text-blue-600', colorBorder: 'border-blue-100', colorBg: 'bg-blue-100',  upDown:  <IoIosTrendingUp size={10}/>},
    {id:4, title: 'reviews', amount: '6,990' , icon: <FiTwitch  size={33}/>, colorText:'text-amber-500', colorBorder: 'border-amber-100', colorBg: 'bg-amber-100',  upDown:  <IoIosTrendingDown size={10}/>},
   
]

export default colorBox