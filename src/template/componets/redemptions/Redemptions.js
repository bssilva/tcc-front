export default {
  name: "Redemptions",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    redemption: {},
    searchObject: []
  }),
  async created(){
    const prizes = await this.API.prize.getPrize()
    console.log(prizes)
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
