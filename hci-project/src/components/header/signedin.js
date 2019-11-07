import React from "react"
import { Link } from "gatsby"
import { FaShoppingCart, FaBookmark } from "react-icons/fa"

import headerStyles from "./header.module.css"

const SignedIn = () => {
    return (
        <div className={headerStyles.buttongroup2}>
            <FaBookmark className={headerStyles.icons}/>
            <FaShoppingCart className={headerStyles.icons}/>
            <button className={`${headerStyles.signinout} ${headerStyles.button}`}>
                <Link
                    className={headerStyles.blackButtonText}
                    to="../../private_pages/cart">
                        Sign out</Link>
            </button>
        </div>
    )
}

export default SignedIn