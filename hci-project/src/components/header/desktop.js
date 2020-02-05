/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"

import { SignIn, SignUp, SignOut } from "./header-buttons"
import { Bookmark, ShoppingCart } from "./header-icons"
import style from "../../styles/header.module.css"

const isUserSignedIn = false

const Navlinks = ({ links }) => (
    <div sx={{
        paddingLeft: "100px"
    }}>
        <nav>
            <ul sx={{
                display: "flex",
                flex: "1",
                flexDirection: "row",
                ml: "0"
            }}>
                {links.map(({name, path, partiallyActive}) => (
                    <li
                    key={name}
                    sx={{
                        listStyleType: "none",
                        padding: "1rem"
                    }}
                    >
                    <Link 
                        className={style.link}
                        activeClassName={style.active}
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

export const NotSignedIn = () => {
    return (
        <Flex>
            <Box>
                <SignIn />
            </Box>
            <Box>
                <SignUp />
            </Box>
        </Flex>
    )
}

export const IconsGroup = () => {
    return (
        <Flex>
            <Box>
                <ShoppingCart />
            </Box>
            <Box>
                <Bookmark />
            </Box>
        </Flex>
    )
}

const SignedIn = () => {
    return (
        <Flex sx={{
            mt: "10px",
            mr: "20px"
        }}>
            <Box>
                <IconsGroup />
            </Box>
            <Box>
                <SignOut />
            </Box>
        </Flex>
    )
}

const Desktop = ({ menuLinks }) => (
    <Flex sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: isUserSignedIn ? "stretch" : "baseline",
        flexGrow: "0.5"
    }}>
        <Box>
            <Navlinks links={menuLinks} />
        </Box>
        <Box>
            {isUserSignedIn ? (
                <SignedIn />
            ) : (
                <NotSignedIn />
            )}
        </Box>
    </Flex>
)

export default Desktop