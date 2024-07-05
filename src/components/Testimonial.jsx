import client from "../assets/client.svg";
import client2 from "../assets/client2.svg";
import "../styles/Testimonial.css";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Lauren M.",
      occupation: "UI Designer @Boo",
      img: client,
      feedback:
        "Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
    },
    {
      name: "Lauren M.",
      occupation: "UI Designer @Boo",
      img: client,
      feedback:
        "Anima’s Landing Page UI Kit has become a staple in my design toolkit. This kit has everything I need to get the job done quickly and efficiently.",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Real Stories from the Community</h2>
      <div className="row">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            name={testimonial.name}
            img={testimonial.img}
            feedback={testimonial.feedback}
            occupation={testimonial.occupation}
            key={testimonial.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
