import * as Popover from '@radix-ui/react-popover'
import clsx from 'clsx'
import { ProgressBar } from './ProgressBar'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
interface HabitDayProps {
  date: Date
  completed?: number
  amount?: number
}

export function HabitDay({ completed = 0, amount = 0 }: HabitDayProps) {
  //export function HabitDay(props: HabitDayProps) {

  //const CompletedPercentage = Math.round((completed / amount) * 100)

  const CompletedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0
  return (
    <Popover.Root>
      <Popover.Trigger className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 -lg", {
        "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 -lg": CompletedPercentage === 0,
        'bg-red-900 border-red-800': CompletedPercentage > 0 && CompletedPercentage < 20,
        'bg-red-800 border-red-700': CompletedPercentage >= 20 && CompletedPercentage < 40,
        'bg-red-700 border-red-600': CompletedPercentage >= 40 && CompletedPercentage < 60,
        'bg-red-600 border-red-500': CompletedPercentage >= 60 && CompletedPercentage < 80,
        'bg-red-500 border-red-400': CompletedPercentage >= 80,
      })}></Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-100 flex flex-col'>
          <span className='font-semibold text-zinc-400'>Quinta-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>02/01</span>

          <ProgressBar progress={CompletedPercentage} />

          <div className='mt-6 flex flex-col gap-3'>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div
                className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800
                group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'
              >
                <Checkbox.Indicator
                  className=''
                >
                  <Check
                    size={20}
                    className='text-white'
                  />
                </Checkbox.Indicator>
              </div>
              <span
                className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-500'
              >
                drink water
              </span>
            </Checkbox.Root>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div
                className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800
                group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'
              >
                <Checkbox.Indicator
                  className=''
                >
                  <Check
                    size={20}
                    className='text-white'
                  />
                </Checkbox.Indicator>
              </div>
              <span
                className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-500'
              >
                drink water
              </span>
            </Checkbox.Root>
            <Checkbox.Root
              className='flex items-center gap-3 group'
            >
              <div
                className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800
                group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'
              >
                <Checkbox.Indicator
                  className=''
                >
                  <Check
                    size={20}
                    className='text-white'
                  />
                </Checkbox.Indicator>
              </div>
              <span
                className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-500'
              >
                drink water
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow height={8} width={16} className='fill-red-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

