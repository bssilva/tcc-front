import { validateForm, mask } from '../../../assets/js/Utils'

export default {
  name: "Points",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    points: {},
    searchObject: [],
    validateForm,
    mask
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    async insertPoints(){
      const resp = await this.API.points.postPoints(this.points)
      if(resp.status == 201){
        this.$toasted.global.success({ msg: 'Pontos inseridos com sucesso' });
        location.reload()
        this.dialog = false
        return
      }
      this.$toasted.global.error({ msg: 'Falha ao inserir pontos !' });
      this.dialog = false
    }
  }
};
