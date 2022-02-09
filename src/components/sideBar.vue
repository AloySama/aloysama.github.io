<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <h1>
      <span v-if="!collapsed">
        <div id="nav">
    <router-link to="/">Home</router-link><br>
    <router-link to="/about">About</router-link>
  </div>
      </span>
    </h1>
    <span class="collapse-icon" :class="{'rotate-180': collapsed}" @click="toggleSidebar">
      <font-awesome-icon :icon="['fas', 'cog']"/>
    </span>
  </div>
</template>

<script>
import {collapsed, toggleSidebar, sidebarWidth} from "@/function/state";

export default {
  name: "sideBar",
  setup() {
    return {collapsed, toggleSidebar, sidebarWidth}
  }

}
</script>
<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: .5em;
  transition: .3s ease;
  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: .75em;
  color: whitesmoke;
  transition: .2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: .2s linear;
}
</style>