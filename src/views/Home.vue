<template>
  <div class="home">
   <HeaderJb />
   <Hero />
   <WomanSection />
   <InstaJb />
   <Partner />
   <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderJb from '@/components/HeaderJb.vue';
import Hero from '@/components/Hero.vue';
import WomanSection from '@/components/WomanSection.vue';
import InstaJb from '@/components/Insta.vue';
import Partner from '@/components/Partner.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'Home',
  components: {
    HeaderJb,
    Hero,
    WomanSection,
    InstaJb,
    Partner,
    Footer
  }
}
</script>
