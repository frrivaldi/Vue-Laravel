<template>
  <div class="Products">
    <HeaderJb />
    <Breadcumb />
     <PShop />
     <RProduct />
    <Footer />
   
  </div>
</template>

<script>
import HeaderJb from '@/components/HeaderJb.vue';
import Breadcumb from '@/components/Breadcumb.vue';
import PShop from '@/components/PShop.vue';
import RProduct from '@/components/RProduct.vue';
import Footer from '@/components/Footer.vue';


export default {
  name:'Products',
  components:{
    HeaderJb,
    Breadcumb,
    PShop,
    RProduct,
    Footer
  }
}
</script>