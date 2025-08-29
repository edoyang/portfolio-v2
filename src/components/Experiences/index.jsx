import experiencesData from "../../assets/experiences.json";

const Experiences = () => {
  return (
    <section id="experiences">
      {experiencesData.map((experience) => (
        <div key={experience.id} className="experience">
          <div className="dot"></div>
          <div className="details">
            <div className="company">
              <div className="image-logo-office">
                <img src="/icons/office.svg" alt="office icon" />
              </div>
              <div className="company-name">
                <h3>{experience.company.name}</h3>
                <h4>{experience.company.location}</h4>
              </div>
            </div>
            <div className="role-details">
              <h2>{experience.role}</h2>
              <p>
                <img src="/icons/calendar.svg" alt="calendar icon" />
                {experience.duration}
              </p>
              <ul>
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experiences;
