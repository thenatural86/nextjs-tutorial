import Link from 'next/link'

const ClientPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>ClientPage</h1>
      <Link href='/' className='text-2xl'>
        home page
      </Link>
    </div>
  )
}

export default ClientPage
