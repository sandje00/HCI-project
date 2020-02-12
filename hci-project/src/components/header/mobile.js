/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex, Divider } from "@theme-ui/components"
import { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { NotSignedIn, IconsGroup } from "./desktop"
import { SignOut } from "./header-buttons"
import { useOnOutsideEvent } from "../../hooks"
import style from "../../styles/header.module.css"

const MoreButton = ({ onClick }) => (
    <FaBars className={style.moreButton} onClick={onClick}/>
)

const mapStateToProps = ({ isUserSignedIn }) => {
    return { isUserSignedIn }
}

const HiddenItems = ({ links, handleOutsideClick, isUserSignedIn }) => {
    const { innerBorderRef } = useOnOutsideEvent(handleOutsideClick)

    return (
        <div ref={innerBorderRef} className={style.hiddenItems}>
            {links.map(({ name, path }) => (
                <div key={name} className={style.item}>
                    <Link to={path} className={style.hiddenLink}>{name}</Link>
                    <Divider sx={{
                        color: "#cccccc",
                        mt: "15px !important",
                        width: "320px",
                        margin: "0 auto"
                    }}/>
                </div>
            ))}
            <div sx={{
                margin: "0 auto",
                paddingTop: "20px"
            }}>
                {isUserSignedIn ? (
                    <SignOut />
                ) : (
                    <NotSignedIn />
                )}
            </div>
        </div>
    )
}

HiddenItems.propTypes = {
    links: PropTypes.array.isRequired,
    handleOutsideClick: PropTypes.func.isRequired,
    isUserSignedIn: PropTypes.bool.isRequired
}

const ConnectedItems = connect(mapStateToProps)(HiddenItems)

const Mobile = ({ menuLinks, isUserSignedIn }) => {
    const [open, setOpen] = useState(false)

    const handleMoreClick = () => setOpen(true)
    const handleOutsideClick = () => setOpen(false)

    return (
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: "7px",
            mr: "10px"
        }}>
            {isUserSignedIn &&
                <Box>
                    <IconsGroup />
                </Box>
            }
            <Box>
                <MoreButton onClick={handleMoreClick} />
                {open && <ConnectedItems links={menuLinks} handleOutsideClick={handleOutsideClick} />}
            </Box>
        </Flex>
    )
}

Mobile.propTypes = {
    menuLinks: PropTypes.array.isRequired,
    isUserSignedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Mobile)
