<template>
    <div class="bg-gradient-to-br from-cream-50 to-cream-200">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    components: { Header, Footer }
}
</script>