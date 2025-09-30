/* ---------------- src/App.tsx ---------------- */
import { Suspense, lazy, useEffect, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
const Categories = lazy(() => import('./components/Categories'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Lightbox = lazy(() => import('./components/Lightbox'))
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'


export default function App(){
const [dark, setDark] = useState(() => {
if (typeof window === 'undefined') return false
return (window.localStorage.getItem('theme') || 'light') === 'dark'
})
const [lightboxState, setLightboxState] = useState<{index:number; items:string[]} | null>(null)


useEffect(()=>{
const root = document.documentElement
if (dark) root.classList.add('dark')
else root.classList.remove('dark')
window.localStorage.setItem('theme', dark ? 'dark' : 'light')
},[dark])


useEffect(()=>{
function onKey(e: KeyboardEvent){
if (!lightboxState) return
if (e.key === 'Escape') setLightboxState(null)
if (e.key === 'ArrowRight') setLightboxState(s => s ? { ...s, index: Math.min(s.index + 1, s.items.length -1) } : s)
if (e.key === 'ArrowLeft') setLightboxState(s => s ? { ...s, index: Math.max(s.index - 1, 0) } : s)
}
window.addEventListener('keydown', onKey)
return ()=> window.removeEventListener('keydown', onKey)
}, [lightboxState])


return (
  
<div className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 transition-colors">      <div><ParticlesBackground darkMode={dark} /></div>
<Header dark={dark} setDark={setDark} />
<main className="pt-24">

<Hero onContact={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} />
<About />

<Suspense fallback={<div className="max-w-6xl mx-auto p-8">Chargement du portfolio...</div>}>
<Categories onOpen={(items, index)=> setLightboxState({items, index})} />
</Suspense>

<Suspense fallback={null}>
  
  <Services />
</Suspense>
<Contact />
<Footer />
</main>


<Suspense fallback={null}>
{lightboxState && (
<Lightbox
items={lightboxState.items}
index={lightboxState.index}
onClose={()=> setLightboxState(null)}
onNavigate={(idx)=> setLightboxState(s => s ? { ...s, index: idx } : s)}
/>
)}
</Suspense>
</div>
)
}