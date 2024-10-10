import Page from '@/components/paper'
import { FONT_FAMILY, FontFamily } from '@/states/zitie'
import Joi from 'joi'
import SideAction from './side-action'

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
