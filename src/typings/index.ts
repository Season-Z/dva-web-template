import { History } from 'history';
/**
 * dva reducer、effect入参类型
 */
export interface ReduxAction {
  type: string;
  payload: any;
  [propName: string]: any;
}

/**
 * dispatch
 */
export type Dispatch = <A extends ReduxAction>(action: A) => A;

/**
 * effect的方法
 */
export interface ReduxSagaEffects {
  call: (p: (arg: any) => Promise<any>, arg?: any) => Promise<any>;
  put: (action: ReduxAction) => void;
  select: (state: any) => any;
}

/**
 * subscriptions参数
 */
export interface DvaSetupParams {
  dispatch: Dispatch;
  history: History;
}

export type DvaModelEffectFn = (action: ReduxAction, sagaEffects: ReduxSagaEffects) => any;

export interface ReduxSagaTaker {
  type: string;
  [propsName: string]: any;
}
// problem
export interface DvaModelEffectWithTaker extends Array<ReduxSagaTaker | DvaModelEffectFn> {
  [index: number]: ReduxSagaTaker | DvaModelEffectFn;
}

export type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker;
