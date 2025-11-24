import React from 'react'



function LogInPage({ onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    if (onLogin) onLogin()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#67e8f9] text-slate-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
        <div className="bg-white/15 backdrop-blur-md border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl shadow-purple-900/20 text-white">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] font-semibold text-[#67e8f9]">
            <span className="h-px w-8 bg-[#67e8f9]/50" />
            Welcome back
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Unlock your next favorite find
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Sign in to keep your cart synced, track deliveries, and discover
            curated drops tailored to your style.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center text-[#67e8f9] font-bold">
                1
              </span>
              <div>
                <p className="text-base font-semibold">Secure checkout</p>
                <p className="text-sm text-white/70">
                  Encrypted sessions to keep your data safe.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 grid place-items-center text-[#67e8f9] font-bold">
                2
              </span>
              <div>
                <p className="text-base font-semibold">Personal picks</p>
                <p className="text-sm text-white/70">
                  Recommendations tuned to your vibe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#7c3aed]/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#6d28d9] uppercase tracking-wide">
                Log in
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Welcome to Aurora
              </h2>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#67e8f9] text-white font-bold">
              A
            </span>
          </div>

          <form className="mt-8 grid gap-6" onSubmit={handleSubmit}>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Email address
              </span>
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 rounded-xl border border-slate-200 px-4 text-slate-900 shadow-inner focus:border-[#7c3aed] focus:ring-4 focus:ring-[#67e8f9]/40 outline-none transition"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Password
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="h-12 rounded-xl border border-slate-200 px-4 text-slate-900 shadow-inner focus:border-[#7c3aed] focus:ring-4 focus:ring-[#67e8f9]/40 outline-none transition"
                required
              />
            </label>

            <div className="flex items-center justify-between text-sm text-slate-600">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#7c3aed] focus:ring-[#67e8f9]"
                  defaultChecked
                />
                Remember me
              </label>
              <button
                type="button"
                className="font-semibold text-[#6d28d9] hover:text-[#4c1d95] transition"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="h-12 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#67e8f9] text-white font-semibold shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl hover:shadow-[#7c3aed]/40 transition"
            >
              Sign in
            </button>
          </form>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-600">
            <span className="h-px flex-1 bg-slate-200" />
            or continue with
            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {['Google', 'Apple', 'Shop ID'].map((provider) => (
              <button
                key={provider}
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-700 hover:border-[#7c3aed] hover:bg-white transition"
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-600 text-center">
            New here?{' '}
            <a
              className="font-semibold text-[#6d28d9] hover:text-[#4c1d95]"
              href="#"
            >
              Create an account
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogInPage
