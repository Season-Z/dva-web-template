/* eslint-disable no-undef */
import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';
import App from './App';

const app = dva({
  history: createHistory()
});

app.router(App);
app.start('#root');

if ((module as any).hot) {
  (module as any).hot.accept();
}
app.model(require('./models/demo.ts').default);

