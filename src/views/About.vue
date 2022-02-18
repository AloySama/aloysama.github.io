<template>
  <div class="about">
    <figure>
      <div id="photo">
        <img class="pp img-cropper" alt="photo" :src="photo">
        <h1>Aloïs Brengard</h1>
      </div>
    </figure>
  </div>
  <competence-box/>
</template>

<script>
import competenceBox from "@/components/competenceBox";

export default {
  components: {competenceBox},
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