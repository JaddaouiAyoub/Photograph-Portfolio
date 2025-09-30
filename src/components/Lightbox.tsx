/* ---------------- src/components/Lightbox.tsx ---------------- */
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


export default function Lightbox({ items, index, onClose, onNavigate }:{ items:string[]; index:number; onClose:()=>void; onNavigate:(idx:number)=>void }){
useEffect(()=>{
document.body.style.overflow = 'hidden'
return ()=> { document.body.style.overflow = '' }
},[])


function prev(){ if (index > 0) onNavigate(index -1) }
function next(){ if (index < items.length -1) onNavigate(index +1) }


return (
<AnimatePresence>
<motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
<motion.div initial={{ y:20, opacity:0 }} animate={{ y:0, opacity:1 }} exit={{ y:20, opacity:0 }} className="max-w-6xl w-full relative">
<button onClick={onClose} className="absolute top-3 right-3 text-white bg-white/10 backdrop-blur rounded-full p-2">✕</button>


<div className="flex items-center gap-4">
<button onClick={prev} disabled={index===0} className="text-white p-2 rounded-full border border-white/20">‹</button>


<div className="flex-1">
<img src={items[index]} alt={`Image ${index+1}`} className="w-full max-h-[80vh] object-contain mx-auto" />
</div>


<button onClick={next} disabled={index===items.length-1} className="text-white p-2 rounded-full border border-white/20">›</button>
</div>


<div className="mt-4 text-center text-white">{`${index+1} / ${items.length}`}</div>
</motion.div>
</motion.div>
</AnimatePresence>
)
}