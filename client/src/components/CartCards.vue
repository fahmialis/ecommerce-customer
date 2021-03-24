<template>
  <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
    <div class="mr-1"><img class="rounded" :src="cart.Product.image_url" placeholder="cart image" width="70"></div>
    <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{{cart.Product.name}}</span>
    </div>
    <div class="d-flex flex-row align-items-center qty">
      <div @click.prevent="updateCart(cart.id, cart.Product.id)">
      <NumberInputSpinner
      :min="0"
      :max="cart.Product.stock"
      :step="1"
      :integerOnly="true"
      v-model="amount"
      />
      </div>
    </div>
    <div>
        <h5 class="text-grey">{{this.currency(cart.Product.price)}}</h5>
    </div>
    <div class="d-flex align-items-center"><button class="btn-outline-danger rounded-lg" @click.prevent="removeItem(cart.id)">Delete</button></div>
</div>
</template>

<script>
import NumberInputSpinner from 'vue-number-input-spinner'
export default {
  data () {
    return {
      amount: this.cart.amount
    }
  },
  name: 'cartCard',
  props: ['cart'],
  components: {
    NumberInputSpinner
  },
  methods: {
    currency (currency) {
      return `Rp. ${currency.toLocaleString()},00`
    },
    removeItem (id) {
      // console.log(id)
      this.$store.dispatch('removeItem', id)
    },
    updateCart (id, ProductId) {
      // console.log(id, ProductId, this.amount)
      const data = {
        id, ProductId, amount: this.amount
      }
      console.log(data)
    }
  }

}
</script>

<style>

</style>
