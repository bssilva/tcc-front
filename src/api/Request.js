import { API_URL, HEADERS } from './Constants';

async function baseRequest(method, route, options) {
  const headers = { ...HEADERS };
  let body;
  if (options?.file) {
    body = options?.body;
    delete headers['Content-Type']
  }
  else
    body = options?.body ? JSON.stringify(options.body) : null;

  const resp = await fetch(`${API_URL}${route}`, Object.assign({
    method,
    headers
  }, { body } || {}));
  console.log(resp)
  const json = await resp.json();
  if (json.status != 200 && json.status != 201 && json.status && !options?.body.saldo)
    window?.VueContext?.$toasted?.global.error({ ...json, msg: json.mensagem });

  return json;
};

export const get = (route, options) => baseRequest('GET', route, options);
export const post = (route, options) => baseRequest('POST', route, options);
export const put = (route, options) => baseRequest('PUT', route, options);
export const del = (route, options) => baseRequest('DELETE', route, options);
