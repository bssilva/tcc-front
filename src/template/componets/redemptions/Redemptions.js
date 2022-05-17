export default {
  name: "Redemptions",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    redemption: {},
    searchObject: [],
    prizes: []
  }),
  async created(){
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
