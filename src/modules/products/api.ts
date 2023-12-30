/* eslint-disable no-useless-catch */
import { RequestFn } from 'services';
import http from 'services/http';

import { IApi } from './types';

export const ProductsGet: RequestFn<IApi.ProductsGet.Request, IApi.ProductsGet.Response> = params => http.get('/products-list/', { params });
