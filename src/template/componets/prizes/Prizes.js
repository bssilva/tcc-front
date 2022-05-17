export default {
  name: "Prizes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    prizes: {},
    searchObject: []
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    async insertPrizes(){
      const teste = await this.API.prize.postPrize(this.prizes)
      console.log(this.teste)
    }
  }
};
