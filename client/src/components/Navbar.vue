<template>
    <nav class="navbar sticky-top navbar-light shadow bg-light">
        <a class="navbar-brand font-weight-bold" href="#" @click.prevent="goHome">Ecommerce</a>
        <div>
            <button class="btn btn-sm btn-outline-success rounded-pill font-weight-bold text-dark" type="button" @click.prevent="getCart">Cart</button> |
            <button class="btn btn-sm btn-outline-danger rounded-pill font-weight-bold text-dark" type="button" @click.prevent="logout">Logout</button>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    },
    goHome () {
      this.$router.push('/home')
    },
    getCart () {
      this.$router.push('/cart')
    }
  }

}
</script>

<style>

</style>
