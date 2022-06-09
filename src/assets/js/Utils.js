const validateForm = {
  required: [(v) => !!v || "Campo obrigatório"],
  firstName: [
    (v) => (!!v && !v?.includes(" ")) || "Informe somente o primeiro nome",
  ],
  points: [(v) => (!!v && v >= 0) || "Não é permitido pontos negativos"],
  redemption: [(v) => (!!v && v >= 0) || "Não é permitido quantidade negativa"],
  email: [(v) => (!!v && /.+@.+\..+/.test(v)) || "E-mail inválido"],
  phone: [(v) => (!!v && v?.length == 14) || "Telefone inválido"],
  cellPhone: [(v) => (!!v && v?.length == 16) || "Celular inválido"],
  cpf: [(v) => (!!v && v?.length == 14) || "Cpf inválido"],
  cpfCnpj: [
    (v) =>
      (!!v && (v?.length == 14 || v?.length == 18)) || "Cpf / Cnpj inválido",
  ],
  date: [(v) => !!v || "Data inválida"],
  cep: [(v) => (!!v && v?.length == 9) || "Cep inválido"],
  password: [(v) => v?.length > 5 || "Mínimo 6 dígitos"],
  select: [(v) => !!v || "Selecione um item"],
  checkBox: [(v) => !!v || "Marque essa opção"],
  state: [(v) => (!!v && v?.length == 2) || "Informe o estado"],
  checkbox: [(v) => !!v || "Marcação obrigatória"],
  image: [
    (v) =>
      v?.length == 0 ||
      v == undefined ||
      v.size < 5000000 ||
      "A foto não pode ser maior que 5 MB",
  ],
  confirmPassword: (v1, v2) => v1 === v2 || "As senhas estão diferentes",
};

const mask = {
  cellPhone: "(##) # ####-####",
  cpf: "###.###.###-##",
  cnpj: "##.###.###.####/##",
};
export { validateForm, mask };
