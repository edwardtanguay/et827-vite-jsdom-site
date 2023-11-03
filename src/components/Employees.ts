import employees from '../data/employees.json';

export const Employees = () => {
	return `
	<h2>There are ${employees.length} employees</h2>

	<ul>
		${employees.map(employee => {
			return `<li>${employee.firstName} ${employee.lastName}</li>`;
		}).join('')}
	</ul>
	`
}