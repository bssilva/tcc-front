import { validateForm, mask } from "../../../assets/js/Utils";

export default {
  props: ["headers", "items", "callbackDelete", "callbackUpdate"],
  data: () => ({
    dialogDelete: false,
    dialogUpdate: false,
    guardKey: null,
    validateForm,
    mask,
  }),
  methods: {
    callbackConfirm(type) {
      if (type == "delete") this.callbackDelete(this.guardKey);
      else this.callbackUpdate();
      this.dialogDelete = false;
    },
    openModal(item, type) {
      this.guardKey = item;
      if (type == "delete") this.dialogDelete = true;
      else {
        this.$emit('input', item)
        this.dialogUpdate = true;
      }
    },
  },
};
