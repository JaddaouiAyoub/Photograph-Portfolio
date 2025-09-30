import { motion } from "framer-motion";

export default function Services() {
    const services = [
    {
      title: "Session Portrait",
      desc: "1h, 15 photos retouchées.",
      price: "150€",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Mariage",
      desc: "Couverture complète + album digital.",
      price: "1200€",
      img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFyaWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Éditorial",
      desc: "Sessions pour marques & magazines — sur devis.",
      price: "Sur devis",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Famille & Enfants",
      desc: "Séance 1h, 20 photos incluses.",
      price: "180€",
      img: "https://images.unsplash.com/photo-1506836467174-27f1042aa48c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWxsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Grossesse",
      desc: "Séance studio ou extérieur, 25 photos retouchées.",
      price: "200€",
      img: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3Jvc3Nlc3NlfGVufDB8fDB8fHww",
    },
    {
      title: "Événement Privé",
      desc: "Anniversaire, baptême, fête — sur devis.",
      price: "Sur devis",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6">Services & Tarifs</h3>
      <motion.div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
          >
            {/* Image de fond */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Texte */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
              <h4 className="text-lg font-semibold">{service.title}</h4>
              <p className="mt-2 text-sm opacity-90">{service.desc}</p>
              <div className="mt-4 text-xl font-bold bg-white/20 px-4 py-1 rounded-full">
                {service.price}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
