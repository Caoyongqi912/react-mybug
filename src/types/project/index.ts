import { IProduct } from "../product";

export interface IProject {
  id: number;
  name: string;
  product?: IProduct[];
}
