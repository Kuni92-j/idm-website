'use client'

const stats = [
  { value: 1000, suffix: '社+', label: '支援実績' },
  { value: 5, suffix: '年', label: '実績年数' },
  { value: 95, suffix: '%+', label: '補助金採択率' },
  { value: 10, suffix: '業種+', label: '対応業種数' },
]

export default function StatsBar() {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, #1A2E5C, #2D7DD2)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <p className="text-4xl sm:text-5xl font-black mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-sm font-bold text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
