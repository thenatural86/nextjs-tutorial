'use client'
import { createTaskCustom } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitBtn = () => {
  const { pending } = useFormStatus()
  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait...' : 'create task'}
    </button>
  )
}

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
      <div className='join w-full'>
        <input
          className='input input-bordered join-item w-full'
          placeholder='Type Here'
          type='text'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskForm
