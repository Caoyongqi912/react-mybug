export interface IBuilds{
    build_name: string;
    id:number
}

export interface IErrorTypes{
    id: number;
    error_name: string;
}

export interface IPlatForm{
    platform_name: string;
    id: number;
}

export interface ISolution{
    solution_name: string;
    id:number
}

export interface IMoudle{
    module_name: string;
    id:number
}

export interface IProduct{
    id: number;
    name: string;
    builds?: IBuilds;
    errorTypes?: IErrorTypes;
    modules?: IMoudle;
    solutions?: ISolution;
}