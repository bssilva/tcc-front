import { ClientModelTable } from "./_models/ClientModelTable";
import Clients from "../../componets/clients/Clients.vue";
export default {
  name: "Clientes",
  components: { Clients },
  data: () => ({
    ClientModelTable,
    dataCustomer: null,
    loading: false
  }),
  async created(){
    this.loading = true;
    this.dataCustomer = await this.API.client.getCustomer();
    this.loading = false;
  }
};
