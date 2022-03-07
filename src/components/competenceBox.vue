<template>
  <ul class="box">
    <li><competence-bar color="#3746a8" name="C/C++" percent="80"/></li>
    <li><competence-bar color="#f5c941" name="Python" percent="74"/></li>
    <li><competence-bar color="#3c4548" name="Shell" percent="51"/></li>
    <li><competence-bar color="#e96228" name="HTML/CSS" percent="46"/></li>
    <li><competence-bar color="#5F5286" name="Haskell" percent="20"/></li>
    <li><competence-bar color="black" name="Assembly" percent="10"/></li>
  </ul>
</template>

<script>
import CompetenceBar from "@/components/competenceBar";
export default {
  name: "competenceBox",
  components: {CompetenceBar},

}
</script>

<style scoped>
.box {
  width: 800px;
  padding: 40px;
  margin: 50px auto;
  background: #f3f3f3;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, .1);
}

ul {
  list-style-type: none;
}

</style>