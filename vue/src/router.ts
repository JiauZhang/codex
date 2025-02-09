import { createRouter, createWebHistory, RouterView } from "vue-router";
import GetStarted from "./components/01_get_started.vue";
import DeclarativeRendering from "./components/02_declarative_rendering.vue";
import AttributeBindings from "./components/03_attribute_bindings.vue";
import EventListeners from "./components/04_event_listeners.vue";
import FormBindings from "./components/05_form_bindings.vue";
import ConditionalRendering from "./components/06_conditional_rendering.vue";
import ListRendering from "./components/07_list_rendering.vue";
import ComputedProperty from "./components/08_computed_property.vue";
import LifecycleTemplate from "./components/09_lifecycle_template.vue";
import Watchers from "./components/10_watchers.vue";
import Props from "./components/11_props.vue";
import Emits from "./components/12_emits.vue";
import Slots from "./components/13_slots.vue";

export const routerHistory = createWebHistory();
export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: "/01", component: GetStarted },
    { path: "/02", component: DeclarativeRendering },
    { path: "/03", component: AttributeBindings },
    { path: "/04", component: EventListeners },
    { path: "/05", component: FormBindings },
    { path: "/06", component: ConditionalRendering },
    { path: "/07", component: ListRendering },
    { path: "/08", component: ComputedProperty },
    { path: "/09", component: LifecycleTemplate },
    { path: "/10", component: Watchers },
    { path: "/11", component: Props },
    { path: "/12", component: Emits },
    { path: "/13", component: Slots },
  ],
});
