const LandingPage = () => {
  const procom = [
    { day: 2, href: "day-2" },
    { day: 3, href: "day-3" },
    { day: 5, href: "day-5" },
    { day: 6, href: "day-6" },
    { day: 7, href: "day-7" },
    { day: "Tambah Customer", href: "customerData" },
  ];

  return (
    <>
      <div className="text-2xl flex">
        {procom.map((days, index) => (
          <a
            key={index}
            className="p-2 border mx-10 text-blue-500 hover:text-green-500"
            href={days.href}
          >
            {days.day}
          </a>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
