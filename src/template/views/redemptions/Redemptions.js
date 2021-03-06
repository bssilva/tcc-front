import { RedemptionsModelTable } from "./_models/RedemptionsModelTable";
import Redemptions from "../../componets/redemptions/Redemptions.vue";

export default {
  components: { Redemptions },
  data: () => ({
    RedemptionsModelTable,
    redemptions: null,
    loading: false,
    prizes: null
  }),
  async created(){
    this.loading = true;
    this.redemptions = await this.API.redemption.getRedemptions()
    this.prizes = await this.API.prize.getPrize();
    if(this.redemptions.length > 0){
      this.redemptions.forEach(element => {
        element.createdDate = new Date(element.createdDate).toLocaleDateString('pt-br')
        element.value = element.value.toString().replace(".",",")
        element.total = element.total.toString().replace(".",",")
        element.quantity = Number(element.quantity)
        let prize = this.prizes.filter(prize => prize._id == element.descriptionPremium)
        element.descriptionPremium = prize[0].name
        
      })
    }
    this.loading = false;
  }
};
