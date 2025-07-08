const LandingPage = () => {
  const procom = [
    { day: 2, href: "day-2" },
    { day: 3, href: "day-3" },
    { day: 4, href: "day-4" },
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
