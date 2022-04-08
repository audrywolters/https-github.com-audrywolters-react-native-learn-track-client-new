import React, { useReducer } from 'react'

// this file is reused by other Context files

// defaultValue is state's default
export default (reducer, actions, defaultValue) => {
	const Context = React.createContext()

	// Provider is a React component
	const Provider = ({ children }) => {
		// here is that state!
		// reducer will take care of specific action
		const [state, dispatch] = useReducer(reducer, defaultValue)

		// actions are functions in the reducer
		// dispatch will call the action in question
		// and let the the reducer know it's needed
		const boundActions = {}
		for (let key in actions) {
			// look up the exact action
			// if match, call dispatch (so it calls the action in question)
			boundActions[key] = actions[key](dispatch)
			// where are actions are being captured from? what is this's parent?
		}

		return (
			// send state and reducer actions to the App's children
			<Context.Provider value={{ state, ...boundActions }}>
				{children}
			</Context.Provider>
		)
	}

	// Context is object we use to get access to Provider
	// Provider is all data for the rest of the app
	return { Context, Provider }
}
