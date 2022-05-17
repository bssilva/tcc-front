import { get, post, put, del } from "./Request";

export const routesApi = {
  establishment: {},
  prize: {},
  client: {
    getCustomer: () => get("customer/establishmentId"),
    deleteCustomer: (cpf) => del(`customer/${cpf}`),
    postCustomer: (body) => post("customer", { body }),
    updateCustomer: (body) => put(`customer/${body.cpf}`, { body }),
  },
  redemption: {},
  points: {},
};
