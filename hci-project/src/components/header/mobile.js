import React, {useState} from "react"
import { Link } from "gatsby"
import { FaShoppingCart, FaBookmark, FaBars } from "react-icons/fa"

import { NotSignedIn, SignedIn } from "./desktop"
import { useOnOutsideEvent } from "../../hooks"
import headerStyles from "../../styles/header.module.css"

const isUserSignedIn = false;

const MoreButton = ({ onClick }) => (
    <FaBars className={headerStyles.moreButton} onClick={onClick}/>
)

const HiddenItems = ({ links, handleOutsideClick }) => {
    const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)

    return (
        <div ref={innerBorderRef} className={headerStyles.hiddenItems}>
            {links.map(({ name, path }) => (
                <div key={name}>
                    <Link to={path}>{name}</Link>
                </div>
            ))}
        </div>
    )
}

const Mobile = ({ menuLinks }) => {
    const [open, setOpen] = useState(false)

    const handleMoreClick = () => setOpen(true)
    const handleOutsideClick = () => setOpen(false)

    return (
        <div className={headerStyles.mobdiv}>
            {isUserSignedIn ? (
                <SignedIn />
            ) : (
                <NotSignedIn />
            )}
            <MoreButton onClick={handleMoreClick} />
            {open && <HiddenItems links={menuLinks} handleOutsideClick={handleOutsideClick} />}
        </div>
    )
}

export default Mobile