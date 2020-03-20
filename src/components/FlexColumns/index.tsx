import React from 'react';
import Columns from 'react-columns';
import Card from '../Card';

const queries = [{
	columns: 2,
	query: 'min-width: 500px',
}, {
	columns: 3,
	query: 'min-width: 1000px',
}];

const cardProps = [
	'http://sapp.flipboard.cn/assets/bk-a.jpg',
	'http://sapp.flipboard.cn/assets/bk-b.jpg',
	'http://sapp.flipboard.cn/assets/bk-c.png',
	'http://sapp.flipboard.cn/assets/bk-d.jpeg',
	'http://sapp.flipboard.cn/assets/bk-e.png',
];

const FlexColumn = () => (
	<Columns queries={queries}>
		{cardProps.map(item => (
			<Card image={item} />
		))}
	</Columns>
);
export default FlexColumn;
