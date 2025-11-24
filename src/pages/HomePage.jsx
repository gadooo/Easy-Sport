const popularProducts = [
  {
    name: 'Velocity Runner',
    price: '$129',
    tag: 'Best Seller',
    blurb: 'Feather-light with responsive cushioning for daily miles.',
  },
  {
    name: 'Arena Pro Hoodie',
    price: '$89',
    tag: 'Trending',
    blurb: 'Breathable fleece that keeps you warm without the bulk.',
  },
  {
    name: 'Court Grip 2.0',
    price: '$149',
    tag: 'New',
    blurb: 'Multi-surface traction built for explosive cuts.',
  },
]

const offers = [
  {
    title: 'Team Pack',
    detail: 'Buy 2 performance shoes, get 25% off the third pair.',
  },
  {
    title: 'Recovery Bundle',
    detail: 'Foam roller + resistance bands bundle, save $20.',
  },
  {
    title: 'Members Early',
    detail: 'Exclusive access to limited drops every Friday.',
  },
]

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7c3aed] via-[#6d28d9] to-[#67e8f9] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-12 w-12 rounded-2xl bg-white/15 grid place-items-center text-lg font-bold">
              Sportify
            </span>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#67e8f9]">
                Pro Gear
              </p>
              <h1 className="text-3xl font-extrabold">Sport Shop</h1>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {['Shoes', 'Apparel', 'Accessories', 'New'].map((item) => (
              <a key={item} className="hover:text-[#e0f2fe]" href="#">
                {item}
              </a>
            ))}
          </nav>
          <button className="rounded-xl bg-white text-[#6d28d9] px-4 py-2 font-semibold shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl transition">
            Cart
          </button>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.35em] font-semibold text-[#67e8f9]">
              <span className="h-px w-8 bg-[#67e8f9]/50" />
              New season
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Gear up for every victory
            </h2>
            <p className="text-lg text-white/80 max-w-2xl">
              Discover performance footwear, breathable fits, and accessories
              curated for training, game day, and everything in between.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="h-12 px-6 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#67e8f9] text-white font-semibold shadow-lg shadow-[#7c3aed]/30 hover:shadow-xl transition">
                Shop now
              </button>
              <button className="h-12 px-6 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition">
                Explore collections
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {[
                { label: 'Running Shoes', badge: 'Hot' },
                { label: 'Training Fits', badge: 'New' },
                { label: 'Court Ready', badge: 'Pro' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between text-sm font-semibold">
                    {item.label}
                    <span className="text-[#67e8f9]">{item.badge}</span>
                  </div>
                  <p className="text-xs text-white/70 mt-2">
                    Built for peak performance with breathable tech fabrics.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#7c3aed]/25 text-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[#6d28d9] uppercase tracking-wide">
                  Spotlight
                </p>
                <h3 className="text-2xl font-bold">Velocity Runner</h3>
              </div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#67e8f9] text-white font-bold">
                V
              </span>
            </div>
            <p className="mt-4 text-slate-600">
              Feather-light, responsive cushioning with locked-in support for
              explosive moves.
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-3xl font-extrabold text-slate-900">$129</p>
                <p className="text-sm text-slate-500">Limited drop</p>
              </div>
              <button className="h-11 px-5 rounded-xl bg-[#6d28d9] text-white font-semibold shadow-lg shadow-[#7c3aed]/25 hover:bg-[#5b21b6] transition">
                Add to cart
              </button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-sm text-slate-700">
              {['Breathable mesh', 'Energy foam', 'Court grip'].map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-200 bg-slate-50 py-3 text-center font-semibold"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#67e8f9] font-semibold">
                Top picks
              </p>
              <h3 className="text-2xl font-bold">Most popular</h3>
            </div>
            <button className="px-4 py-2 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition">
              View all
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {popularProducts.map((product) => (
              <div
                key={product.name}
                className="rounded-2xl bg-white text-slate-900 p-6 shadow-xl shadow-[#7c3aed]/20"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold">{product.name}</h4>
                  <span className="text-xs font-semibold text-[#6d28d9] bg-[#ede9fe] px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <p className="text-slate-600 mt-2 text-sm">{product.blurb}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold">{product.price}</p>
                  <button className="h-10 px-4 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#67e8f9] text-white font-semibold shadow-[#7c3aed]/20 shadow-lg hover:shadow-xl transition">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur-sm shadow-lg shadow-[#7c3aed]/20"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#67e8f9]">
                Offer
              </p>
              <h4 className="text-xl font-bold mt-2">{offer.title}</h4>
              <p className="text-white/80 mt-2 text-sm">{offer.detail}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e0f2fe]">
                Redeem offer
                <span aria-hidden>→</span>
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default HomePage
