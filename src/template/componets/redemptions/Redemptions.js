export default {
  name: "Prizes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    redemptionsForRegister: {}
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    insertRedemption(){
      console.log(this.redemptionsForRegister)
    }
  }
};
