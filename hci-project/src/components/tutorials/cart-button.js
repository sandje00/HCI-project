/** @jsx jsx */

import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FaShoppingCart } from "react-icons/fa"

import { addToCart } from "../../store/actions"

const CartButton = ({ cart, tutorial }) => {
    let isInCart = cart.includes(tutorial)
    const handleCartClick = () => {
        addToCart(tutorial, cart)
        isInCart = !isInCart
    }

    return (
        <button 
            onClick={handleCartClick}
            sx={{
                backgroundColor: isInCart ? "secondary" : "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "50px",
                width: "50px",
                textAlign: "center",
                mb: ["0px", "50px", "50px"],
                mr: ["50px", "0px", "0px"]
            }}
        >
            <FaShoppingCart 
                sx={{
                    color: isInCart ? "primary" : "#000000",
                    fontSize: "2em",
                    mt: "7px"
                }}
            />
        </button>
    )
}

CartButton.propTypes = {
    tutorial: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

export default connect(mapStateToProps, { addToCart })(CartButton)
