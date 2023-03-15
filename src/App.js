function App() {
  return (
    <div>
      <div className="w-full flex justify-center">
        <p className="text-4xl font-bold">
          American Dental Association Brushing Recommendations
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row mt-10">
        <div className="w-3/4 m-2 flex items-center text-center">
          <p className="text-3xl">
            Brushing your teeth at a 45-degree angle and in an up and down
            motion is a highly recommended technique by dentists worldwide. This
            technique is essential for maintaining good oral hygiene and
            preventing dental problems like cavities, gum disease, and bad
            breath.
          </p>
        </div>
        <div className="flex justify-end m-2">
          <img src={process.env.PUBLIC_URL + "/images/45.jpg"} />
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-3xl font-bold">Reasons for brushing this way</p>
      </div>
      <div className="m-2 mt-1">
        <div className="w-full">
          <div className="w-1/2 flex flex-col justify-center">
            <h2 className="text-center text-2xl font-bold">
              1. Effective Plaque Removal:
            </h2>
            <p className="text-center text-xl">
              Plaque is a sticky film of bacteria that forms on teeth and gums,
              leading to tooth decay and gum disease. Brushing your teeth at a
              45-degree angle and in an up and down motion is the best way to
              remove plaque effectively. This technique allows the bristles to
              reach into the spaces between the teeth and gums, where plaque
              often accumulates.
            </p>
            <h2 className="text-center text-2xl font-bold">
              2. Protects Gum Health:
            </h2>
            <p className="text-center text-xl">
              Brushing in an up and down motion helps to remove plaque from the
              gum line, preventing gum disease. When you brush at a 45-degree
              angle, the bristles are more effective in removing plaque from the
              teeth' surfaces and at the gum line. This technique is gentler on
              your gums than brushing side-to-side, which can cause gum
              recession.
            </p>
            <h2 className="text-center text-2xl font-bold">
              3. Prevents Tooth Wear:
            </h2>
            <p className="text-center text-xl">
              Brushing your teeth with a back-and-forth motion can cause wear on
              the tooth enamel, leading to sensitivity and other dental
              problems. Brushing at a 45-degree angle and in an up and down
              motion is a gentle technique that removes plaque without damaging
              the enamel.
            </p>
            <h2 className="text-center text-2xl font-bold">
              4. Freshens Breath:
            </h2>
            <p className="text-center text-xl">
              Brushing at a 45-degree angle and in an up and down motion allows
              you to clean your tongue and the roof of your mouth, where
              bacteria can accumulate and cause bad breath. This technique helps
              to remove odor-causing bacteria, leaving your mouth feeling fresh
              and clean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
