import { IProject } from "src/types/project";
import { request } from "../request";
export interface IGETProject {
  productId?: number | string;
}


export function getProjectInfo(params?: IGETProject) {
  return request<IProject[]>({
    method: "GET",
    url: "projectOpt",
    params,
  });
}
