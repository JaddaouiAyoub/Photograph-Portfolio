import { motion } from 'framer-motion'


export default function Hero({ onContact }: { onContact: ()=>void }){
return (
<header className="relative ">
<div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
<div className="w-full md:w-1/2">
<motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold tracking-tight leading-tight dark:text-white">
AJ — Photographe
</motion.h1>
<motion.p initial={{ y: 20, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ delay: 0.2 }} className="mt-6 text-gray-700 dark:text-gray-300">
Je transforme chaque instant en souvenir unique, en capturant avec authenticité vos portraits, vos cérémonies de mariage, vos paysages époustouflants et vos projets éditoriaux. Chaque photo raconte une histoire, fidèle à vos émotions et à votre univers.</motion.p>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-8 flex gap-4">
<a href="#portfolio" className="inline-block bg-black text-white px-6 py-3 rounded-2xl shadow hover:opacity-90 transition">Voir le portfolio</a>
<button onClick={onContact} className="inline-block border border-black dark:border-white px-6 py-3 rounded-2xl hover:bg-black hover:text-white transition">Contact</button>
</motion.div>
</div>
<div className="w-full md:w-1/2">
<motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.25 }} className="rounded-xl overflow-hidden shadow-lg">
<img src={`https://images.unsplash.com/photo-1623506171875-6fcf962b7953?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGh8ZW58MHx8MHx8fDA%3D`} alt="AJ hero" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
</motion.div>
</div>
</div>
</header>
)
}