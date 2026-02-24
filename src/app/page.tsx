import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">{siteContent.name}</h1>
      <p className="text-xl text-gray-600">{siteContent.tagline}</p>

      <div className="bg-green-900 text-white p-10 rounded-lg">
        Hero image placeholder
      </div>
    </div>
  );
}