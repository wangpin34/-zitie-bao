export default function Row({ word }: { word: string }) {
  return (
    <div
      className='relative text-slate-400 leading-normal w-full'
      style={{
        borderStyle: 'solid',
        borderColor: 'currentColor',
        borderBottomWidth: '1px',
        borderTopWidth: '1px',
      }}
    >
      <div
        className='absolute top-[33%] w-full box-border '
        style={{
          borderStyle: 'dashed',
          borderColor: 'inherit',
          borderBottomWidth: '1px',
        }}
      ></div>
      <div
        className='absolute top-[67%] w-full box-border'
        style={{
          borderStyle: 'dashed',
          borderColor: 'currentColor',
          borderBottomWidth: '1px',
        }}
      ></div>
      <span className='relative z-10 text-slate-700 p-2'>{word}</span>
    </div>
  )
}
