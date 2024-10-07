import { FontFamily, useFontFamilyStore } from '@/states/zitie'
import classnames from 'classnames'

const defaultTopOffset = ['34%', '67%']
const kgPrimaryDotsTopOffset = ['40%', '73%']

const fontToOffset = {
  default: defaultTopOffset,
  'kg primary dots': kgPrimaryDotsTopOffset,
}

export default function Row({
  word,
  fontFamily,
}: {
  word: string
  fontFamily?: FontFamily
}) {
  const { value: fontFamilyFromStore } = useFontFamilyStore()
  const resolvedFontFamily = fontFamily ?? fontFamilyFromStore
  return (
    <div
      className={classnames(
        'relative text-slate-400 w-full mb-4 leading-none font-semibold',
        `font-${resolvedFontFamily.replaceAll(' ', '-')}`
      )}
      style={{
        borderStyle: 'solid',
        borderColor: 'currentColor',
        borderBottomWidth: 1,
        borderTopWidth: 1,
      }}
    >
      <div
        className={classnames('absolute w-full box-border')}
        style={{
          borderStyle: 'dashed',
          borderColor: 'inherit',
          borderBottomWidth: '1px',
          top: fontToOffset[resolvedFontFamily]?.[0],
        }}
      ></div>
      <div
        className={classnames('absolute w-full box-border')}
        style={{
          borderStyle: 'dashed',
          borderColor: 'currentColor',
          borderBottomWidth: '1px',
          top: fontToOffset[resolvedFontFamily]?.[1],
        }}
      ></div>
      <span className='z-10 text-slate-700 px-1 tracking-wider'>{word}</span>
    </div>
  )
}
