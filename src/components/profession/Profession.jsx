import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Brand Identity",
    description:
      "I create cohesive visual systems that reflect brand personality and connect with target audiences.",
  },
  {
    id: 2,
    title: "Social Media Design",
    description:
      "I design scroll-stopping social media graphics optimized for each platform, using strategic visual storytelling to showcase products and communicate brand values.",
  },
  {
    id: 3,
    title: "Promotional & Marketing Design",
    description:
      "I create high-conversion flyers, campaign graphics, and promotional materials with clear visual hierarchy and multi-format optimization.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I'm a strategic graphic designer who translates business objectives into compelling visual solutions. I specialize in brand identity, social media design, and promotional graphics that boost engagement and strengthen brand presence.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
