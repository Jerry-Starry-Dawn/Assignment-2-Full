import { Button } from '@/components/custom/button'
import { Input } from '@/components/ui/input'
import { authorServices } from '@/services/author.service';
import { UpdateAuthor } from '@/types/author';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


function UpdateModal({
  isOpen,
  onClose,
  id 
}: {
  isOpen: boolean,
  onClose: () => void,
  id: string
}) {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const navigate = useNavigate();
  const handleUpdateAuthor= async (
    id : string
  ) => {
    
    const data: UpdateAuthor = {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        address: address,
        email: email,
        city: city,
        state: state,
        zip: zip
    }
    const res = await authorServices.updateAuthor(id, data)
    if (res.data) {
      onClose()
      navigate(0)
    }
    console.log(res)
  }

  useEffect(() => {
    const handleAuthorDetail = async (id: string) => {
      const res = await authorServices.getAuthorDetail(id)
      if (res.data) {
        console.log(res.data)
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setPhone(res.data.phone)
        setCity(res.data.city)
        setAddress(res.data.address)
        setState(res.data.state)
        setZip(res.data.zip)
        setEmail(res.data.email)
      }
    }
    handleAuthorDetail(id)
  }, [id])

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
                    <Input placeholder='First Name' value={firstName} onChange={
                      (e) => setFirstName(e.target.value)
                    }/>
                    <Input placeholder='Last Name' value={lastName} onChange={
                      (e) => setLastName(e.target.value)
                    }/>
                    <Input placeholder='City' value={city} onChange={
                      (e) => setCity(e.target.value)
                    }/>
                    <Input placeholder='State' value={state} onChange={
                      (e) => setState(e.target.value)
                    }/>
                    <Input placeholder='ZIP Code' value={zip} onChange={
                      (e) => setZip(e.target.value)
                    }/>
                    <Input placeholder='Address' value={address} onChange={
                      (e) => setAddress(e.target.value)
                    }/>
                    <Input placeholder='Phone Number' value={phone} onChange={
                      (e) => setPhone(e.target.value)
                    }/>
                    <Input placeholder='Email' value={email} onChange={
                      (e) => setEmail(e.target.value)
                    }/>
                    <Button  variant='outline' 
                    onClick={() => 
                      handleUpdateAuthor(id)
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

export default UpdateModal