import { validateForm, mask } from '../../../assets/js/Utils'

export default {
  name: "Prizes",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    validateForm,
    dialog: false,
    prizes: {},
    searchObject: [],
    status: {
      ativo: true,
      inativo: false
    }
  }),
  async created(){
    this.itemsTable = await this.API.prize.getPrize()
  },
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
