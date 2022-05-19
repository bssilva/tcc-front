import { API_URL } from './Constants';

async function baseRequest(method, route, options) {
  const headers = {
    'Content-Type': 'application/json',
    establishmentId: '6282eeda848b25673d1ac9b5'
  }
  // if(localStorage.getItem('establishmentId')){
  //   headers = {
  //     'Content-Type': 'application/json',
  //     establishmentId: localStorage.getItem('establishmentId')
  //   };}
  let body;
  if (options?.file) {
    body = options?.body;
    delete headers['Content-Type']
  }
  else
    body = options?.body ? JSON.stringify(options.body) : null;

  console.log(body)
  const resp = await fetch(`${API_URL}${route}`, Object.assign({
    method,
    headers
  }, { body } || {}));
  const json = await resp.json();

  return json;
};

export const get = (route, options) => baseRequest('GET', route, options);
export const post = (route, options) => baseRequest('POST', route, options);
export const put = (route, options) => baseRequest('PUT', route, options);
export const del = (route, options) => baseRequest('DELETE', route, options);
