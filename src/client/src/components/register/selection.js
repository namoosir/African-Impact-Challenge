import register from '../stylesheets/register.css'

const Selection = () => {
  return (
    <div className="row mt-4">
      <div className="col-xl-10">
        <div className="card mt-5">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">
              African Impact Challenge
            </h1>
            <p className="text-center mb-0">
              The goal of the African Impact Challenge is to build the Africa we
              want to see, by
            </p>
            <p className="text-center mb-0">
              investing in our continent’s aspiring entrepreneurs-to-be. We’re
              enabling them to
            </p>
            <p className="text-center mb-0">
              build market-creating innovations, which tackle their country’s
              biggest
            </p>
            <p className="text-center mb-4">challenges with technology</p>

            <h3 className="card-subtitle text-center mt-4 mb-3">Eligibility</h3>
            <ul>
              <li>
                Young Africans who live in the country of the given year’s
                challenge.
              </li>
              <li>
                A desire to pursue impact-focused entrepreneurship as a means of
                livelihood.
              </li>
              <li>A desire to solve critical problems with technology.</li>
              <li>Full time availability of your team from June 2021.</li>
            </ul>

            <h3 className="card-subtitle text-center mt-4 mb-3">
              Selection Criteria
            </h3>
            <ul>
              <li>
                Your idea should address an identified problem/challenge in your
                country, by providing a comprehensive solution through a clearly
                defined job to be done.
              </li>
              <li>
                Your solution should be technology enabled in its creation
                and/or use.
              </li>
              <li>
                The challenge is sector agnostic (open to all
                industries/fields).
              </li>
              <li>
                Preference will be given to solutions that target
                non-consumption, by increasing adoption, accessibility or
                affordability.
              </li>
              <li>
                Preference will be given to innovative business models that are
                scalable.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
