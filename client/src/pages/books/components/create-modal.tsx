import { Button } from '@/components/custom/button'
import MultiSelect from '@/components/custom/multi-select'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Author } from '@/pages/authors/data/schema'
import { Publisher } from '@/pages/publishers/data/schema'
import { authorServices } from '@/services/author.service'
import { bookService } from '@/services/book.service'
import { publisherServices } from '@/services/publisher.service'
import { UpdateBook } from '@/types/book'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [title, setTitle] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [ytdSales, setYtdSales] = useState<number>(0)
  const [publisher, setPublisher] = useState<string>('')
  const [royalty, setRoyalty] = useState<number>(0)
  const [notes, setNotes] = useState<string>('')
  const [price, setPrice] = useState<number>(0)
  const [advanced, setAdvanced] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const navigate = useNavigate()
  const onCreateBook = async () => {
    const data: UpdateBook = {
      title: title,
      type: type,
      price: price,
      advance: advanced,
      royalty: royalty,
      ytdSales: ytdSales,
      notes: notes,
      publishedDate: date.toISOString(),
      publisherId: +publisher,
      authorIds: selectedAuthors.map((a) => +a),
    }
    const res = await bookService.createBook(data)
    if (res.data) {
      onClose()
      navigate(0)
    }
    console.log(res)
  }

  const [publishers, setPublishers] = useState<Publisher[]>([])
  const [authors, setAuthors] = useState<Author[]>([])

  useEffect(() => {
    const getPublishers = async () => {
      const res = await publisherServices.getPublishers()
      setPublishers(res.data.items)
    }
    const getAuthors = async () => {
      const res = await authorServices.getAuthors()
      setAuthors(res.data.items)
    }
    getPublishers()
    getAuthors()
  }, [])

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10 text-black' onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='z-100 fixed inset-0 bg-black/70' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full transform overflow-hidden rounded-lg border border-[#49494d] bg-[#FFF] p-6 text-left align-middle shadow-xl transition-all lg:w-[692px]'>
                  <div className='flex flex-col gap-2 p-2'>
                    <Input
                      placeholder='Title'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <Input
                      placeholder='Type'
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                    <Select value={publisher} onValueChange={setPublisher}>
                      <SelectTrigger>
                        <SelectValue placeholder='Publisher' />
                      </SelectTrigger>
                      <SelectContent>
                        {publishers.map((publisher) => (
                          <SelectItem
                            key={publisher.id}
                            value={publisher.id.toString()}
                          >
                            {publisher.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder='Price'
                      value={price}
                      type='number'
                      onChange={(e) => setPrice(e.target.valueAsNumber || 0)}
                    />
                    <Input
                      placeholder='Advance'
                      value={advanced}
                      type='number'
                      onChange={(e) => setAdvanced(e.target.valueAsNumber || 0)}
                    />
                    <Input
                      placeholder='Royalty'
                      value={royalty}
                      type='number'
                      onChange={(e) => setRoyalty(e.target.valueAsNumber || 0)}
                    />
                    <Input
                      placeholder='YTD Sales'
                      value={ytdSales}
                      type='number'
                      onChange={(e) => setYtdSales(e.target.valueAsNumber || 0)}
                    />
                    <Input
                      placeholder='notes'
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                    <Input
                      type='date'
                      value={date.toISOString().split('T')[0]}
                      onChange={(e) =>
                        setDate(e.target.valueAsDate || new Date())
                      }
                    />
                    <MultiSelect
                      onChange={(selected) => {
                        setSelectedAuthors(selected)
                      }}
                      value={selectedAuthors}
                      values={authors.map((a) => ({
                        value: a.id.toString(),
                        label: a.firstName + ' ' + a.lastName,
                      }))}
                    />
                    <Button
                      type='button'
                      variant='outline'
                      className='text-white'
                      onClick={() => onCreateBook()}
                    >
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
