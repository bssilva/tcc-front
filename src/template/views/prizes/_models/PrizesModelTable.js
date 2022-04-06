export const PrizesModelTable = {
  headers: [
    { text: "Nome do prêmio", value: "prizeName" },
    { text: "Descrição", value: "description" },
    { text: "Valor (em pontos)", value: "value" },
    { text: "Estoque", value: "inventory" },
  ],
  items: [
    {
      prizeName: "1 Coxinha",
      description:
        "Acumule 50 pontos e troque por 1 coxinha de frango c/ catupiry",
      value: 50.0,
      inventory: 20,
    },
    {
      prizeName: "1 Pizza Gigante",
      description: "Acumule 200 pontos e troque por 1 Pizza à moda da casa",
      value: 200.0,
      inventory: 15,
    },
  ],
};
