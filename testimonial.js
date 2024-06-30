//Testimonial Data
const testimonials = [
    {
      name: "Kavya",
      job: "Facebook",
      image: "./assets/1.jpg",
      testimonial:
        "Great quality at affordable prices! Love the trendy collections. Perfect for shopping."
    },
    {
      name: "Diya",
      job: "Instagram",
      image: "./assets/2.jpg",
      testimonial:
        "Amazing deals on fashionable clothing. The store always has something new and exciting."
                            },
    {
      name: "Aishwarya",
      job: "Twitter",
      image: "./assets/3.jpg",
      testimonial:
        "Best place for budget shopping. The sale prices are unbeatable, and the variety is impressive.",
    },
    {
      name: "Meera",
      job: "Reddit",
      image: "./assets/4.jpg",
      testimonial:
        "Stylish clothes at great prices. Perfect for casual and everyday wear.Nice dresses available.",
    },
    {
        name: "Rohan",
        job: "Pinterest",
        image: "./assets/5.jpg",
        testimonial:
          "Always find something I love here. Great deals and good quality.Always shopping from there.",
      },
      {
        name: "Advait",
        job: "Youtube",
        image: "./assets/7.jpg",
        testimonial:
          "Affordable and trendy! The collection is always up-to-date with the latest fashion.Good Quality ",
      },
      {
        name: "Ananya",
        job: "TikTok",
        image: "./assets/8.jpg",
        testimonial:
          "Love shopping here! Great prices and a wide variety of stylish clothes.Nice customer     service.",
      },
      {
        name: "Ishan",
        job: "Snapcht",
        image: "./assets/9.jpg",
        testimonial:
          "Amazing deals and great quality for the price. Perfect for budget fashion.Amazing designs available",
      },
      {
        name: "Shadab",
        job: "LinkedIn",
        image: "./assets/10.jpg",
        testimonial:
          "Zudio offers stylish clothing at affordable prices. Perfect for a budget-friendly shopping spree.",
      },
      {
        name: "Nicola Blakely",
        job: " Quora",
        image: "./assets/6.jpg",
        testimonial:
          "Fantastic store for trendy and affordable fashion. Highly recommend for budget-conscious  shoppers.",
      },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial;