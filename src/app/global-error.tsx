'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function GlobalError({
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
    // global-error must include html and body tags
    <html>
    <body>
    <h2>Something went wrong! global error</h2>
    <button onClick={() => reset()}>Try again</button>
    </body>
    </html>
  )
}