'use client'
import { deleteTask } from '@/utils/actions'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button className='btn btn-error btn-xs' disabled={pending}>
      {pending ? '...' : 'delete'}
    </button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <div>
      <form action={deleteTask}>
        <input type='hidden' name='id' value={id} />

        <SubmitButton />
      </form>
    </div>
  )
}

export default DeleteForm
