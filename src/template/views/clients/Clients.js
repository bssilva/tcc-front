import { ClientModelTable } from "./_models/ClientModelTable";
import Clients from "../../componets/clients/Clients.vue";
export default {
  name: "Clientes",
  components: { Clients },
  data: () => ({
    ClientModelTable,
  }),
};
