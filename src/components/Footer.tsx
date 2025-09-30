import Logo from './Logo'


export default function Footer(){
return (
<footer className="mt-12 border-t py-6">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-4">
<div className="flex items-center gap-3">
<Logo />
<span className="text-sm">© {new Date().getFullYear()} AJ — Tous droits réservés</span>
</div>
{/* <div className="text-sm">Crédits images: Unsplash</div> */}
</div>
</footer>
)
}