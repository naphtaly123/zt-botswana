function OurSectors() {
  return (
    <section className="bg-[#F3F3F3] w-full px-10 py-16 md:px-20 lg:px-6 lg:py-20 font-sans">
      <div className="mx-auto mb-10 lg:max-w-4xl text-center">
        <p className="text-2xl font-semibold tracking-wider text-[#000D51] uppercase">
          What sectors of the economy do we serve
        </p>
        <p className="text-base text-[#000D51] md:text-lg mt-2">
          We provide tailored SAP & IT solutions for a variety of industries.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-11">
        {[
          { name: "Real Estate", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741167609/real-estate_yue4fs.png" },
          { name: "Public/Government", src: "https://res.cloudinary.com/db4oazav1/image/upload/v1752239881/government_ugeuvu.jpg" },
          { name: "Utilities", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741167783/utilities_ou77be.jpg" },
          { name: "Insurance", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741168057/insurance_y1bhmt.jpg" },
          { name: "Finance", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741168177/finance_esg37s.jpg" },
          { name: "Mining", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741168231/mining_b13orb.jpg" },
          { name: "Retail", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741168383/Retail_nonzp4.jpg" },
          { name: "Logistics", src: "https://res.cloudinary.com/dkgpwqmtq/image/upload/v1741168806/Log_trkpke.jpg" }
        ].map((sector, index) => (
          <div key={index} className="relative group rounded-lg shadow-lg overflow-hidden">
            {/* Image with Hover Effect */}
            <img
              className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
              src={sector.src}
              alt={sector.name}
            />
            {/* Dark Overlay with Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
              <p className="text-white text-lg font-bold">{sector.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurSectors;
