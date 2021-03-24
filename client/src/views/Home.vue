<template>
<div class="home">
  <Navbar></Navbar>
  <section class="jumbotron text-center">
    <div class="container">
        <h1 class="jumbotron-heading">Shopping List</h1>
     </div>
  </section>
    <div class="container-fluid mt-2 mb-5">
      <div class="products">
        <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="d-flex justify-content-between p-3 bg-white mb-3 align-items-center"> <span class="font-weight-bold text-uppercase">Product List</span>
            <div> <img src="https://img.icons8.com/windows/100/000000/list.png" width="30" /> <img src="https://img.icons8.com/ios-filled/100/000000/squared-menu.png" width="25" /> </div>
            </div>

            <div class="row g-3">

            <!-- product card -->
            <ProductCard v-for="product in products"
            :key="product.id"
            :product="product"
            ></ProductCard>

            <!-- product card -->
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar,
    ProductCard
  },
  methods: {
    getProduct () {
      this.$store.dispatch('getProducts')
    }
  },
  computed: {
    ...mapState(['products'])
  },
  created () {
    this.getProduct()
  }
}
</script>
