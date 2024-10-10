import Row from '@/components/Row'
import { FONT_FAMILY, FontFamily } from '@/states/zitie'
import Joi from 'joi'
import SideAction from './side-action'

function Page({
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

const schema = Joi.object({
  text: Joi.string().required(),
  'font-family': Joi.string()
    .valid(...FONT_FAMILY)
    .default('default'),
  'page-size': Joi.number().min(1).max(100).default(32),
  'no-side-actions': Joi.boolean(),
})

interface SearchParams {
  text: string // Required string
  'font-family': FontFamily // Optional string, defaulting to 'default'
  'page-size': number // Optional number, defaulting to 32
  'no-side-actions'?: boolean
}

export default function PrintPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams)
  const { value, error } = schema.validate(searchParams)
  const params = value as SearchParams

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Page
        text={params.text}
        fontFamily={params['font-family']}
        pageSize={params['page-size']}
      />

      {params['no-side-actions'] || <SideAction />}
    </div>
  )
}
