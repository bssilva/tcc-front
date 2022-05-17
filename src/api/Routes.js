import { get, post, put, del } from "./Request";

export const routesApi = {
  establishment: {},
  prize: {
    postPrize: (body) => post("premium", { body }),
    getPrize: () => get("premium"),
  },
  client: {
    getCustomer: () => get("customer/establishmentId"),
    deleteCustomer: (cpf) => del(`customer/${cpf}`),
    postCustomer: (body) => post("customer", { body }),
    updateCustomer: (body) => put(`customer/${body.cpf}`, { body }),
  },
  points: {
    getPoints: () => get("point"),
    postPoints: (body) => post("point", { body }),
  },
  redemption: {},
};
