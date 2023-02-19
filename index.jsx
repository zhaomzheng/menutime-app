import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'

const Menu = [
  { title: 'All Day Menu', start_time: '12:00PM', end_time: '12:00PM', current: true },
  { title: 'Lunch Menu', start_time: '12:00PM', end_time: '12:00PM', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MenuSelect() {
  const [selected, setSelected] = useState(Menu[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only"> Change published status </Listbox.Label>
          <div className="relative">
            <div className="inline-flex ">
              <div className="inline-flex ">
                <div className="inline-flex  py-2  pr-1 text-black ">
                  <p className="text-sm font-poppins font-semibold">{selected.title}</p>
                </div>
                <Listbox.Button className="inline-flex items-center p-2 text-sm font-medium text-white h focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only">Change published status</span>
                  <ChevronDownIcon className="h-5 w-5 text-black" aria-hidden="true" />
                </Listbox.Button>
              </div>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute left-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {Menu.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-black bg-gray-100' : 'text-gray-900',
                        'cursor-default select-none p-4 text-sm font-poppins'
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? ' font-medium text-menured-600' : 'font-medium'}>{option.title}</p>
  
                        </div>
                        <p className={classNames(selected ? 'text-menured-600 ' : 'text-gray-900 ', 'mt-1 text-xs' ) }>
                          {option.start_time } - {""}
                          {option.end_time }

                        </p>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
