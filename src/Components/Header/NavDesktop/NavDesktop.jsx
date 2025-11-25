import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
function NavDesktop() {
    return (
        <>
            <nav>
                <div>
                    <button>
                        <FaBars />
                    </button>
                    <div>
                        <input type="text" placeholder='Search' />
                        <span>
                            <IoSearchOutline />
                        </span>
                    </div>
                </div>
                <div>
                    <button>
                        <MdOutlineLightMode />
                    </button>
                    <button>
                        <BiCommentDetail />
                    </button>
                    <div>
                        <img src="/images/header/user2.png" alt="profile" />
                        <div>
                            <span>Zoya Khan</span>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop