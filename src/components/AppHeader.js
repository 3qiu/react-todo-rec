import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus, updateFilterPriority } from '../slices/todoSlice';

// where does styles.appHeader come from//

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filterPriority = useSelector((state) => state.todo.filterPriority);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    dispatch(updateFilterStatus(e.target.value));
  };

  const updatePriority = (e) => {
    dispatch(updateFilterPriority(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>

      <SelectButton id="status" value={filterStatus} onChange={updateFilter}>
        <option value="all">ALL Status</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>

      <SelectButton
        id="priority"
        value={filterPriority}
        onChange={updatePriority}
      >
        <option value="all">ALL Priority</option>
        <option value="do">Do</option>
        <option value="decide">Decide</option>
        <option value="delegate">Delegate</option>
        <option value="delete">Delete</option>
      </SelectButton>

      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
