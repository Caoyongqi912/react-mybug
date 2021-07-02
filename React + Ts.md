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



---

### 7/12 

- 代码分割

  **`React.lazy`**

  - 能让你像渲染常规组件一样处理动态引入

  ```react
  const OtherComponent = Resac.lazy(()=> import("./OtherCopmonent"))
  ```

  - 此代码会在组件首次渲染时，自动导入包含`OtherComponent`组件的包
  - 接收一个函数，函数动态调用`import()` 必须返回一个`Promise` 该`Promise`需要`resolve`一个组件

  - 在`Susoense` 组件中渲染`lazy`组件，如此可以在等待加载`lazy`组件是做优雅降级

  - ```react
    const OtherComponent = Resac.lazy(()=> import("./OtherCopmonent"))
    
    function MyCom(){
      return(
      	<>
        	<Suspense fallback={<div>Loading.. <div/>} 
              <OtherComponent />
           <Suspense/>
        <>
      )
    }
    ```

  - `fallback` 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 `Suspense` 组件置于懒加载组件之上的任何位置。你甚至可以用一个 `Suspense` 组件包裹多个懒加载组件。

- **异常捕获边界 Error boundaries**

  - 错误边界是一种 React 组件，这种组件**可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI**，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

    > 如果模块加载失败（如网络问题），它会触发一个错误。你可以通过[异常捕获边界技术来处理这些情况，以显示良好的用户体验并管理恢复事宜。

  - ```react
    import MyErrorBoundary from './MyErrorBoundary';
    const OtherComponent = React.lazy(()=> import("./OtherCopmonent"))
    
    function MyCom(){
      return(
      	<>
      	<MyErrorBoundary>
        	<Suspense fallback={<div>Loading.. <div/>} 
              <OtherComponent />
           <Suspense/>
         <MyErrorBoundary />
        <>
      )
    }
    ```

    

  - ```react
    class MyErrorBoundary extends React.Component{
      constructor(props){
        super(props);
        this.state = {hasError:false};
      }
      
      static getDerivedStateFormError(error){
            // 更新 state 使下一次渲染能够显示降级后的 UI
    		return {hasError:true};
      }
      componentDidCatch(error,errorInfo){
        //上报服务器
        logErrorToMySerivce(error,errorInfo)
      }
      render(){
        if(this.state.hasError){
          return <h1> some error<h1/>
        }
        return this.props.children;
      }
    }
    ```

    
