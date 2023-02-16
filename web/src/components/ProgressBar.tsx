interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  const progressStyles = {
    width: `${props.progress}%`
  }

  return (

    <div className='h-3 rounded-xl bg-blue-400 w-full mt-4'>
      <div
        role="progressbar"
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={props.progress}
        //className='h-3 rounded-xl bg-red-700 w-3/4'>
        className='h-3 rounded-xl bg-red-700 '
        style={progressStyles}
      //style={{ width: `${props.progress}%`}}
      >
      </div>
    </div>
  )
}