import { validateForm, mask } from "../../../assets/js/Utils";

export default {
  name: "Redemptions",
  props: ["headersTable", "itemsTable"],
  data: () => ({
    validateForm,
    mask,
    dialog: false,
    redemption: {},
    searchObject: [],
    prizes: [],
    namePrizeRedemption: "",
  }),
  async created() {
    this.prizes = await this.API.prize.getPrize();
  },
  watch: {
    namePrizeRedemption(newValue, oldValue) {
      this.prizes.forEach((element) => {
        if (element._id == newValue) {
          this.redemption.value = element.value;
          this.namePrizeRedemption = element;
        }
      });
    },
  },
  methods: {
    fillModal() {
      this.dialog = !this.dialog;
    },
    async insertRedemption() {
      this.redemption.descriptionPremium = this.namePrizeRedemption;
      const resp = await this.API.redemption.postRedemption(this.redemption);
      if (resp.status == 201) {
        this.$toasted.global.success({ msg: "Resgate realizado com sucesso" });
        setTimeout(() => {
          location.reload();
        }, 800);
      }
    },
  },
};
