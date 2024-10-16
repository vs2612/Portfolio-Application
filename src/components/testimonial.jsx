import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={"Good product,everything looks very good, and it is super easy to use."}
        />

        <TestimonialCard
          name={"Ramesh"}
          feedback={
            "It was a great experience to be a part of this program!"
          }
        />

        <TestimonialCard
          name={"Sundar Singh"}
          feedback={"Working with you is like having a co-founder by your side!"}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;