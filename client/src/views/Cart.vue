<template>
<div>
  <Navbar></Navbar>
    <section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">Shopping Cart</h1>
    </div>
  </section>

  <div class="container mt-5 mb-5">
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">

          <!-- cart item card -->

            <CartCard v-for="cart in carts"
            :key="cart.id"
            :cart="cart"
            ></CartCard>

          <!-- cart item card -->

            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text" class="form-control border-0 gift-card" placeholder="discount code/gift card"><button class="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
            <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button class="btn btn-success btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
        </div>
    </div>

</div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCards'
import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartCard
  },
  methods: {
    getCartItems () {
      this.$store.dispatch('getCartItems')
    }
  },
  computed: {
    ...mapState(['carts'])
  },
  created () {
    this.getCartItems()
  },
  updated () {
    this.getCartItems()
  }

}
</script>

<style scoped>
.size span {
    font-size: 11px
}

.color span {
    font-size: 11px
}

.product-deta {
    margin-right: 70px
}

.gift-card:focus {
    box-shadow: none
}

.pay-button {
    color: #fff
}

.pay-button:hover {
    color: #fff
}

.pay-button:focus {
    color: #fff;
    box-shadow: none
}

.text-grey {
    color: #a39f9f
}

.qty i {
    font-size: 11px
}

</style>
