import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <h3 className="text-2xl font-semibold mb-3">À propos</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Je suis AJ, photographe basé au Maroc. J’aime raconter des histoires visuelles — simplicité, lumière naturelle et émotion.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Portraits créatifs</li>
            <li>• Couvertures de mariage</li>
            <li>• Paysages & voyages</li>
            <li>• Sessions éditoriales</li>
          </ul>
        </motion.div>

        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww" alt="À propos AJ" loading="lazy" className="w-full h-64 object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
