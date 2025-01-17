'use client'

import { useEffect } from 'react'

import {UserError} from "@/components/userError/userError";

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error(props: ErrorProps) {
  const { error, reset } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return <UserError error={error} reset={reset} />
}
