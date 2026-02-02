export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to build something amazing?</h2>
        <p className="text-zinc-400 mb-12 text-lg max-w-2xl mx-auto">
          Let's discuss your project and see how we can help you achieve your digital goals.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Email Us</h3>
            <a href="mailto:hello@vosquery.lab" className="text-zinc-400 hover:text-white transition-colors">vosquery@gmail.com</a>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Visit Us</h3>
            <p className="text-zinc-400">Carrer Apostol Santiago, 36<br />12560 Benicassim, Community of Valencia, Spain</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2 text-white">Call Us</h3>
            <a href="tel:+15550000000" className="text-zinc-400 hover:text-white transition-colors">+34 614 026 351</a>
          </div>
        </div>
      </div>
    </section>
  );
}