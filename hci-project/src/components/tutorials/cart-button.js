/** @jsx jsx */

import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FaShoppingCart } from "react-icons/fa"
import { useState } from "react"

import { addToCart, removeFromCart } from "../../store/actions"

const CartButton = ({ cart, tutorial }) => {
    const [added, setAdded] = useState(JSON.stringify(cart).includes(JSON.stringify(tutorial)))
    const handleCartClick = () => {
        if(added) {
            removeFromCart(tutorial.id, cart)
            setAdded(false)
        }
        else {
            addToCart(tutorial, cart)
            setAdded(true)
        }
    }

    return (
        <button 
            onClick={handleCartClick}
            sx={{
                backgroundColor: added ? "secondary" : "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "50px",
                width: "150px",
                textAlign: "center",
                cursor: "pointer",
                mt: "20px"
            }}
        >
            <span sx={{
                color: added ? "primary" : "#000000"
            }}>
                Add to cart
            </span>
            <FaShoppingCart 
                sx={{
                    color: added ? "primary" : "#000000",
                    fontSize: "1em",
                    ml: "5px"
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

export default connect(mapStateToProps, { addToCart, removeFromCart })(CartButton)
