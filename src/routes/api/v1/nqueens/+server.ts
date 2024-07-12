import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { NQueens } from './nqueens';

export const GET: RequestHandler = ({ url }) => {
	let n = 8;

	try {
		n = Number(url.searchParams.get('n') || '8');
	} catch (e) {
		error(
			400,
			JSON.stringify({
				error: "parameter 'n' is not a number"
			})
		);
	}

	if (n < 2) {
		error(
			400,
			JSON.stringify({
				error: "parameter 'n' should be >= 2"
			})
		);
	}

	const nqueens = new NQueens(n);
	nqueens.start();

	return new Response(
		JSON.stringify({
			nqueens: n,
			result: nqueens.count
		})
	);
};
