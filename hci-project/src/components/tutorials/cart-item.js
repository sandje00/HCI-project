/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { removeFromCart } from "../../store/actions"

const Button = ({ cart, removeFromCart, id }) => {
    const handleRemoveCart = () => {
        removeFromCart(id, cart)
    }

    return (
        <button onClick={handleRemoveCart}>
            Remove
        </button>
    )
}

Button.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    return { cart: state.cart }
}

const RemoveButton = connect(mapStateToProps, { removeFromCart })(Button)

const CartItem = ({ tutorial }) => {
    return (
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Box>
                <Link 
                    to={`/tutorials/${tutorial.id}`}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <Image
                        fluid={tutorial.image.childImageSharp.fluid}
                        sx={{ maxWidth: "150px" }}
                    />
                </Link>
            </Box>
            <Box>
                <Link to={`/tutorials/${tutorial.id}`}>
                    <span>{tutorial.title}</span>
                </Link>
            </Box>
            <Box>
                <RemoveButton id={tutorial.id}/>
            </Box>
        </Flex>
    )
}

export default CartItem
