'use client'
import IonIosPrinterOutline from '@/components/IonIosPrinterOutline'
import Row from '@/components/Row'
import usePixelsPerMM from '@/hooks/usePixelsPerMM'
import { FONT_FAMILY, FontFamily, useFontFamilyStore } from '@/states/zitie'
import { Button, Flex, Grid, Select, Text, TextArea } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useCallback, useMemo, useRef, useState } from 'react'

export default function Home() {
  const [text, setText] = useState('Welcome to')
  const previewRef = useRef<HTMLDivElement>(null)
  const pixelsPerMM = usePixelsPerMM()
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

  const handlePrint = useCallback(() => {
    const heightOfA4 = 297 // mm
    const yMargin = 10 // mm
    const gap = 8 // pixels
    const rowHeight = 34 // pixels, 26px for text and 8px for gap

    const restMMonY = heightOfA4 - yMargin
    const restPixesOnY = restMMonY * pixelsPerMM
    const pageSize = Math.floor((restPixesOnY + gap) / rowHeight)

    router.push(`/print?text=${text}&font-family=${font}&page-size=${pageSize}`)
  }, [text, font, pixelsPerMM])

  return (
    <div className='w-screen h-screen relative bg-slate-100'>
      <div className='p-4 grid gap-2 md:grid-cols-2 overflow-auto'>
        <div
          className='max-w-[210mm] text-2xl bg-white p-4 rounded-xl flex flex-col gap-2 print:w-[210mm]'
          ref={previewRef}
        >
          {rows.map((word: string, index: number) => (
            <Row key={index} word={word} fontFamily={font} />
          ))}
        </div>
        <Grid rows='auto auto' gap='4' className='bg-white p-4 rounded-xl'>
          <TextArea
            value={text}
            onChange={(event) => setText(event.currentTarget.value)}
            className='w-full md:h-80 md:w-content text-2xl'
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
            <Flex mt='4' gap='2'>
              <Button onClick={handlePrint} variant='outline'>
                <IonIosPrinterOutline /> 打印
              </Button>
            </Flex>
          </Flex>
        </Grid>
      </div>
    </div>
  )
}
