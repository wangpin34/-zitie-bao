'use client'
import Row from '@/components/Row'
import { FONT_FAMILY, FontFamily, useFontFamilyStore } from '@/states/zitie'
import { DownloadIcon } from '@radix-ui/react-icons'
import {
  Box,
  Button,
  Flex,
  Grid,
  Select,
  Text,
  TextArea,
} from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useMemo, useState } from 'react'

export default function Home() {
  const [text, setText] = useState('Welcome to')

  const font = useFontFamilyStore((state) => state.value)
  const setFont = useFontFamilyStore((state) => state.setValue)
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
    <div className='relative bg-slate-100'>
      <div className='p-4 grid gap-2 md:grid-cols-2 overflow-auto'>
        <div className='text-2xl bg-white px-4 py-6 rounded-xl flex flex-col gap-4'>
          {rows.map((word, index) => (
            <Row key={index} word={word} />
          ))}
        </div>
        <Grid
          rows='auto auto'
          gap='4'
          className='bg-white px-4 py-6 rounded-xl'
        >
          <TextArea
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            className='w-full h-96 md:h-full text-2xl'
          />
          <Flex width='full' direction='column' gap='2' align='end'>
            <Flex align='center' className='capitalize' width='20' gap='1'>
              <Text as='label'>字体</Text>
              <Select.Root
                value={font}
                onValueChange={(next: FontFamily) => setFont(next)}
              >
                <Select.Trigger placeholder='选择字体' />
                <Select.Content>
                  {FONT_FAMILY.map((font, index) => (
                    <Select.Item
                      key={index}
                      value={font}
                      className='capitalize'
                    >
                      {font}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            </Flex>
            <Box width='full' mt='4'>
              <Button
                onClick={() =>
                  router.push(`/print?text=${text}&font-family=${font}`)
                }
              >
                <DownloadIcon /> 打印
              </Button>
            </Box>
          </Flex>
        </Grid>
      </div>
    </div>
  )
}
