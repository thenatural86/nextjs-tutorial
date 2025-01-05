import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Link href='/about' className='text-2xl'>
        about page
      </Link>
      <Link href='/client' className='text-2xl'>
        client page
      </Link>
      <Link href='/drinks' className='text-2xl'>
        drinks page
      </Link>
      <Link href='/prisma-example' className='text-2xl'>
        prisma example page
      </Link>
      <Link href='/query' className='text-2xl'>
        query page
      </Link>
      <Link href='/tasks' className='text-2xl'>
        tasks page
      </Link>
    </div>
  )
}

export default HomePage
