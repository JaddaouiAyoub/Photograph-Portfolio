/* ---------------- src/components/Contact.tsx ---------------- */


function EmailIcon(){
return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M1.5 6.75A2.25 2.25 0 013.75 4.5h16.5A2.25 2.25 0 0122.5 6.75v10.5A2.25 2.25 0 0120.25 19.5H3.75A2.25 2.25 0 011.5 17.25V6.75zm2.06-.56l7.44 5.1a1.5 1.5 0 001.8 0l7.44-5.1A.75.75 0 0019.5 6H4.5a.75.75 0 00-.94.19z"/></svg>
)
}
function WhatsAppIcon(){
return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.86 11.86 0 0012 .75C6.21.75 1.5 5.46 1.5 11.25c0 1.99.52 3.83 1.43 5.5L1.5 22.5l5.93-1.37c1.58.86 3.36 1.33 5.07 1.33 5.79 0 10.5-4.71 10.5-10.5 0-3.06-1.2-5.89-3.48-7.98zM12 20.25c-1.53 0-3.03-.38-4.35-1.08l-.31-.18-3.52.81.75-3.43-.2-.35A8.25 8.25 0 113.75 11.25c0-4.55 3.7-8.25 8.25-8.25S20.25 6.7 20.25 11.25 16.55 19.5 12 19.5zM16.1 13.8c-.22-.11-1.3-.64-1.5-.71-.2-.07-.34-.11-.48.11-.14.22-.56.71-.69.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.03-.28-.02-.39-.05-.11-.48-1.15-.66-1.58-.17-.41-.35-.35-.48-.36l-.41-.01c-.14 0-.37.05-.57.27-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.53 2.34 3.71 3.28 2.58 1.12 2.58.74 3.05.7.47-.04 1.53-.62 1.75-1.22.22-.6.22-1.12.15-1.23-.07-.11-.25-.17-.47-.28z"/></svg>
)
}


export default function Contact(){
const email = 'contact@aj-photographer.com'
const phone = '212600000000' // replace with your number without +
return (
<section id="contact" className="max-w-6xl mx-auto px-6 py-12">
<h3 className="text-xl font-semibold">Contact</h3>
<div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
<div>
<p className="text-gray-700 dark:text-gray-300">Intéressé par une séance ? Contactez-moi :</p>
<div className="mt-4 flex gap-4">
<a href={`mailto:${email}`} className="flex items-center gap-2 border px-4 py-3 rounded-lg">
<EmailIcon /> <span>{email}</span>
</a>
<a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 border px-4 py-3 rounded-lg">
<WhatsAppIcon /> <span>WhatsApp</span>
</a>
</div>
</div>
<div>
<form onSubmit={(e)=>{ e.preventDefault(); window.location.href = `mailto:${email}` }} className="space-y-3 text-gray-700 dark:text-gray-300">
<input required className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800" placeholder="Votre nom" />
<input required type="email" className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800" placeholder="Votre email" />
<textarea required className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800" placeholder="Message (description, date, lieu...)" rows={4} />
<div className="flex gap-3">
<button type="submit" className="px-4 py-2 rounded bg-black text-white">Envoyer (mailto)</button>
<a href={`https://wa.me/${phone}?text=${encodeURIComponent('Bonjour AJ, je souhaite réserver une séance...')}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded border">WhatsApp</a>
</div>
</form>
</div>
</div>
</section>
)
}