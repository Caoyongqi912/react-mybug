import React from "react";

export interface IRoutBase{
    path:string,  //路径
    components?:any, //组件
    redirect?:string,  //302跳转
}

export interface IRoute extends IRoutBase{
    title:string,
    
}