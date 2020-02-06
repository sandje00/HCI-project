/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex, Divider } from "@theme-ui/components"
import { useState } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import { NotSignedIn, IconsGroup } from "./desktop"
import { SignOut } from "./header-buttons"
import { useOnOutsideEvent } from "../../hooks"
import style from "../../styles/header.module.css"

const isUserSignedIn = false

const MoreButton = ({ onClick }) => (
    <FaBars className={style.moreButton} onClick={onClick}/>
)

const HiddenItems = ({ links, handleOutsideClick }) => {
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

const Mobile = ({ menuLinks }) => {
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
                {open && <HiddenItems links={menuLinks} handleOutsideClick={handleOutsideClick} />}
            </Box>
        </Flex>
    )
}

export default Mobile