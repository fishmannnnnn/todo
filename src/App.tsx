import { ReactNode, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/header/Header';
import AddTask from './components/inputs/AddTask';
import TaskItem from './components/task/TaskItem';

export interface Task {
	id: string;
	name: string;
	isDone: boolean;
}
interface TaskList extends Array<Task> {}

function App() {
	const [taskList, setTaskList] = useState<TaskList>([
		{ id: '001', name: 'Wash the dishes', isDone: false },
		{ id: '002', name: 'Wash the floor', isDone: true },
	]);
	const updateTask = (newTask: Task) => {
		setTaskList((prev) =>
			prev.map((task) => {
				console.log({ ...task, ...newTask });
				return task.id === newTask.id ? { ...task, ...newTask } : task;
			})
		);
		console.log(taskList);
	};
	return (
		<>
			<Header />
			<div className={styles.page}>
				<div className={styles.new}>
					<AddTask />
				</div>
				<div className={styles.tasks}>
					{taskList.map((item, _i): ReactNode => {
						return (
							<div key={item.id}>
								<TaskItem task={item} updateTask={updateTask} />
							</div>
						);
					})}
					<button className={styles.clear}>
						<svg
							width='28'
							height='34'
							viewBox='0 0 28 34'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M15.4545 11.1273L13.9091 9.58182L7.72727 15.7636L1.54545 9.58182L0 11.1273L6.18182 17.3091L0 23.4909L1.54545 25.0364L7.72727 18.8545L13.9091 25.0364L15.4545 23.4909L9.27273 17.3091L15.4545 11.1273ZM24.7273 0H9.27273C7.57273 0 6.18182 1.39091 6.18182 3.09091V7.72727H9.27273V4.63636H24.7273V29.3636H9.27273V26.2727H6.18182V30.9091C6.18182 32.6091 7.57273 34 9.27273 34H24.7273C26.4273 34 27.8182 32.6091 27.8182 30.9091V3.09091C27.8182 1.39091 26.4273 0 24.7273 0Z'
								fill='#D98326'
							/>
						</svg>
						<div className={styles.clearTitle}>Clear Completed</div>
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
