'use client'
import Row from '@/components/Row'
import { useSearchParams } from 'next/navigation'
export default function PrintPage() {
  const searchParams = useSearchParams()
  const text = searchParams.get('text') ?? '\n\n\n\n'
  const theme = searchParams.get('theme') ?? 'default'
  const words = text.split(/\s/)
  return (
    <div className='p-4 flex flex-col gap-2 text-2xl'>
      {words.map((word, index) => (
        <Row key={index} word={word} />
      ))}
    </div>
  )
}
