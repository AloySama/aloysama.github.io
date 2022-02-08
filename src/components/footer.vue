<template>
  <footer>
    <div class="container">
      <div class="item">
        Me contacter :
        <div class="contact">
          <a :href="Instagram"><font-awesome-icon :icon="['fab', 'instagram']"/></a>
          <a :href="Github"><font-awesome-icon :icon="['fab', 'github']"/></a>
          <a :href="LinkedIn"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
          <a :href="Phone"><font-awesome-icon icon="fa-solid fa-phone" /></a>
        </div>
      </div>
      <div class="item">
        Mes projets :
      </div>
      <div class="item">
        FDP
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "my-footer",
  data() {
    return {
      Phone: "06.16.20.33.06",
      LinkedIn: "https://www.linkedin.com/in/alo%C3%AFs-brengard/",
      Instagram: "https://www.instagram.com/alois_brengard/",
      Github: "https://github.com/AloySama"
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 0px) and (max-width: 500px) {
  .container {
    flex-direction: column;
    background-color: red;
  }
}
footer {
  background-color: aqua;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px;
  font-weight: bold;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  flex-grow: 4;
  flex-shrink: 3;
  position: relative;
}

.contact {
  width: auto;
  padding-right: 13px;
}

a {
  margin-left: 12px;
}
</style>