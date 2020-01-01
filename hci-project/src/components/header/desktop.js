import React from "react"
import { Link } from "gatsby"
import { FaShoppingCart, FaBookmark } from "react-icons/fa"

import headerStyles from "../../styles/header.module.css"

const isUserSignedIn = false;

const Navlinks = ({ links }) => (
    <div>
        <nav>
            <ul className={headerStyles.navbar}>
                {links.map(({name, path, partiallyActive}) => (
                    <li
                    key={name}
                    className={headerStyles.navlinks}
                    >
                    <Link 
                        className={headerStyles.link}
                        activeClassName={headerStyles.active}
                        partiallyActive={partiallyActive}
                        to={path}>
                        {name}
                    </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
)

const NotSignedIn = () => {
    return (
        <div className={headerStyles.buttongroup1}>
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

const Desktop = ({ menuLinks }) => (
    <div className={headerStyles.desktop}>
        <Navlinks links={menuLinks} />
        {isUserSignedIn ? (
            <SignedIn />
        ) : (
            <NotSignedIn />
        )}
    </div>
)

export default Desktop