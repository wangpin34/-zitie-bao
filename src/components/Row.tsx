import { FontFamily } from '@/states/zitie'
import classnames from 'classnames'

const spanStyle = {
  default: {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  delius: { fontSize: '0.8em', bottom: '0.2em' },
  'patrick hand': {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  schoolbell: {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  caveat: {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  kalam: {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  'gloria hallelujah': {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
  'kg primary dots': {
    fontSize: '0.8em',
    bottom: '0.2em',
  },
}

export default function Row({
  word,
  fontFamily,
}: {
  word: string
  fontFamily: FontFamily
}) {
  return (
    <div
      className={classnames(
        'rendered-row relative text-slate-400 w-full leading-none font-semibold',
        `font-${fontFamily.replaceAll(' ', '-')}`
      )}
      style={{
        borderStyle: 'solid',
        borderColor: 'currentColor',
        borderBottomWidth: 1,
        borderTopWidth: 1,
      }}
    >
      <div className='absolute w-full box-border border-current border-dashed border-b-[1px] top-[34%]'></div>
      <div className='absolute w-full box-border border-current border-dashed border-b-[1px] top-[67%]'></div>
      <span
        className='z-10 text-slate-700 px-1 tracking-wider relative'
        style={{ ...(spanStyle[fontFamily] || {}) }}
      >
        {word}
      </span>
    </div>
  )
}
