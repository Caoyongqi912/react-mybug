import { request } from "../request";
import IBug from "src/types/bug";
export interface getBugs {
  productId: number;
}

/**
 * 获取一个产品里的bug
 * @param params
 * @returns
 */
export function getBugList(params: getBugs) {
  return request<IBug[]>({
    method: "GET",
    url: "getBugs",
    params,
  });
}

export interface BugOpt {
  bugID: number;
}

/**
 * 获取一条bug信息
 * @param params
 * @returns
 */
export function getBug(params: BugOpt) {
  return request<IBug[]>({
    method: "GET",
    url: "getBug",
    params,
  });
}

/**
 * 删除一条bug
 * @param data
 * @returns
 */
export function delBug(data: BugOpt) {
  return request<IBug>({
    method: "DELETE",
    url: "bugOpt",
    data,
  });
}

/**
 *
 * @param data
 * @returns
 */
export function upBug(data: BugOpt) {
  return request<IBug>({
    method: "PUT",
    url: "bugOpt",
    data,
  });
}

/**
 * 添加bug
 * @param data
 * @returns
 */
export function addBug(data: IBug) {
  return request<IBug>({
    method: "POST",
    url: "bugOpt",
    data,
  });
}
