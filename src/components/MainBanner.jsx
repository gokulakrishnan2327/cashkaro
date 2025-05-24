import banner from "../assets/Banners.png"
import banner1 from "../assets/Banners1.png"
import banner2 from "../assets/Banners2.png"

const MainBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="slider relative">
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible scroll-smooth">
          {[banner, banner1, banner2].map((img, index) => (
            <div key={index} className="flex-shrink-0 w-[90%] md:w-auto">
              <img src={img} alt={`Banner ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </div>

        <div className="slick-dots flex justify-center mt-4 space-x-2 md:hidden">
          <button className="w-2 h-2 rounded-full bg-blue-600"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
