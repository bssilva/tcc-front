export default {
  name: "Points",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    points: {}
  }),
  methods: {
    fillModal(){
      this.dialog = !this.dialog
    },
    insertPoints(){
      console.log(this.points)
    }
  }
};
