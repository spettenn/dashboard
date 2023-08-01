import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTable } from 'react-table';

const CryptoTable = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://bravenewcoin.p.rapidapi.com/ohlcv',
			params: { size: '5' },
			headers: {
				'X-RapidAPI-Key': '6727fd07abmshdddcbc34023c21fp187140jsnab366a7a51bd',
				'X-RapidAPI-Host': 'bravenewcoin.p.rapidapi.com',
			},
		};

		axios
			.request(options)
			.then((response) => {
				console.log(response.data);
				// Format your data for the table here
				// Assuming the returned data is an array of objects,
				// if not you might need to map or reduce it to the desired format
				setData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Currency',
				accessor: 'currency', // accessor is the "key" in the data
			},
			{
				Header: 'Value',
				accessor: 'value',
			},
			// Add as many columns as you need
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<table {...getTableProps()} style={{ margin: '0 auto' }}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => {
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default CryptoTable;
