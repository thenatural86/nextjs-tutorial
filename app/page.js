import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.js tutorial</h1>
      <Link href='/client' className='btn btn-accent'>
        Go to Client
      </Link>
    </div>
  )
}

export default HomePage
