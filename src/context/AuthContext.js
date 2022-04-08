import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'

// here is Reducer for Auth stuff
// dispatch is going to use this to find out what to do
// per the action
const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state
	}
}

// action function called with dispatch
// return function that does a thing
// send this to createDataContext:
//	const Provider = ({ children }) => {
//		const [state, dispatch]
const signup = (dispatch) => {
	return async ({ email, password }) => {
		try {
			// end point! call the backend
			const response = await trackerApi.post('/signup', { email, password })
			console.log(response.data)
		} catch (err) {
			console.log(err.response.data)
		}
	}
}

const signin = (dispatch) => {
	return ({ email, password }) => {
		// Try to signin
		// Handle success by updating state
		// Handle failure by showing error message (somehow)
	}
}

const signout = (dispatch) => {
	return () => {
		// somehow sign out!!!
	}
}

export const { Provider, Context } = createDataContext(
	authReducer,
	{ signin, signout, signup },
	{ isSignedIn: false }
)
