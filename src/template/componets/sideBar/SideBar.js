export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-city", to: "/" },
      { title: "Clientes", icon: "mdi-account-group-outline", to: "/clientes" },
      { title: "Pontos", icon: "mdi-cash-100", to: "/pontos" },
      { title: "Prêmios", icon: "mdi-gift-outline", to: "/pontos" },
      { title: "Resgates", icon: "mdi-cart-outline", to: "/pontos" },
      { title: "Voucher", icon: "mdi-barcode", to: "/pontos" },
      { title: "Sair", icon: "mdi-logout", to: "/pontos" },
    ],
    mini: true,
  }),
};
