import { validateForm, mask } from '../../../assets/js/Utils'

export default {
  name: "Clientes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    teste: '',
    dialog: false,
    customer: {},
    searchObject: [],
    validateForm,
    mask,
    customerUpdate: {}
  }),
  methods: {
    fillModal() {
      this.dialog = !this.dialog;
    },
    async saveCustomer() {
      if(!this.$refs.form.validate()){
        this.$toasted.global.error({ msg: 'Favor preencher os campos obrigatórios' });
        return
      }
      
      const resp = await this.API.client.postCustomer(this.customer)
      if(resp.statusCode == 201){
        this.$toasted.global.success({ msg: `Cliente ${this.customer.name} criado com sucesso!` });
        this.itemsTable.push(this.customer)
        this.dialog = false
      }
      if(resp.statusCode == 400){
        this.$toasted.global.error({ msg: 'Cliente ja cadastrado !' });
        return
      }
    },
    async updateCustomer(){
      const resp = await this.API.client.updateCustomer(this.customerUpdate)
      if(resp.statusCode == 200){
        this.$toasted.global.success({ msg: `Cliente ${this.customerUpdate.name} atualizado com sucesso!` });
        this.itemsTable.forEach((element, index) => {
          if (element.cpf == customerUpdate.cpf) {
            this.itemsTable.splice(index, 1);
            this.itemsTable.push(this.customerUpdate)
          }
        });
        return
      }
      this.$toasted.global.error({ msg: `Falha ao atualizar o cliente!` });
    },
    async deleteCustomer(customer) {
      const resp = await this.API.client.deleteCustomer(customer.cpf);
      if (resp.statusCode == 200) {
        this.$toasted.global.success({
          msg: `Cliente ${customer.name} removido com sucesso`,
        });
        this.itemsTable.forEach((element, index) => {
          if (element.cpf == customer.cpf) {
            this.itemsTable.splice(index, 1);
          }
        });
        return;
      }
      this.$toasted.global.error({
        msg: "Erro ao remover cliente. Tente novamente mais tarde!",
      });
    },
  },
};
