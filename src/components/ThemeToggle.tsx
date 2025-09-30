import { motion } from 'framer-motion'

interface Props {
  dark: boolean
  setDark: (v: boolean) => void
}

const IconMoon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)
const IconSun = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636" />
  </svg>
)

export default function ThemeToggle({ dark, setDark }: Props) {
  return (
    <button
      type="button"
      aria-label={dark ? 'Basculer vers le mode clair' : 'Basculer vers le mode sombre'}
      onClick={() => setDark(!dark)}
      className="relative inline-flex items-center justify-center w-12 h-8 rounded-full border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
    >
      <motion.span
        layout
        initial={false}
        animate={dark ? { x: 18 } : { x: -18 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-gray-100 shadow"
      >
        {dark ? <IconSun /> : <IconMoon />}
      </motion.span>

      {/* background subtle change */}
      <motion.span
        aria-hidden
        className="w-full h-full block rounded-full"
        initial={false}
        animate={dark ? { backgroundColor: 'rgba(17,24,39,1)' } : { backgroundColor: 'rgba(255,255,255,1)' }}
        transition={{ duration: 0.2 }}
        style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.04)' }}
      />
    </button>
  )
}
