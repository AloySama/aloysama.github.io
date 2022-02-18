<template>
  <router-link :to="to" class="link text-3xl" :class="{active: isActive}">
    <transition name="fade">
      <span v-if="!collapsed">
        <span class="space "><font-awesome-icon :icon="[icon_class, icon_logo]"/></span>
        <slot/>
      </span>
      <span v-else class="resizeIcon mt-6 text-2xl flex left-1">
        <font-awesome-icon :icon="[icon_class, icon_logo]"/>
      </span>
    </transition>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router"
import { collapsed } from "@/function/state";

export default {
  name: "sideBarLink",
  props: {
    to: {
      type: String,
      required: true
    },
    icon_class: {
      type: String,
      required: true
    },
    icon_logo: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const isActive = computed(
        () => route.path === props.to)
    return {isActive, collapsed}
  }
}
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  user-select: none;
  margin: .1em 0;
  padding: .4em;
  border-radius: .25em;
  height: 1.5em;
  color: whitesmoke;
  text-decoration: none;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link:active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .1s;
  animation: cssAnim 0s .3s forwards;
  visibility: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes cssAnim {
  to {visibility: visible}
}

.space {
  display: inline-block;
  margin-right: .25em;
}

.resizeIcon {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>