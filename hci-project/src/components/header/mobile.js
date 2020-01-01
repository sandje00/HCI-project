import React, {useState} from "react"
import { Link } from "gatsby"
import { FaShoppingCart, FaBookmark, FaBars } from "react-icons/fa"

import { useOnOutsideEvent } from "../../hooks"
import headerStyles from "../../styles/header.module.css"

const isUserSignedIn = false;

const MoreButton = ({ onClick }) => (
    <FaBars className={headerStyles.moreButton} onClick={onClick}/>
)

const NotSignedIn = () => {
    return (
        <div className={headerStyles.buttongroup1}>
            <button className={`${headerStyles.button} ${headerStyles.hiddenButton}`}>
                <Link
                    to="../../public_pages/signin"
                    className={headerStyles.hiddenButtonText}>
                        Sign in</Link>
            </button>
            <button className={`${headerStyles.button} ${headerStyles.hiddenButton}`}>
                <Link
                    to="../../public_pages/signup"
                    className={headerStyles.hiddenButtonText}>
                        Sign up</Link>
            </button>
        </div>
    )
}

const SignOut = () => {
    return (
        <div>
            <button className={`${headerStyles.button} ${headerStyles.hiddenButton}`}>
                <Link
                    className={headerStyles.hiddenButtonText}
                    to="../../">
                        Sign out</Link>
            </button>
        </div>
    )
}

const HiddenItems = ({ links, handleOutsideClick }) => {
    const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)

    return (
        <div ref={innerBorderRef} className={headerStyles.hiddenItems}>
            {links.map(({ name, path }) => (
                <div key={name} className={headerStyles.item}>
                    <Link to={path} className={headerStyles.hiddenLink}>{name}</Link>
                </div>
            ))}
            {isUserSignedIn ? (
                <SignOut />
            ) : (
                <NotSignedIn />
            )}
        </div>
    )
}

const SignedIn = () => {
    return (
        <div className={headerStyles.buttongroup2}>
            <FaBookmark className={headerStyles.icons}/>
            <FaShoppingCart className={headerStyles.icons}/>
        </div>
    )
}

const Mobile = ({ menuLinks }) => {
    const [open, setOpen] = useState(false)

    const handleMoreClick = () => setOpen(true)
    const handleOutsideClick = () => setOpen(false)

    return (
        <div className={headerStyles.mobdiv}>
            {isUserSignedIn && <SignedIn />}
            <MoreButton onClick={handleMoreClick} />
            {open && <HiddenItems links={menuLinks} handleOutsideClick={handleOutsideClick} />}
        </div>
    )
}

export default Mobile