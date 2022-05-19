export default {
  name: "Voucher",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    searchObject: {}
  }),
  async created(){
    this.itemsTable = await this.API.voucher.getVouchers()
  },
  methods: {
  }
};
