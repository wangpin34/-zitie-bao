'use client'
import Row from '@/components/Row'
import { DownloadIcon } from '@radix-ui/react-icons'
import { Button, TextArea } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function Home() {
  const [text, setText] = useState('hand plate')
  const router = useRouter()
  const rows = useMemo(() => {
    const words = text.split(/\s/)
    const _rows = new Array<string>(10)
    for (let i = 0; i < _rows.length; i++) {
      if (i < words.length) {
        _rows[i] = words[i]
      } else {
        _rows[i] = '\u200b'
      }
    }
    return _rows
  }, [text])

  return (
    <div className='relative'>
      <div className='p-4 grid gap-2 md:grid-cols-2 overflow-auto'>
        <TextArea
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          className='w-full h-96 md:h-full text-2xl'
        />
        <div className='flex flex-col gap-2 text-2xl'>
          {rows.map((word, index) => (
            <Row key={index} word={word} />
          ))}
        </div>
      </div>
      <footer className='p-4  flex justify-end'>
        <Button onClick={() => router.push(`/print?text=${text}`)}>
          <DownloadIcon /> 打印
        </Button>
      </footer>
    </div>
  )
}
