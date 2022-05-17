export default {
  name: "Find",
  props: ["label", "items"],
  data: () => ({
    search: ""
  }),
  methods: {
    getInfo() {
      let searchInfo = this.items.filter((item) => {
        for (const keyOfObject of Object.keys(item)) {
          if (
            this.search
              .toLowerCase()
              .split(" ")
              .every((v) => item[keyOfObject].toString().toLowerCase().includes(v))
          ) {
            return item;
          }
        }
      });
      this.$emit('input', searchInfo)
    },
  },
};
