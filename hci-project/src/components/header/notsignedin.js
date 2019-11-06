import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"

const NotSignedIn = () => {
    return (
        <div className={headerStyles.buttongroup}>
            <button className={`${headerStyles.signinout} ${headerStyles.button}`}>
                <Link
                    to="../../public_pages/signin"
                    className={headerStyles.blackButtonText}>
                        Sign in</Link>
            </button>
            <button className={`${headerStyles.signup} ${headerStyles.button}`}>
                <Link
                    to="../../public_pages/signup"
                    className={headerStyles.whiteButtonText}>
                        Sign up</Link>
            </button>
        </div>
    )
}

export default NotSignedIn