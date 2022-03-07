<template>
  <div class="all">
    <div class="lang">{{ name }}</div>
    <div class="bar">
      <div class="progress" :style="{'background': color, 'width': percent+'%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "competenceBar",
  props: {
    color: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.all {
  text-align: left;
  margin-bottom: 1em;
}
.bar {
  width: 100%;
  background: #dfdfdf;
  overflow: hidden;
  padding: 5px;
}

.progress {
  float: left;
  padding: 15px;
}

.percent {
  float: right;
  font-weight: 600;
  height: 30px;
  line-height: 30px;
}

</style>