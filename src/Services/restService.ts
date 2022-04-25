import {set, isEmpty} from 'lodash';

interface AppServiceType {
  url: string;
  method: string;
  params: any;
  body: string;
  headers: {};
  authToken: null;
}
export default function AppService({
  url,
  method,
  params,
  body,
  headers = {},
  authToken = null,
}: AppServiceType) {
  set(headers, 'Accept', 'application/json');
  set(headers, 'Content-Type', 'application/json');
  if (authToken) {
    set(headers, 'Authorization', `Bearer ${authToken}`);
  }
  const reqBody = {
    method,
    headers,
    body,
  };
  if (!isEmpty(params)) {
    reqBody.body = JSON.stringify(params);
  }
  return fetch(url, reqBody)
    .then(response => response.json())
    .then(data => {
      return {
        result: 'ok',
        data,
      };
    })
    .catch(() => {
      return {
        result: 'error',
        message: 'Please check your internet connection!',
      };
    });
}
