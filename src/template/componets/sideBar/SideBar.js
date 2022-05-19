export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city", to: "/" },
      { title: "Clientes", icon: "mdi-account-group-outline", to: "/clientes" },
      { title: "Pontos", icon: "mdi-cash-100", to: "/pontos" },
      { title: "Prêmios", icon: "mdi-gift-outline", to: "/premios" },
      { title: "Resgates", icon: "mdi-cart-outline", to: "/resgates" },
      { title: "Voucher", icon: "mdi-barcode", to: "/voucher" },
      { title: "Sair", icon: "mdi-logout", to: "/pontos" },
    ],
    mini: true,
  }),
};
