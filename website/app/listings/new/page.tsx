'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { CATEGORIES } from '@/lib/categories'
import { listingCreateSchema, type ListingCreateInput } from '@/lib/schemas/listing'

export default function NewListingPage() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ListingCreateInput>({
    resolver: zodResolver(listingCreateSchema),
    defaultValues: {
      title: '',
      category: CATEGORIES[0],
      pricePerDayUsd: 1,
      imageUrl: '',
      ownerName: '',
      location: '',
    },
  })

  // Listen for AI assistant form fill event
  useEffect(() => {
    const handleFillForm = async (event: CustomEvent) => {
      const { data, animated } = event.detail
      
      if (!animated) {
        // Fill instantly (fallback)
        if (data.title) setValue('title', data.title)
        if (data.category) setValue('category', data.category)
        if (data.pricePerDayUsd) setValue('pricePerDayUsd', data.pricePerDayUsd)
        if (data.imageUrl) setValue('imageUrl', data.imageUrl)
        if (data.ownerName) setValue('ownerName', data.ownerName)
        if (data.location) setValue('location', data.location)
        return
      }

      // Animated typing effect
      const typeText = async (fieldName: keyof typeof data, text: string, delay = 30) => {
        let currentText = ''
        for (let i = 0; i < text.length; i++) {
          currentText += text[i]
          setValue(fieldName as any, currentText)
          await new Promise(resolve => setTimeout(resolve, delay))
        }
      }

      // Fill fields one by one with typing animation
      if (data.title) {
        await typeText('title', data.title, 40)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      if (data.category) {
        setValue('category', data.category)
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      
      if (data.pricePerDayUsd) {
        const priceText = data.pricePerDayUsd.toString()
        await typeText('pricePerDayUsd' as any, priceText, 50)
        setValue('pricePerDayUsd', data.pricePerDayUsd)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      if (data.imageUrl) {
        await typeText('imageUrl', data.imageUrl, 20)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      if (data.ownerName) {
        await typeText('ownerName', data.ownerName, 50)
        await new Promise(resolve => setTimeout(resolve, 300))
      }
      
      if (data.location) {
        await typeText('location', data.location, 50)
      }
    }

    window.addEventListener('fillListingForm', handleFillForm as EventListener)
    return () => {
      window.removeEventListener('fillListingForm', handleFillForm as EventListener)
    }
  }, [setValue])

  const onSubmit = async (values: ListingCreateInput) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) {
        // eslint-disable-next-line no-console
        console.error('Failed to create listing')
        return
      }
      reset()
      router.push('/listings')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10">
      <div
        className="relative w-full max-w-2xl rounded-2xl 
        bg-white/8 supports-[backdrop-filter]:bg-white/10 backdrop-blur-md 
        ring-1 ring-inset ring-white/20 
        shadow-[0_10px_30px_-10px_rgba(0,0,0,.35)]
        after:absolute after:inset-0 after:rounded-2xl after:pointer-events-none after:ring-1 after:ring-white/10
        p-8"
      >
        <h1 className="text-3xl font-bold mb-6 text-white">Post a new listing</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Title</label>
            <input
              type="text"
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              placeholder="e.g., GoPro HERO 9"
              {...register('title')}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-200">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Category</label>
            <select
              className="w-full rounded-lg bg-white/15 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              {...register('category')}
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-sm text-red-200">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Price per day (USD)</label>
            <input
              type="number"
              step="0.01"
              min={0}
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              {...register('pricePerDayUsd', { valueAsNumber: true })}
            />
            {errors.pricePerDayUsd && (
              <p className="mt-1 text-sm text-red-200">{errors.pricePerDayUsd.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Image URL</label>
            <input
              type="url"
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              placeholder="https://..."
              {...register('imageUrl')}
            />
            {errors.imageUrl && (
              <p className="mt-1 text-sm text-red-200">{errors.imageUrl.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Owner name</label>
            <input
              type="text"
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              placeholder="Your name"
              {...register('ownerName')}
            />
            {errors.ownerName && (
              <p className="mt-1 text-sm text-red-200">{errors.ownerName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Location</label>
            <input
              type="text"
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              placeholder="City, State"
              {...register('location')}
            />
            {errors.location && (
              <p className="mt-1 text-sm text-red-200">{errors.location.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,.2)] disabled:opacity-60"
          >
            {submitting ? 'Posting…' : 'Post listing'}
          </button>
          </form>
      </div>
    </div>
  )
}


