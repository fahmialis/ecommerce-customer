<template>

  <div class="col-md-4">
    <div class="card"> <img :src="product.image_url" placeholder="product image" class="card-img-top">
        <div class="card-body">
            <div class="d-flex justify-content-between"> <span class="font-weight-bold">{{product.name}}</span> <span class="font-weight-bold">{{this.currency(product.price)}}</span> </div>
            <div class="d-flex align-items-center flex-row"> <img src="https://i.imgur.com/e9VnSng.png" width="20"> <span class="guarantee">Stock left : {{product.stock}}</span> </div>
            </div>
            <hr>
            <div class="card-body">
            <div class="text-right buttons"> <button class="btn btn-dark w-100" @click.prevent="addToCart(product.id)">Add to cart</button> </div>
        </div>
    </div>

</div>

</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    currency (currency) {
      return `Rp. ${currency.toLocaleString()},00`
    },
    addToCart (id) {
      // console.log(id)
      this.$store.dispatch('addToCart', id)
    }
  }

}
</script>

<style>

</style>
