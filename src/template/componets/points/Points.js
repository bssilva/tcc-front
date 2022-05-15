export default {
  name: "Points",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    dialog: false,
    points: {},
    searchObject: []
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
