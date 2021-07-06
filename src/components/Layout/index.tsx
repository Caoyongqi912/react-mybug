import { Component } from "react";
import { Layout } from "antd";

import MyHeader from "../Header";
import MyContent from "../Content";
import MyFooter from "../Footer";

export default class MyLayout extends Component{
    render() {
        return (
          <Layout>
            <MyHeader />
            <MyContent />
            <MyFooter />
          </Layout>
        );
    }
}