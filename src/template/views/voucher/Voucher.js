import { VoucherModelTable } from "./_models/VoucherModelTable";
import Voucher from "../../componets/voucher/Voucher.vue";

export default {
  components: { Voucher },
  data: () => ({
    VoucherModelTable,
    vouchers: null,
    loading: false
  }),
  async created(){
    this.loading = true;
    this.vouchers = await this.API.voucher.getVouchers()
    console.log(this.vouchers)
    this.loading = false;
  }
};
