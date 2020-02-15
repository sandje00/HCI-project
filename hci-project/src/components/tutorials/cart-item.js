/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import Image from "gatsby-image"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { navigate } from "@reach/router"

import { removeFromCart } from "../../store/actions"

const Button = ({ cart, removeFromCart, id }) => {
    const handleRemoveCart = () => {
        removeFromCart(id, cart)
    }

    return (
        <button 
            onClick={handleRemoveCart}
            sx={{
                borderRadius: "10px",
                borderStyle: "none",
                backgroundColor: "secondary",
                height: "40px",
                width: "80px",
                cursor: "pointer"
            }}
        >
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
    const handleMoreClick = () => {
        navigate(`/tutorials/${tutorial.id}`)
    }

    return (
        <Flex sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "800px",
            mb: "30px"
        }}>
            <Box>
                <Flex sx={{ 
                    flexDirection: "row", 
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexWrap: "wrap"
                }}>
                    <Box sx={{ width: "100%", maxWidth: "150px" }}>
                        <Image
                            fluid={tutorial.image.childImageSharp.fluid}
                            sx={{ width: "150px", cursor: "pointer" }}
                            onClick={handleMoreClick}
                        />
                    </Box>
                    <Box>
                        <span onClick={handleMoreClick} sx={{ fontSize: "1.2em", ml: "25px", cursor: "pointer" }}>
                            {tutorial.title}
                        </span>
                    </Box>
                </Flex>
            </Box>
            <Box>
                <Flex sx={{ 
                    flexDirection: "row", 
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}>
                    <Box>
                        <span sx={{ fontSize: "1.2em", mr: "50px" }}>
                            ${tutorial.price}
                        </span>
                    </Box>
                    <Box>
                        <RemoveButton id={tutorial.id}/>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default CartItem
