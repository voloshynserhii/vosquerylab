import ClientCard from "@/components/ClientCard";

const clients = [
  {
    id: "navifit",
    name: "NaviFit",
    category: "Web Application",
    description: "A comprehensive fitness platform offering personalized meal plans and nutrition tracking. Built with modern web technologies for a seamless user experience.",
    image: "https://navifit.eu/images/app-preview.png",
    tags: ["Next.js", "React Native", "Fitness", "Health", "PWA"],
    link: "https://navifit.eu",
  },
  {
    id: "pani-yulya-kids",
    name: "Pani Yulya Kids",
    category: "E-commerce",
    description: "A joyful entertainment platform where fans can enjoy exclusive music by Пані Юля, order personalized video greetings, and shop for toys featured in her YouTube videos. Designed for fun, creativity, and memorable experiences for children and families.",
    image: "https://pani-yulya-shop.vercel.app/_next/image?url=%2Fimages%2Fhero_image.jpeg&w=1200&q=75",
    tags: ["E-commerce", "Next.js", "UI/UX", "Kids", "Music"],
    link: "https://pani-yulya.kids",
  },
  {
    id: "pine-hotel",
    name: "The Pine Hotel",
    category: "Hospitality",
    description: "A luxury hotel experience with modern amenities and personalized service. Features a stunning location and exceptional guest satisfaction.",
    image: "https://pinehotel.vercel.app/_next/image?url=%2Fimages%2Fhero2.jpg&w=3840&q=75",
    tags: ["Next.js", "React", "Hotel", "Hospitality", "Luxury", "Travel", "Tourism"],
    link: "https://thepines-hotel.com",
  },
  {
    id: "beni-fit",
    name: "Beni-Fit",
    category: "Fitness & Health",
    description: "A professional personal training website showcasing services, transformations, and booking options for fitness enthusiasts.",
    image: "https://yarify.tech/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1534438327276-14e5300c3a48%3Fw%3D800%26h%3D600%26fit%3Dcrop&w=3840&q=75",
    tags: ["Next.js", "React", "Fitness", "Personal Training"],
    link: "https://beni-fit.club/",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">Trusted by Clients</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {clients.map((client) => <ClientCard key={client.id} client={client} />)}
        </div>
      </div>
    </section>
  );
}
