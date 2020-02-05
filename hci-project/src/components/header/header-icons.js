/** @jsx jsx */

import { jsx } from "theme-ui"
import { navigate } from "@reach/router"
import { FaBookmark, FaShoppingCart } from "react-icons/fa"

import style from "../../styles/header.module.css"

export const Bookmark = () => {
    const handleBookmarkClick = () => {
        navigate("../../private_pages/bookmarks")
    }

    return (
        <FaBookmark
            className={style.icons}
            onClick={handleBookmarkClick}
        />
    )
}

export const ShoppingCart = () => {
    const handleCartClick = () => {
        navigate("../../private_pages/cart")
    }
    
    return (
        <FaShoppingCart
            className={style.icons}
            onClick={handleCartClick}
        />
    )
}
