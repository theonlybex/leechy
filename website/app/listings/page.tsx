'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { CATEGORIES } from '@/lib/categories'

type Listing = {
  id: string
  title: string
  pricePerDayUsd: number
  imageUrl: string
  category: string
  ownerName: string
  location: string
  createdAt: string
  popularity: number
}

// Categories moved to shared lib

// Temporary mock data until backend/API is wired
const MOCK_LISTINGS: Listing[] = [
  {
    id: '1',
    title: 'Basketball',
    pricePerDayUsd: 8,
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    category: 'Sports',
    ownerName: 'Jennifer R',
    location: 'Austin, TX',
    createdAt: '2024-12-01T00:00:00Z',
    popularity: 82,
  },
  {
    id: '2',
    title: 'Jackery Battery Charger',
    pricePerDayUsd: 6,
    imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4d8?q=80&w=1200&auto=format&fit=crop',
    category: 'Electronics',
    ownerName: 'Juan Carlos L',
    location: 'Reno, NV',
    createdAt: '2025-01-22T00:00:00Z',
    popularity: 65,
  },
  {
    id: '3',
    title: 'Smart TV',
    pricePerDayUsd: 25,
    imageUrl: 'https://images.unsplash.com/photo-1581905764498-f1b60bae941a?q=80&w=1200&auto=format&fit=crop',
    category: 'Electronics',
    ownerName: 'Laura S',
    location: 'Miami, FL',
    createdAt: '2025-02-15T00:00:00Z',
    popularity: 92,
  },
  {
    id: '4',
    title: 'Insulated Bottle',
    pricePerDayUsd: 1.5,
    imageUrl: 'https://images.unsplash.com/photo-1591369822090-ffed2fef8e16?q=80&w=1200&auto=format&fit=crop',
    category: 'Outdoors',
    ownerName: 'Kareem A',
    location: 'Chicago, IL',
    createdAt: '2025-03-05T00:00:00Z',
    popularity: 44,
  },
  {
    id: '5',
    title: 'Rowing Machine',
    pricePerDayUsd: 5,
    imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2f52e3?q=80&w=1200&auto=format&fit=crop',
    category: 'Workout',
    ownerName: 'Jose L',
    location: 'Seattle, WA',
    createdAt: '2025-02-05T00:00:00Z',
    popularity: 70,
  },
  {
    id: '6',
    title: 'GoPro 9',
    pricePerDayUsd: 8,
    imageUrl: 'https://images.unsplash.com/photo-1580316018380-9f7a0b2b5a8f?q=80&w=1200&auto=format&fit=crop',
    category: 'Electronics',
    ownerName: 'Noopur T',
    location: 'NYC, NY',
    createdAt: '2024-11-21T00:00:00Z',
    popularity: 88,
  },
  {
    id: '7',
    title: 'Logitech Driving Wheel',
    pricePerDayUsd: 75,
    imageUrl: 'https://images.unsplash.com/photo-1614523809324-0f48ba037a9c?q=80&w=1200&auto=format&fit=crop',
    category: 'Electronics',
    ownerName: 'Noopur T',
    location: 'NYC, NY',
    createdAt: '2025-03-01T00:00:00Z',
    popularity: 54,
  },
  {
    id: '8',
    title: '3-person tent',
    pricePerDayUsd: 10,
    imageUrl: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200&auto=format&fit=crop',
    category: 'Outdoors',
    ownerName: 'Noopur T',
    location: 'Denver, CO',
    createdAt: '2025-01-05T00:00:00Z',
    popularity: 73,
  },
  {
    id: '9',
    title: 'Lawnmower',
    pricePerDayUsd: 20,
    imageUrl: 'https://images.unsplash.com/photo-1602595688238-9dd16f39a6d1?q=80&w=1200&auto=format&fit=crop',
    category: 'Tools & Machinery',
    ownerName: 'Juan Carlos L',
    location: 'San Jose, CA',
    createdAt: '2024-10-18T00:00:00Z',
    popularity: 41,
  },
]

export default function ListingsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [minPrice, setMinPrice] = useState(1)
  const [maxPrice, setMaxPrice] = useState(10000)
  const [sort, setSort] = useState<'Newest' | 'Price: Low to High' | 'Price: High to Low' | 'Popular'>('Newest')
  const [page, setPage] = useState(1)
  const pageSize = 12

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat])
    setPage(1)
  }

  const filtered = useMemo(() => {
    let items = MOCK_LISTINGS.filter(l =>
      (selectedCategories.length === 0 || selectedCategories.includes(l.category)) &&
      l.pricePerDayUsd >= minPrice && l.pricePerDayUsd <= maxPrice
    )

    switch (sort) {
      case 'Price: Low to High':
        items = items.sort((a, b) => a.pricePerDayUsd - b.pricePerDayUsd)
        break
      case 'Price: High to Low':
        items = items.sort((a, b) => b.pricePerDayUsd - a.pricePerDayUsd)
        break
      case 'Popular':
        items = items.sort((a, b) => b.popularity - a.popularity)
        break
      case 'Newest':
      default:
        items = items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        break
    }

    return items
  }, [selectedCategories, minPrice, maxPrice, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <>
      <div className="fixed inset-0 bg-white" aria-hidden="true" />
      <div className="container mx-auto px-4 py-6 relative z-10">

      <div className="mt-5 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-6">
        {/* Sidebar Filters */}
        <aside className="bg-gradient-to-r from-cyan-700/35 to-green-600/35 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-4 self-start sticky top-24">
          <h2 className="font-semibold text-white mb-3">Category</h2>
          <div className="space-y-2">
            {CATEGORIES.map(cat => (
              <label key={cat} className="flex items-center gap-2 text-sm text-white/90">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="h-4 w-4"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>

          <div className="h-px bg-white/30 my-4" />

          <h2 className="font-semibold text-white mb-3">Price (per day)</h2>
          <div className="flex items-center gap-2">
            <input
              type="number"
              className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm"
              min={0}
              value={minPrice}
              onChange={e => { setMinPrice(Number(e.target.value || 0)); setPage(1) }}
            />
            <span className="text-white/80">to</span>
            <input
              type="number"
              className="w-24 rounded-md border border-gray-300 px-2 py-1 text-sm"
              min={0}
              value={maxPrice}
              onChange={e => { setMaxPrice(Number(e.target.value || 0)); setPage(1) }}
            />
          </div>

          <button
            onClick={() => { setSelectedCategories([]); setMinPrice(1); setMaxPrice(10000); setPage(1) }}
            className="mt-4 text-xs text-white/90 underline"
          >
            Reset all
          </button>
        </aside>

        {/* Main content */}
        <section>
          {/* Sort bar */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">{filtered.length} results</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-white/90">Sort by:</span>
              <select
                value={sort}
                onChange={e => { setSort(e.target.value as any); setPage(1) }}
                className="rounded-md border border-gray-300 bg-white px-2 py-1"
              >
                <option>Newest</option>
                <option>Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paged.map(listing => (
              <article key={listing.id} className="bg-white rounded-xl border border-black overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-brand-green text-white text-[12px] font-semibold shadow-sm">${listing.pricePerDayUsd.toFixed(2)} per day</div>
                  <h3 className="text-sm font-medium text-gray-900 truncate">{listing.title}</h3>
                  <div className="text-xs text-gray-500 mt-1">{listing.ownerName}</div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm text-gray-700">Page {page} of {totalPages}</span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded-md border border-gray-300 bg-white text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </div>
      </div>
    </>
  )
}


