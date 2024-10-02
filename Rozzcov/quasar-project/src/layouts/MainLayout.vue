<template>
  <q-layout view="lhh lpr lff">
    <q-header class="bg-white">
      <q-btn
        @click="toggleLeftDrawer"
        icon="menu"
        flat
        round
        class="text-blue menu_burger"
      />
      <q-toolbar>
        <q-toolbar-title>
          <headerApp> </headerApp>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-aside>
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
        <quickMenu></quickMenu>
      </q-drawer>
    </q-aside>
    <q-page-container class="">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import headerApp from "../components/HeaderApp.vue";
import quickMenu from "../components/quick-menu.vue";

export default {
  components: {
    headerApp,
    quickMenu,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style></style>
