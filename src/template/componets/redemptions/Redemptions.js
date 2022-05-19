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
    console.log('sa')
    this.prizes = await this.API.prize.getPrize()
  },
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    insertRedemption(){
      console.log(this.redemption)
    }
  }
};
