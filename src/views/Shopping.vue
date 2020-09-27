<template>
  <div class="Shopping">
    <HeaderJb />
    <Breadcumb />
    <Shopping/>
    <Footer />
   
  </div>
</template>

<script>
import HeaderJb from '@/components/HeaderJb.vue';
import Breadcumb from '@/components/Breadcumb.vue';
import Shopping from '@/components/Shopping.vue';
import Footer from '@/components/Footer.vue';


export default {
  name:'Products',
  components:{
    HeaderJb,
    Breadcumb,
    Shopping,
    Footer
  }
}
</script>