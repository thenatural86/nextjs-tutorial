'use server'
import prisma from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export const createTask = async (formData) => {
  'use server'
  const content = formData.get('content')
  await prisma.task.create({
    data: {
      content,
    },
  })
  revalidatePath('/tasks')
}