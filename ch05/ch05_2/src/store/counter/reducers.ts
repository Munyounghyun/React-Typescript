import * as T from './types'

const initialState: T.State = 0

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  console.log(action)
  switch (action.type) {
    case '@counter/setCounter':
      return state + action.payload
  }
  return state
}
