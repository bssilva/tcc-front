export default {
  name: "Clientes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    customer: {},
    searchObject: [],
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    saveCustomer(){
      console.log(this.customer)
    },
    async deleteCustomer(customer){
      const resp = await this.API.client.deleteCustomer(customer.cpf)
      if(resp.statusCode == 200){
        this.$toasted.global.success({ msg: `Cliente ${customer.name} removido com sucesso` });
        this.itemsTable.forEach((element, index) => {
          if(this.itemsTable.cpf == customer.cpf){
            this.itemsTable.splice(index, 1)
          }
        })
        return
      }
      this.$toasted.global.error({ msg: 'Erro ao remover cliente. Tente novamente mais tarde!' });
    }
  }
};
