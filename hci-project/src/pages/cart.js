/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex, Divider } from "@theme-ui/components"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartItem from "../components/tutorials/cart-item"

const Cart = ({ cart }) => {
  console.log(cart)
  return (
    <Layout>
      <SEO title="Cart"/>
      <h1>Cart</h1>
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
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
      }}>
        <Box>
          <span>Total:</span>
        </Box>
        <Box>
          <span>$0.00</span>
        </Box>
        <Box>
          <button>Buy</button>
        </Box>
      </Flex>
    </Layout>
  )
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return { cart: state.cart }
}

export default connect(mapStateToProps)(Cart)
