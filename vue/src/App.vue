<script setup lang="ts">
const links = [
  { path: "/", text: "00_home" },
  { path: "/01", text: "01_get_started" },
  { path: "/02", text: "02_declarative_rendering" },
  { path: "/03", text: "03_attribute_bindings" },
  { path: "/04", text: "04_event_listeners" },
  { path: "/05", text: "05_form_bindings" },
  { path: "/06", text: "06_conditional_rendering" },
  { path: "/07", text: "07_list_rendering" },
  { path: "/08", text: "08_computed_property" },
  { path: "/09", text: "09_lifecycle_template" },
  { path: "/10", text: "10_watchers" },
  { path: "/11", text: "11_props" },
  { path: "/12", text: "12_emits" },
  { path: "/13", text: "13_slots" },
];
</script>

<template>
  <h2>Examples</h2>
  <ul>
    <li v-for="link in links">
      <router-link :to="link.path">{{ link.text }}</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
