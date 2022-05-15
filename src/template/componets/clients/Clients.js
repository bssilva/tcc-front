export default {
  name: "Clientes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    customer: {}
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    saveCustomer(){
      console.log(this.customer)
    }
  }
};
