import { h, ref, defineComponent, onMounted, onBeforeUnmount } from "vue";
import { initElement, removeElement } from "./utils";

export const TAOS = defineComponent({
  name: "TAOS",
  inheritAttrs: true,
  props: {
    as: {
      type: String,
      default: "div",
    },
  },
  setup(props) {
    const root = ref(null);

    onMounted(() => {
      initElement(root.value);
    });

    onBeforeUnmount(() => {
      removeElement(root.value);
    });

    return {
      root,
    };
  },
  render() {
    return h(
      this.as,
      {
        ref: "root",
      },
      this.$slots.default?.()
    );
  },
});
