import Logo from './Logo'
import ThemeToggle from './ThemeToggle'


export default function Header({ dark, setDark }: { dark:boolean, setDark: (v:boolean)=>void }){
return (
<nav className="fixed top-4 left-0 right-0 z-50">
<div className="max-w-6xl mx-auto px-6 flex items-center justify-between bg-white/60 dark:bg-gray-900/60 backdrop-blur rounded-full py-2 shadow">
<div className="flex items-center gap-4">
<Logo />
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-4">
<a href="#portfolio" className="text-sm">Portfolio</a>
<a href="#about" className="text-sm">À propos</a>
<a href="#services" className="text-sm">Services</a>
<a href="#contact" className="text-sm">Contact</a>
</div>
<ThemeToggle dark={dark} setDark={setDark} />
</div>
</div>
</nav>
)
}