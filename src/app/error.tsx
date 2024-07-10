'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Title } from '@/components/Title/Title'
import { Button } from '@/components/Button/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-screen flex flex-col items-center justify-center">
      <Title>Erro</Title>

      <h2 className="text-3xl font-extrabold mb-4">Algo deu errado!</h2>
      <p className="mb-8 text-lg text-red-500">{error.message}</p>
      <p className="mb-2 text-lg">Tente novamente mais tarde, Se o erro persistir contate o suporte</p>
      <p className="mb-8 text-lg">Email suporte: diogo.formal03@gmail.com</p>
      
      <Button 
        onClick={() => reset()} 
        className="bg-yellow-500 text-white hover:bg-yellow-600"
      >
        Tentar novamente
      </Button>
    </div>
  )
}
