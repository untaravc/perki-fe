<template>
    <div class="bg-background">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer2.vue'

export default {
    components: { Header, Footer }
}
</script>