import CategoryGallery from "./CategoryGallery"


// Fixed categories and fixed arrays of image URLs (8+ per category). Replace URLs as needed.
const PORTRAIT = [
'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1629747490241-624f07d70e1e?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1800&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1603775020644-eb8decd79994?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1800&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1800&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1800&q=80&auto=format&fit=crop',
'https://plus.unsplash.com/premium_photo-1710548650774-e37b948f97a4?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXRzfGVufDB8fDB8fHww',
'https://plus.unsplash.com/premium_photo-1734218353091-a40705659ab1?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D'
]


const NATURE = [
'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1627891374362-c6ca6c675cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZSUyMHBheXNhZ2V8ZW58MHx8MHx8fDA%3D',
]


const URBAN = [
'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1507090960745-b32f65d3113a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVyYmFpbnxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVyYmFpbnxlbnwwfHwwfHx8MA%3D%3D',
'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1488034976201-ffbaa99cbf5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJiYWlufGVufDB8fDB8fHww',
]


const EVENTS = [
'https://plus.unsplash.com/premium_photo-1664474653221-8412b8dfca3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV2ZW50fGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXZlbnR8ZW58MHx8MHx8fDA%3D',
'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2ZW50fGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80&auto=format&fit=crop',
'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGV2ZW50fGVufDB8fDB8fHww',
'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGV2ZW50fGVufDB8fDB8fHww',
// 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format&fit=crop'
]


export default function Categories({ onOpen }: { onOpen: (items:string[], index:number)=>void }){
return (
<section id="portfolio" className="max-w-6xl mx-auto px-6 py-12">
<h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
<div className="flex gap-3 flex-wrap mb-6">
<a href="#portrait" className="px-4 py-2 rounded-full border">Portrait</a>
<a href="#nature" className="px-4 py-2 rounded-full border">Nature</a>
<a href="#urban" className="px-4 py-2 rounded-full border">Urbain</a>
<a href="#events" className="px-4 py-2 rounded-full border">Événements</a>
</div>


<div className="space-y-12">
<CategoryGallery id="portrait" title="Portraits" images={PORTRAIT} onOpen={onOpen} />
<CategoryGallery id="nature" title="Nature / Paysages" images={NATURE} onOpen={onOpen} />
<CategoryGallery id="urban" title="Urbain" images={URBAN} onOpen={onOpen} />
<CategoryGallery id="events" title="Événements" images={EVENTS} onOpen={onOpen} />
</div>
</section>
)
}