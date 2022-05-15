export default {
  name: "Prizes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    redemptionsForRegister: {},
    searchObject: []
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
