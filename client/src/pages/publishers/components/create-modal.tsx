import { Button } from '@/components/custom/button'
import { Input } from '@/components/ui/input'
import { publisherServices } from '@/services/publisher.service';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useNavigate } from "react-router-dom";


function CreateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean,
  onClose: () => void,
}) {

  const [name, setName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const navigate = useNavigate();

  const handleCreatePublisher = async () => {
    const res = await publisherServices.createPublisher({
      name: name,
      city: city,
      state: state,
      country: country
    })
    if (res.data) {
      onClose()
      navigate(0)
    }
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 z-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-lg border border-[#49494d] bg-[#FFF] p-6 text-left align-middle shadow-xl transition-all lg:w-[692px]">
                  <div className='flex flex-col gap-2 p-2'>
                    <h1 className='font-bold text-lg'>Create Publisher</h1>
                    <Input placeholder='Name' value={name} onChange={
                      (e) => setName(e.target.value)
                    } />
                    <Input placeholder='City' value={city} onChange={
                      (e) => setCity(e.target.value)
                    } />
                    <Input placeholder='State' value={state} onChange={
                      (e) => setState(e.target.value)
                    } />
                    <Input placeholder='Country' value={country} onChange={
                      (e) => setCountry(e.target.value)
                    } />
                    <Button variant='outline'
                      onClick={() =>
                        handleCreatePublisher()
                      }>
                      Submit
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CreateModal

