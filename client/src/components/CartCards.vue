<template>
  <div class="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
    <div class="mr-1"><img class="rounded" :src="cart.Product.image_url" placeholder="cart image" width="70"></div>
    <div class="d-flex flex-column align-items-center product-details"><span class="font-weight-bold">{{cart.Product.name}}</span>
    </div>
    <div class="d-flex flex-row align-items-center qty"><i class="fa fa-minus text-danger"></i>
        <h5 class="text-grey mt-1 mr-1 ml-1">2</h5><i class="fa fa-plus text-success"></i>
    </div>
    <div>
        <h5 class="text-grey">{{this.currency(cart.Product.price)}}</h5>
    </div>
    <div class="d-flex align-items-center"><i class="fa fa-trash mb-1 text-danger"></i></div>
</div>
</template>

<script>
export default {
  name: 'cartCard',
  props: ['cart'],
  methods: {
    currency (currency) {
      return `Rp. ${currency.toLocaleString()},00`
    }
  }

}
</script>

<style>

</style>
