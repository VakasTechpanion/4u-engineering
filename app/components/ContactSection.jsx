export default function ContactSection() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact Us</h2>
            <form className="max-w-md mx-auto space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
                <textarea placeholder="Your Message" className="w-full p-3 border rounded h-32" />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
                    Send Message
                </button>
            </form>
        </section>
    );
}