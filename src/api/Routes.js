import { get, post, put, del } from './Request';

export const routesApi = {
  establishment: {
  },
  prize: {
  },
  client: {
    getCustomer: () => get('customer/establishmentId'),
    deleteCustomer: (cpf) => del(`customer/${cpf}`)
  },
  redemption: {
  },
  points: {
  },
};