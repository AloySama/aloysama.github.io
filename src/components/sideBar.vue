<template>
  <div class="sidebar" :style="{width: sidebarWidth}">
    <h1>
      <side-bar-link to="/" :icon_class="'fas'" :icon_logo="'house'">Home</side-bar-link>
      <side-bar-link to="/projects" :icon_class="'fas'" :icon_logo="'book'">Projects</side-bar-link>
      <side-bar-link to="/about" :icon_class="'fas'" :icon_logo="'address-book'">About</side-bar-link>
    </h1>
    <span class="collapse-icon" :class="{'rotate-180': collapsed}" @click="toggleSidebar">
      <div class="clickable"><font-awesome-icon :icon="['fas', 'backward']"/></div>
    </span>
  </div>
</template>

<script>
import {collapsed, toggleSidebar, sidebarWidth} from "@/function/state";
import SideBarLink from "@/components/sideBarLink";

export default {
  name: "sideBar",
  components: {SideBarLink},
  setup() {
    return {collapsed, toggleSidebar, sidebarWidth, SideBarLink}
  }

}
</script>
<style>
:root {
  --sidebar-bg-color: #5968ba;
  --sidebar-item-hover: #28348f;
  --sidebar-item-active: #3746a8;
  /*#5968ba
   #28348f
   #3746a8
   */
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

.clickable {
  cursor: pointer;
}
</style>