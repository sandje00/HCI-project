import React from "react"
import { Link } from "gatsby"
import { FaShoppingCart, FaBookmark } from "react-icons/fa"

import headerStyles from "./header.module.css"

const SignedIn = () => {
    return (
        <div className={headerStyles.buttongroup}>
            <FaBookmark className={`${headerStyles.icons} fa-10x`}/>
            <FaShoppingCart className={`${headerStyles.icons} fa-10x`}/>
            <button className={`${headerStyles.signinout} ${headerStyles.button}`}>
                <Link
                    className={headerStyles.blackButtonText}
                    to="../../pages/private_pages/cart">
                        Sign out</Link>
            </button>
        </div>
    )
}

export default SignedIn