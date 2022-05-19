import { validateForm, mask } from '../../../assets/js/Utils'

export default {
  name: "Redemptions",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    validateForm,
    mask,
    dialog: false,
    redemption: {},
    searchObject: [],
    prizes: []
  }),
  async created(){
    this.prizes = await this.API.prize.getPrize()
    this.itemsTable = await this.API.redemption.getRedemptions()
    if(this.itemsTable.length > 0){
      this.itemsTable.forEach(element => {
        element.createdDate = new Date(element.createdDate).toLocaleDateString('pt-br')
        element.value = element.value.toString().replace(".",",")
        element.total = element.total.toString().replace(".",",")
        element.quantity = Number(element.quantity)
      })
    }
  },
  watch: {
    redemption(newValue, oldValue) {
      if(newValue.descriptionPremium){
        this.prizes.forEach(element => {
          if(element._id == newValue.descriptionPremium){
            this.redemption.value = element.value
            this.namePrizeRedemption = element.name
          }
        })
      }
    }
  },
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    async insertRedemption(){
      this.redemption.descriptionPremium = this.namePrizeRedemption
      const resp = await this.API.redemption.postRedemption(this.redemption)
      if(resp.status == 201){
        this.$toasted.global.success({ msg: 'Resgate realizado com sucesso' });
        setTimeout(() => {
          location.reload()
        },800)
      }
    }
  }
};
