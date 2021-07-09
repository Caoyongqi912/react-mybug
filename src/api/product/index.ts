import { IProduct } from "src/types/product";
import { request } from "../request";
export interface getProducts {
  productId?: number | string;
}
export function getProduct(params?: getProducts) {
    return request<IProduct[]>({
        method: "GET",
        url: "productOpt",
        params
  })
}
