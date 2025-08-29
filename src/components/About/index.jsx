import techStacksData from "../../assets/techStacks.json";

const About = () => {
  return (
    <div className="tech-stacks">
      {Object.entries(techStacksData).map(([category, techs]) => (
        <div key={category} className="stacks">
          <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
          <div className="stacks-icon">
            {techs.map((tech, index) => (
              <img key={index} src={`/tech-stacks/${tech}.svg`} alt={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
