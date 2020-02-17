/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex, Divider } from "@theme-ui/components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { navigate } from "gatsby"

import { emptyCart } from "../store/actions"

const First = ({ cart, total }) => {
    return (
        <div>
            <Flex sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "left",
                margin: "0 auto",
                maxWidth: "520px"
            }}>
                {cart.map(item => (
                    <Box key={item.id}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            mb: "15px"
                        }}
                    >
                        <span sx={{ mr: "30px" }}>{item.title}</span>
                        <span>${item.price}</span>
                    </Box>
                ))}
                <Box>
                    <Divider />
                    <b sx={{ ml: "380px" }}>
                    <span>Total: </span>
                    <span>${total.toFixed(2)}</span>
                    </b>
                </Box>
            </Flex>
        </div>
    )
}

const Second = () => {
    return (
        <div sx={{ mt: "20px" }}>
            <Flex sx={{ 
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "left",
                margin: "0 auto",
                maxWidth: "400px"
             }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "left"
                }}>
                    <span sx={{ mb: "3px" }}>Username: </span>
                    <span sx={{ fontSize: "1.2em", mb: "15px" }}>john.doe</span>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "left"
                }}>
                    <span sx={{ mb: "3px" }}>Email: </span>
                    <span sx={{ fontSize: "1.2em", mb: "15px" }}>john.doe@gmail.com</span>
                </Box>
                <Box sx={{ mt: "15px" }}>
                    <span>Card number: </span>
                    <input type="text"/>
                </Box>
            </Flex>
        </div>
    )
}

const Modal = ({ isOpen, cart, total }) => {
    const [open, setOpen] = useState(isOpen)
    const [number, setNumber] = useState(1)

    const goToCart = () => {
        setOpen(false)
        navigate("/cart")
    }

    const finish = () => {
        setOpen(false)
        emptyCart()
    }

    return (
        <div sx={{
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            backgroundColor: "rgba(0,0,0,0.3)",
            padding: "50",
            display: open ? "block" : "none"
        }}>
            <div sx={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                maxWidth: "600px",
                minHeight: "400px",
                margin: "100px auto 0 auto",
                padding: "30"
            }}>
                <FaTimes 
                    sx={{ fontSize: "1.5em", cursor: "pointer", ml: "575px" }}
                    onClick={e => setOpen(false)}
                />
                {number === 1 && (
                    <div sx={{ margin: "0 auto" }}>
                        <span sx={{ 
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            mb: "30px"
                        }}>
                            Check your order
                        </span>
                        <First cart={cart} total={total}/>
                        <Flex sx={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            mt: "50px"
                        }}>
                            <Box>
                                <button 
                                    onClick={goToCart}
                                    sx={{
                                        borderRadius: "10px",
                                        borderStyle: "none",
                                        backgroundColor: "secondary",
                                        height: "40px",
                                        width: "120px",
                                        cursor: "pointer"
                                }}>
                                    Back to Cart
                                </button>
                            </Box>
                            <Box>
                            <button 
                                onClick={e => setNumber(2)}
                                sx={{
                                    borderRadius: "10px",
                                    borderStyle: "none",
                                    backgroundColor: "accent",
                                    height: "40px",
                                    width: "120px",
                                    cursor: "pointer"
                                }}>
                                    Next
                                </button>
                            </Box>
                        </Flex>
                    </div>
                )}
                {number === 2 && (
                    <div sx={{ margin: "0 auto" }}>
                        <span sx={{ 
                            fontSize: "1.5em",
                            fontWeight: "bold",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                            Check your data and fill in card number
                        </span>
                        <Second />
                        <Flex sx={{
                            flexDirection: "row",
                            justifyContent: "space-around",
                            alignItems: "center",
                            mt: "40px"
                        }}>
                            <Box>
                                <button 
                                    sx={{
                                        borderRadius: "10px",
                                        borderStyle: "none",
                                        backgroundColor: "secondary",
                                        height: "40px",
                                        width: "120px",
                                        cursor: "pointer"
                                }}>
                                    Change data
                                </button>
                            </Box>
                            <Box>
                            <button 
                                onClick={e => setNumber(3)}
                                sx={{
                                    borderRadius: "10px",
                                    borderStyle: "none",
                                    backgroundColor: "accent",
                                    height: "40px",
                                    width: "120px",
                                    cursor: "pointer"
                                }}>
                                    Next
                                </button>
                            </Box>
                        </Flex>
                    </div>
                )}
                {number === 3 && (
                    <div sx={{ 
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center"
                    }}>
                        <span sx={{ fontSize: "1.6em", margin: "70px auto 0 auto" }}>
                            Tutorial has been sent to your email.
                        </span>
                        <button 
                            onClick={finish}
                            sx={{
                                borderRadius: "10px",
                                borderStyle: "none",
                                backgroundColor: "accent",
                                height: "40px",
                                width: "120px",
                                cursor: "pointer",
                                mt: "100px"
                            }}>
                                OK
                            </button>
                    </div>
                )}
            </div>
        </div>
    )
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    cart: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total }
}

export default connect(mapStateToProps, { emptyCart })(Modal)
