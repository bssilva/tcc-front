import { PrizesModelTable } from "./_models/PrizesModelTable";
import Prizes from "../../componets/prizes/Prizes.vue";

export default {
  components: { Prizes },
  data: () => ({
    PrizesModelTable,
    prizes: null,
    loading: false
  }),
  async created(){
    this.loading = true;
    this.prizes = await this.API.prize.getPrize()
    this.loading = false;
  }
};
