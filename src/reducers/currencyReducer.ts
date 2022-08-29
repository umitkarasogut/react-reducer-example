import { ActionType, currencyState, Action } from '../Types';

export const INITIAL_STATE: currencyState = {
	loading: false,
	payload: {
		TRY: null
	},
	error: false
};

export const currencyReducer = (state: currencyState, action: Action): currencyState => {
	switch (action.type) {
	case ActionType.FETCH_START:
		return {
			loading: true,
			error: false,
		};
	case ActionType.FETCH_SUCCESS:
		return {
			...state,
			loading: false,
			payload: action.payload
		};
	case ActionType.FETCH_FAIL:
		return {
			loading: false,
			error: true,
		};
	default:
		return state;
	}
};