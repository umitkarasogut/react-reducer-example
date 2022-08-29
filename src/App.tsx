import React, { useReducer } from 'react';
import { currencyReducer, INITIAL_STATE } from './reducers/currencyReducer';
import { ActionType } from './Types';
import './style.css';

export default function App() {

	const [currencyState, dispatch] = useReducer(currencyReducer, INITIAL_STATE);

	const fetchCurrencies = async () => {
		dispatch({ type: ActionType.FETCH_START });
		fetch('https://api.frankfurter.app/latest?amount=1&from=USD&to=TRY')
			.then(resp => resp.json())
			.then((data) => dispatch({ type: ActionType.FETCH_SUCCESS, payload: { TRY: data.rates.TRY } }))
			.catch(err => dispatch({ type: ActionType.FETCH_FAIL }));
	};

	return (
		<div className='container'>
			<div>
				<button disabled={currencyState.loading} onClick={fetchCurrencies}> Fetch Currencies</button>
			</div>
			{currencyState.loading &&
				<span className='text-loading'>Loading..</span>
			}
			{currencyState.error &&
				<span className='text-fail'>Fetch Failed!!</span>
			}
			{currencyState?.payload?.TRY &&
				<span className='text-success'>1 USD equals {currencyState.payload.TRY} TRY</span>
			}
		</div >
	);
}
