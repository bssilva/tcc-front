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
      this.dialogDelete = false;
      this.dialogUpdate = false;
      if (type == "delete") this.callbackDelete(this.guardKey);
      else this.callbackUpdate();
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
