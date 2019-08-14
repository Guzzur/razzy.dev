import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createHelpers from "./createHelpers";
import createLogger from "./logger";
import { connectRouter, routerMiddleware } from "connected-react-router";
import history from "./history";
// import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
// import translationsObject from './translations'

export default function configureStore(initialState, helpersConfig) {
  const helpers = createHelpers(helpersConfig);
  const middleware = [thunk.withExtraArgument(helpers)];

  let enhancer;
  // eslint-disable-next-line no-constant-condition
  if (true) {
    middleware.push(createLogger());
    const actionCreators = {};

    // https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
    const composeEnhancers = composeWithDevTools({
      // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
      actionCreators
    });

    // https://redux.js.org/docs/api/applyMiddleware.html
    enhancer = composeEnhancers(applyMiddleware(...middleware, routerMiddleware(history)));
  } else {
    enhancer = applyMiddleware(...middleware);
  }

  // https://redux.js.org/docs/api/createStore.html
  const store = createStore(connectRouter(history)(rootReducer), initialState, enhancer);

  // const supportedLanguages = ['ru','fr','en']
  // let lang = navigator.language || navigator.userLanguage;
  // if (lang === '' || lang === undefined) {
  // 	lang = "en"
  // } else {
  // 	lang = lang.split('-')[0]
  // 	if (!(supportedLanguages.includes(lang))) {
  // 		lang = 'en'
  // 	}
  // }
  // syncTranslationWithStore(store)
  // store.dispatch(loadTranslations(translationsObject));
  // store.dispatch(setLocale(lang));

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept("./reducers", () =>
      // Don't forget to remove `()` if you change reducers back to normal rootReducer.
      // eslint-disable-next-line global-require
      store.replaceReducer(require("./reducers").default())
    );
  }

  return { store, history };
}
