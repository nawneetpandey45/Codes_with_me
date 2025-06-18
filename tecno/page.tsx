// app/page.tsx (or pages/index.tsx depending on Next.js version)
import Image from "next/image";

export default function Home() {
  const images = ["/images/sample1.jpg", "/images/sample2.jpg", "/images/sample3.jpg"];

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Tecno</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="bg-white shadow rounded-xl overflow-hidden">
            <Image
              src={src}
              alt={`Sample ${index + 1}`}
              width={600}
              height={400}
              className="w-full object-cover"
            />
            <div className="p-4 text-center font-medium">Sample Image {index + 1}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
