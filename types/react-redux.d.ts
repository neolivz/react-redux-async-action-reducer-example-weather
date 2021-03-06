import 'react-redux';

declare module 'react-redux' {

  // overload connect interface to return built-in ClassDecorator
  // https://github.com/reactjs/react-redux/pull/541#issuecomment-269197189

  export function connect(
    mapStateToProps?: MapStateToProps<any, any> | MapStateToPropsFactory<any, any>,
    mapDispatchToProps?: MapDispatchToProps<any, any> | MapDispatchToPropsFactory<any, any>,
    mergeProps?: MergeProps<any, any, any>,
    options?: Options
  ): ClassDecorator;
  
//   export function connect<TStateProps, TDispatchProps, TOwnProps>(
//     mapStateToProps?: MapStateToProps<TStateProps, TOwnProps> | MapStateToPropsFactory<TStateProps, TOwnProps>,
//     mapDispatchToProps?: MapDispatchToProps<TDispatchProps, TOwnProps> | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>,
//     mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps>,
//     options?: Options
// ): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>;
}
