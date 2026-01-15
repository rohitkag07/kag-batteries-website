import Image from 'next/image';

const images = [
    '/images/Copy of IMG_5876.jpg',
    '/images/Copy of IMG_5877.jpg',
    '/images/Copy of IMG_5897.jpg',
    '/images/Copy of IMG_5910.jpg',
    '/images/Copy of IMG_5917.jpg',
    '/images/Copy of IMG_5997.jpg',
    '/images/Copy of IMG_6000.jpg',
    '/images/Copy of IMG_6063.jpg',
    '/images/Copy of IMG_6120.jpg',
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div key={index} className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <Image
                                src={src}
                                alt={`KAG Batteries Gallery Image ${index + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
