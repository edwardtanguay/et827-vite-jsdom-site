import employees from '../data/employees.json';

export const Employees = () => {
	return `
	<h2>There are ${employees.length} employees</h2>
	`
}