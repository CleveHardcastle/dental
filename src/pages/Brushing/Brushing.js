function Brushing() {
  return (
    <div>
      <div className="w-full">
        <p className="text-4xl md:text-5xl text-center font-bold">
          American Dental Association Brushing Recommendations
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-10  mb-10">
        <div className="w-full m-0 md:m-2 flex items-center">
          <p className="text-3xl text-center">
            Brushing your teeth at a 45-degree angle and in an up and down
            motion is a highly recommended technique by dentists worldwide. This
            technique is essential for maintaining good oral hygiene and
            preventing dental problems like cavities, gum disease, and bad
            breath.
          </p>
        </div>
      </div>
      <div className="flex justify-center m-2">
        <img src={process.env.PUBLIC_URL + "/images/45.jpg"} />
      </div>
      <div className="flex justify-center mb-6">
        <a href="/product">
          <p className="text-xl text-blue-800 m-2">
            Click here to find out how we're better
          </p>
        </a>
      </div>
      <div className="flex justify-center mb-6">
        <p className="text-4xl text-center font-bold">
          Reasons for brushing this way
        </p>
      </div>
      <div className="m-2">
        <div className="w-full">
          <h2 className="text-center text-2xl font-bold w-full md:w-1/2">
            1. Effective Plaque Removal:
          </h2>
          <div className="flex flex-col md:flex-row place-content-around m-2">
            <p className="text-center text-xl w-1/2 flex self-center">
              Plaque is a sticky film of bacteria that forms on teeth and gums,
              leading to tooth decay and gum disease. Brushing your teeth at a
              45-degree angle and in an up and down motion is the best way to
              remove plaque effectively. This technique allows the bristles to
              reach into the spaces between the teeth and gums, where plaque
              often accumulates.
            </p>
            <div className="w-[300px] flex self-center">
              <img src={process.env.PUBLIC_URL + "/images/plaque.jpg"} />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold w-full md:w-1/2">
            2. Protects Gum Health:
          </h2>
          <div className="flex flex-col md:flex-row place-content-around m-2">
            <p className="text-center text-xl w-1/2 flex self-center">
              Brushing in an up and down motion helps to remove plaque from the
              gum line, preventing gum disease. When you brush at a 45-degree
              angle, the bristles are more effective in removing plaque from the
              teeth' surfaces and at the gum line.
            </p>
            <div className="w-[300px] flex self-center">
              <img src={process.env.PUBLIC_URL + "/images/healthy-gums.jpg"} />
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold w-full md:w-1/2">
            3. Freshens Breath:
          </h2>
          <div className="flex flex-col md:flex-row place-content-around m-2">
            <p className="text-center text-xl w-1/2 flex self-center">
              Brushing at a 45-degree angle and in an up and down motion allows
              you to clean your tongue and the roof of your mouth, where
              bacteria can accumulate and cause bad breath. This technique helps
              to remove odor-causing bacteria, leaving your mouth feeling fresh
              and clean.
            </p>
            <div className="w-[300px] flex self-center">
              <img src={process.env.PUBLIC_URL + "/images/breath.jpg"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <a href="/product">
          <p className="text-xl text-center text-blue-800 m-2">
            Find out how we can help improve brushing
          </p>
        </a>
      </div>
    </div>
  );
}

export default Brushing;
