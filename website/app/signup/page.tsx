// app/signup/page.tsx
'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

const schema = z.object({
  email: z.string().email('Enter a valid email'),
  firstName: z.string().min(1, 'Required'),
  lastName: z.string().min(1, 'Required'),
  password: z.string().min(6, 'Min 6 characters'),
  tos: z.boolean().refine(v => v, { message: 'You must accept Terms' }),
})

type FormValues = z.infer<typeof schema>

export default function SignUpPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: '', firstName: '', lastName: '', password: '', tos: false },
  })

  const onSubmit = async (values: FormValues) => {
    console.log('Sign up ->', values)
    // TODO: Call /api/signup or your backend endpoint here
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
        <div className="mb-6 flex gap-6">
          <h1 className="text-3xl font-bold text-white border-b-2 border-white pb-1">Sign up</h1>
          <Link href="/login" className="text-3xl font-bold text-white/70 hover:text-white">
            Log in
          </Link>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Email</label>
            <input
              type="email"
              {...register('email')}
              placeholder="example@gmail.com"
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
            />
            {errors.email && <p className="mt-1 text-sm text-red-200">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1">First name</label>
              <input
                {...register('firstName')}
                placeholder="First name"
                className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-200">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/90 mb-1">Last name</label>
              <input
                {...register('lastName')}
                placeholder="Last name"
                className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-200">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/90 mb-1">Password</label>
            <input
              type="password"
              {...register('password')}
              placeholder="Enter your password..."
              className="w-full rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 px-4 py-3"
            />
            {errors.password && <p className="mt-1 text-sm text-red-200">{errors.password.message}</p>}
          </div>

          <label className="flex items-start gap-3 text-sm text-white/90">
            <input type="checkbox" {...register('tos')} className="mt-1 h-4 w-4 rounded border-white/30 bg-white/10" />
            <span>
              I accept the <a href="#" className="underline text-emerald-300 hover:text-emerald-200">Terms of Service</a> and the <a href="#" className="underline text-emerald-300 hover:text-emerald-200">Privacy Policy</a>
            </span>
          </label>
          {errors.tos && <p className="mt-1 text-sm text-red-200">{errors.tos.message}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,.2)] disabled:opacity-60"
          >
            {isSubmitting ? 'Signing up...' : 'Sign up'}
          </button>
        </form>
      </div>
    </div>
  )
}