export default {
  props: ["headers", "items", "callbackDelete"],
  data: () => ({
    dialogDelete: false,
    guardKey: null
  }),
  methods: {
    callbackConfirm(item){
      this.callbackDelete(item)
      this.dialogDelete = false
    },
    openModal(item){
      this.guardKey = item
      this.dialogDelete = true
    }
  }
};
