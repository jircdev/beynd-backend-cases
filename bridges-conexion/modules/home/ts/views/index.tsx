import * as React from 'react';
import { useBinder } from '@beyond-js/react-18-widgets/hooks';
import { List } from './list';

export /*bundle*/
function View({ store }) {
	const [loading, setLoading] = React.useState(store.fetching);
	const [error, setError] = React.useState('');
	useBinder([store], () => {
		setLoading(store.fetching);
		setError(store.error);
	});

	const execute = async () => {
		const response = await store.getAllUsers();
		console.log(10, 'response', response);
	};

	const buttonContent = loading ? <div className='spinner'></div> : 'Execute';
	return (
		<div className='bug-testing-view'>
			<h1>Get all users</h1>
			<button className='execute-button' onClick={execute} disabled={loading}>
				{buttonContent}
			</button>

			<p className='error'>{error}</p>

			<List store={store} />
		</div>
	);
}
