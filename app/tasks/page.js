import DeleteForm from '@/components/DeleteForm'
import TaskForm from '@/components/TaskForm'
import TaskList from '@/components/TaskList'

const TasksPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>TasksPage</h1>
      <TaskForm />
      <TaskList />
      <DeleteForm />
    </div>
  )
}

export default TasksPage
