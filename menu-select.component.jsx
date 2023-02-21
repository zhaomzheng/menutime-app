import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const menus = [
  { title: 'All Day Menu', start_time: '12:00PM', end_time: '12:00PM', current: true },
  { title: 'Lunch Menu', start_time: '12:00PM', end_time: '12:00PM', current: false },
  { title: 'Brunch Menu', start_time: '11:00AM', end_time: '2:00PM', current: false },
  { title: 'Dinner Menu', start_time: '5:00PM', end_time: '10:00PM', current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MenuSelect(props) {
  
  const [selected, setSelected] = useState(menus[0]);

  function handleMenuChange(menu) {
    setSelected(menu);
    props.onChange(menu.title);
  }

  return (
    <Listbox value={selected} onChange={handleMenuChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="sr-only">Select a menu</Listbox.Label>
          <div className="relative">
            <div className="inline-flex">
              <div className="inline-flex">
                <div className="inline-flex py-2 pr-1 text-black">
                  <p className="text-sm font-poppins font-semibold">{selected.title}</p>
                </div>
                <Listbox.Button className="inline-flex items-center p-2 text-sm font-medium text-white h focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-50">
                  <span className="sr-only">Change menu</span>
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
                {menus.map((menu) => (
                  <Listbox.Option
                    key={menu.title}
                    className={({ active }) =>
                      (active ? 'text-black bg-gray-100' : 'text-gray-900') + ' cursor-default select-none p-4 text-sm font-poppins'
                    }
                    value={menu}
                  >
                    {({ selected, active }) => (
                      <div className="flex flex-col">
                        <div className="flex justify-between">
                          <p className={selected ? 'font-medium text-menured-600' : 'font-medium'}>{menu.title}</p>
                        </div>
                        <p
                          className={classNames(selected ? 'text-menured-600' : 'text-gray-900', 'mt-1 text-xs')}
                        >
                          {menu.start_time} - {menu.end_time}
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
  );
}
