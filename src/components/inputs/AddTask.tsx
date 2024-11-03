import styles from './AddTask.module.scss';
import { useState } from 'react';

interface Props {
  addTask: Function;
}

const AddTask = ({ addTask }: Props) => {
  const [task, setTask] = useState('');
  const handleClick = () => {
    if (task !== '' && task !== undefined) {
      addTask(task);
      setTask('');
    }
  };
  return (
    <div className={styles.newTask}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button className={styles.add} onClick={handleClick}>
        ADD
      </button>
    </div>
  );
};

export default AddTask;
