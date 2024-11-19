import { h, onMounted, onUpdated, ref, watch, defineComponent } from "vue";
import { useWindowScroll } from "@vueuse/core";

export const TAOS = defineComponent({
  name: "TAOS",
  inheritAttrs: true,
  props: {
    as: {
      type: String,
      default: "div",
    },
    className: {
      type: String,
      default: "",
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const root = ref(null);
    let className = ref("");
    let trigger = ref(null);
    const { y } = useWindowScroll();

    const getBeforeClassName = (className) => {
      return className.replaceAll("taos:", "");
    };

    const taosClassName = props.className + " taos-init";
    const beforeClassName = getBeforeClassName(taosClassName);

    onMounted(() => {
      className.value =
        getBeforeClassName(props.className) + " !duration-[0ms] !delay-[0ms]";

      window.requestAnimationFrame(
        () =>
          (trigger.value =
            root.value.getBoundingClientRect().top -
            window.innerHeight +
            props.offset +
            window.scrollY)
      );
    });

    let firstUpdatedOccurred = false;
    onUpdated(() => {
      if (!firstUpdatedOccurred) {
        firstUpdatedOccurred = true;

        window.requestAnimationFrame(() => {
          className.value = taosClassName;
        });
        return;
      }
    });

    watch(y, () => {
      if (firstUpdatedOccurred && y.value > trigger.value) {
        className.value = taosClassName;
        return;
      }

      className.value = beforeClassName;
    });

    return {
      root,
      className,
      y,
    };
  },
  render() {
    return h(
      this.as,
      {
        ref: "root",
        className: this.className,
      },
      this.$slots.default?.()
    );
  },
});
