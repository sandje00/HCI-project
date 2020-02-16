/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex, Divider } from "@theme-ui/components"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartItem from "../components/tutorials/cart-item"
import { getTotal } from "../store/actions"

const Cart = ({ cart, total, getTotal }) => {
  console.log(cart)
  getTotal(total, cart)
  return (
    <Layout>
      <SEO title="Cart"/>
      <h1 sx={{
        display: "flex ",
        flexDirection: "row",
        justifyContent: "center",
        mt: "100px !important",
        mb: "50px !important"
      }}>
        Cart
      </h1>
      {cart && 
        <Flex sx={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}>
          {cart.map( tutorial => (
            <Box key={tutorial.id}>
              <CartItem key={tutorial.id} tutorial={tutorial}/>
            </Box>
          ))}
        </Flex>}
      <Divider />
      <Flex sx={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        margin: ["0 auto", null, "0px 60px 0px 0px"]
      }}>
        <Box>
          <span sx={{ fontSize: "1.5em", mr: "30px" }}>
            <b>Total:</b>
          </span>
        </Box>
        <Box>
          <span sx={{ fontSize: "1.5em", mr: "40px" }}>
            <b>${total.toFixed(2)}</b>
          </span>
        </Box>
        <Box>
          <button sx={{
            borderRadius: "10px",
            borderStyle: "none",
            backgroundColor: "accent",
            height: "60px",
            width: "80px",
            textAlign: "center",
            fontSize: "1.2em"
          }}>
            <b>Buy</b>
          </button>
        </Box>
      </Flex>
    </Layout>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  getTotal: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { cart: state.cart, total: state.total }
}

export default connect(mapStateToProps, { getTotal })(Cart)
