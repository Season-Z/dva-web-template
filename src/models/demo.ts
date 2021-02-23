import { DvaSetupParams, ReduxAction, ReduxSagaEffects } from '@typings/index';
import { demoReq } from '@services/demo';

interface State {}

export default {
  namespace: 'demo',
  state: {},
  subscriptions: {
    setupHistory({ dispatch, history }: DvaSetupParams) {
      // 监听路由变化的操作
      history.listen((location) => {
        // dispatch({
        // type: 'func',
        // payload: {},
        // })
      });
    },
    setup({ dispatch }: DvaSetupParams) {
      // 初始化的一些操作
      // dispatch({
      // type: 'demo',
      // payload: 'iiii'
      // })
    }
  },
  effects: {
    *demo({ payload }: ReduxAction, { put, call }: ReduxSagaEffects) {
      const request = yield call(demoReq, payload);
      console.log(request, payload);
      yield put({
        type: 'final',
        payload: {
          data: 'hiahiahia'
        }
      });
    }
  },
  reducers: {
    final(state: State, { payload }: ReduxAction) {
      console.log(payload);
      return state;
    }
  }
};
