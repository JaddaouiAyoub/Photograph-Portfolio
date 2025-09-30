/* ---------------- src/components/CategoryGallery.tsx ---------------- */
import { motion } from 'framer-motion'


export default function CategoryGallery({ id, title, images, onOpen }:{ id?:string; title:string; images:string[]; onOpen:(items:string[], index:number)=>void }){
return (
<div id={id}>
<h3 className="text-xl font-semibold mb-4">{title}</h3>
<motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{images.map((src, i)=> (
<motion.div key={src} whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden cursor-pointer shadow-sm" onClick={()=> onOpen(images, i)}>
<img src={src} alt={`${title} ${i+1}`} loading="lazy" className="w-full h-full object-cover" />
</motion.div>
))}
</motion.div>
</div>
)
}