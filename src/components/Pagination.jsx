import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<ul className="pagination">
			{pageNumbers.map((number) => (
				<h1 key={number} className="page-item">
					<a onClick={() => paginate(number)} href="javascript:">
						{number}
					</a>
				</h1>
			))}
		</ul>
	);
};

export default Pagination;
