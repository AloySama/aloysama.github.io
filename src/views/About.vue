<template>
  <div class="about">
    <h1>About me</h1>
    <div id="photo">
      <img class="pp img-cropper" alt="photo" :src="photo">
      <h1>Aloïs Brengard</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photo: require('@/assets/images/moi.png')
    }
  }
}
</script>

<style scoped>
#photo {
  position: relative;
}

img {
  width: 250px;
  display: inline;
}

</style>

<!-- TODO: TAILWIND/BOOTSTRAP-->