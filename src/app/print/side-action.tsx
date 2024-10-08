'use client'
import IonIosPrinterOutline from '@/components/IonIosPrinterOutline'
import {
  ArrowLeftIcon,
  InfoCircledIcon,
  Share1Icon,
} from '@radix-ui/react-icons'
import * as Toast from '@radix-ui/react-toast'
import { Flex, IconButton, Text } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
export default function SideAction() {
  const router = useRouter()
  const [showToast, setShowToast] = useState(false)
  const onPrint = useCallback(() => {
    window.print()
  }, [])
  return (
    <>
      <aside className='fixed bottom-8 right-2 z-10 print:hidden'>
        <Flex direction='column' gap='2'>
          <IconButton
            variant='classic'
            radius='full'
            className='shadow-md'
            onClick={onPrint}
          >
            <IonIosPrinterOutline />
          </IconButton>

          <IconButton
            variant='classic'
            radius='full'
            className='shadow-md'
            onClick={() => {
              navigator.clipboard.writeText(location.href)
              setShowToast(true)
            }}
          >
            <Share1Icon />
          </IconButton>
          <IconButton
            variant='classic'
            radius='full'
            className='shadow-md'
            onClick={() => router.back()}
          >
            <ArrowLeftIcon />
          </IconButton>
        </Flex>
      </aside>
      <Toast.Provider duration={2000}>
        <Toast.Root
          open={showToast}
          onOpenChange={setShowToast}
          className='rounded-lg shadow-md p-2 bg-white'
        >
          <Toast.Title>
            <Flex gap='2' align='center'>
              <InfoCircledIcon />
              <Text size='2'>链接已复制</Text>
            </Flex>
          </Toast.Title>
        </Toast.Root>
        <Toast.Viewport className='fixed bottom-0 right-0' />
      </Toast.Provider>
    </>
  )
}
