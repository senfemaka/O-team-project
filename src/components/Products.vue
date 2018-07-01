<template>
	<section id="user-products">
		<div class="container">Мои продукты
			<div class="product-list-manage">
				<a href="" class="btn1 scanQR"><i class="fo qrcode"></i><span>Сканировать QR - код</span></a>
				<a href="" class="btn1 addproduct"><i class="fo plus"></i><span>Добавить продукты</span></a>
			</div>
		</div>	
	</section>
</template>

<script>

import firebase from 'firebase'

export default {
  name: 'Products',

  mounted () {
    const qwe = firebase.database().ref('products')
    qwe.once('value').then(this.GetName).catch((error) => console.log(error))
  },

  methods: {
    GetName: function (snapshot) {
      console.log(snapshot.val())
    }
  }
}
</script>

<style src="../assets/style.css">
</style>