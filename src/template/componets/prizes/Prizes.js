export default {
  name: "Prizes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    prizes: {},
    searchObject: []
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    insertPrizes(){
      console.log(this.prizes)
    }
  }
};
