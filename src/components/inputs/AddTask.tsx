import styles from './AddTask.module.scss';
import { useState, MouseEvent } from "react";


const NewTask = () => {
	const [task, setTask] = useState<string>();
	return (
		<div className={styles.newTask}>
			<input
				type='text'
				placeholder='What do you need to do?'
				onChange={(e) => setTask(e.target.value)}
			/>
			<button className={styles.add} onClick={(e: MouseEvent<HTMLButtonElement>) => 2}>ADD</button>
		</div>
	);
};

export default NewTask;
