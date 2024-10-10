import { FontFamily } from '@/states/zitie'
import Row from './row'

export default function Paper({
  text,
  fontFamily,
  pageSize,
}: {
  text: string
  fontFamily: FontFamily
  pageSize: number
}) {
  const words = text.split(/\s+/)
  const restRows = new Array(pageSize - words.length).fill(0)

  return (
    <div className='w-[210mm] h-[297mm] m-auto box-border p-[5mm] flex flex-col gap-2 text-2xl'>
      {words.map((word, index) => (
        <Row key={index} word={word} fontFamily={fontFamily as FontFamily} />
      ))}
      {restRows.map((_, index) => (
        <Row key={index} word={'\n'} fontFamily={fontFamily as FontFamily} />
      ))}
    </div>
  )
}
