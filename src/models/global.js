export default {
  namespace: 'global',
  state: {
    collapsed: false,
  },
  reducers: {
    changeCollapsed(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    }
  },
  effects: {

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          // console.log('haha');
        }
      });
    }
  }
}