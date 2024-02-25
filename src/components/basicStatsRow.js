const stats = [
  { name: 'Current Occupancy', value: '1560', change: '+4.75%', changeType: 'positive' },
  { name: 'Peak Occupancy', value: '214 free spots', change: '+10.02%', changeType: 'negative' },
  { name: 'Avg Time Spent', value: '1hr 13m', change: '-10.39%', changeType: 'positive' },
  { name: 'Busiest 3-hour interval', value: '12:15-15:15', change: '+10.18%', changeType: 'negative' },
]
// positive depends on if increase or decrease
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BasicStatsRow() {
  return (
      <div className="">
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-5 sm:px-6 xl:px-8"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
              'text-xs font-medium'
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
      </div>
  )
}
