import { YpRequest } from 'yp-frontend-library';

export function demoReq(params: any) {
  return YpRequest.post('api name', params);
}
