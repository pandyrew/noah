import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Image
        src="/noah.JPG"
        alt="Background"
        fill
        className="object-cover z-0"
        priority
      />
      <h1 className="text-6xl font-bold text-center text-white z-10 relative">
        Happy Birthday Noah!
      </h1>
    </div>
  );
}
