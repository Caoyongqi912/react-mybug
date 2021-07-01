## React + Ts

---

### 7/1

- `create`

```shell
yarn create react-app react-ts-mybug --template=typescript
```

- `Component`

```react
interface IProps{
  name:string
};
interface IState{
  count:int
};

class Demo extends Component<IProps,IState>{
  //构造
  constructor(props:any, context:any){
    super(props,context);
    this.state={
      count:0
    }
  };
  render(){
    return ()
  }
}
```



##### 生命周期

---

- `componentWillMount`
  - 渲染前调用，在客户端也在服务端
- `componentDidMount`
  - 第一次渲染后调用，只在客户端。
  - 之后组件已经生成了对应的`DOM`结构，可以通过`this.getDOMNode()`来进行访问。
- `componentWillReceivePorps`
  - 组件接收到一个新的`prop` (更新) 时被调用。
  - 在初始化`render`时不会调用
- `componentWillUpdate`
  - 在组件接收到新的`props`或者`state` 还没有被`render`时调用。
  - 初始化不会被调用
- `componentDidUpdate` 
  - 组件更新完成后立即调用
  - 初始化不会调用
- `componentWillUnmount`
  - 组件从`DOM` 移除之前立即被调用

---

##### Router

- Install

```shell
yarn add react-router-dom @types/react-router-dom
```



---



#### Antd

- install

```shell
yarn add antd
```

