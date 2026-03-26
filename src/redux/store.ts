import { configureStore, Tuple, Action } from "@reduxjs/toolkit";
import reducer from './reducer'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './epic'

type ReduxState = ReturnType<typeof reducer>;

const epicMiddleware = createEpicMiddleware<Action, Action>();

// convert object to string and store in localStorage
const saveToLocalStorage = (state: ReduxState): void => {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem('jeopardyState', serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
const loadFromLocalStorage = (): ReduxState | undefined => {
  try {
    const serialisedState = localStorage.getItem('jeopardyState') as
      | string
      | null
    if (serialisedState === null || serialisedState === '') return undefined
    return JSON.parse(serialisedState) as ReduxState
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

const preloaded = loadFromLocalStorage()

const store = configureStore({
	reducer,
	preloadedState: preloaded as ReduxState,
	middleware: () => new Tuple(epicMiddleware),
});

epicMiddleware.run(rootEpic)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
