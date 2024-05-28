import { useState } from 'react';
import '../../App.css'
import car1 from '../assets/landingimg/car-1.jpg';
import car2 from '../assets/landingimg/car-2.jpg';
import car3 from '../assets/landingimg/car-3.jpg';
import car4 from '../assets/landingimg/car-4.jpg';
import car5 from '../assets/landingimg/car-5.jpg';
import car6 from '../assets/landingimg/car-6.jpg';
import person1 from '../assets/landingimg/person-1.jpg';
import person2 from '../assets/landingimg/person-2.jpg';
import person3 from '../assets/landingimg/person-3.jpg';
import person4 from '../assets/landingimg/person-4.jpg';
import person5 from '../assets/landingimg/person-5.jpg';
import hero from '../assets/landingimg/bg_home.jpg';

function Home() {
    return (
        <>
           
      <main>
        <article>
          <section className="section hero" id="home">
            <div className="container">
            <div class="hero-content">
            <h2 class="h1 hero-title">The easy way to takeover a lease</h2>

            <p class="hero-text">
              Live in Raipur, Durg and Bhilai!
            </p>
          </div>

          <div class="hero-banner"> </div>

          

            </div>
          </section>

          <section className="section featured-car" id="featured-car">
            <div className="container">
              {/* Your featured car section content */}
              <div class="title-wrapper">
            <h2 class="h2 section-title">Featured cars</h2>

            <a href="#" class="featured-car-link">
              <span>View more</span>

              <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </div>

          <ul class="featured-car-list">

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={car1} alt="Mini Cooper 2024" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Mini Cooper</a>
                    </h3>

                    <data class="year" value="2024">2024</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">2 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Hybrid</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">8.1km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong>₹5440</strong> / day
                    </p>

                    <button className="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure class="card-banner">
                  <img src={car2} alt="Swift 2020" loading="lazy" width="440" height="300"
                    class="w-100"/>
                </figure>

                <div class="card-content">

                  <div class="card-title-wrapper">
                    <h3 class="h3 card-title">
                      <a href="#">Swift 2020</a>
                    </h3>

                    <data class="year" value="2020">2020</data>
                  </div>

                  <ul class="card-list">

                    <li class="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span class="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span class="card-item-text">Gasoline</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span class="card-item-text">16.2km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span class="card-item-text">Manual</span>
                    </li>

                  </ul>

                  <div class="card-price-wrapper">

                    <p class="card-price">
                      <strong>₹2000</strong> / day
                    </p>

                    <button class="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div class="featured-car-card">

                <figure className="card-banner">
                  <img src={car3} alt="Kia Seltos " loading="lazy" width="440"
                    height="300" class="w-100"/>
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">Kia Seltoss</a>
                    </h3>

                    <data className="year" value="2020">2020</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span className="card-item-text">4 People</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span className="card-item-text">Gasoline</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span className="card-item-text">9.3km / 1-litre</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span className="card-item-text">Manual</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price">
                      <strong>₹3000</strong> / day
                    </p>

                    <button className="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="featured-car-card">

                <figure className="card-banner">
                  <img src={car4} alt="Mercedes E-class" loading="lazy" width="440"
                    height="300" class="w-100"/>
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">Mercedes E-class</a>
                    </h3>

                    <data className="year" value="2020">2020</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span className="card-item-text">4 People</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span className="card-item-text">Gasoline</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span className="card-item-text">6.4km / 1-litre</span>
                    </li>

                    <li class="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span className="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price">
                      <strong>₹8000</strong> / month
                    </p>

                    <button className="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="featured-car-card">

                <figure class="card-banner">
                  <img src={car5}  alt="Tata Nexon" loading="lazy" width="440"
                    height="300" class="w-100"/>
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">Tata Nexon</a>
                    </h3>

                    <data className="year" value="2023">2023</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span className="card-item-text">4 People</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span className="card-item-text">Electric</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span className="card-item-text">160km / charge</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span className="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p className="card-price">
                      <strong>₹2500</strong> / month
                    </p>

                    <button className="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

            <li>
              <div className="featured-car-card">

                <figure className="card-banner">
                  <img src={car6} alt="BMW 4 Series 2019" loading="lazy" width="440" height="300"
                    className="w-100"/>
                </figure>

                <div className="card-content">

                  <div className="card-title-wrapper">
                    <h3 className="h3 card-title">
                      <a href="#">BMW 4 Series</a>
                    </h3>

                    <data className="year" value="2019">2019</data>
                  </div>

                  <ul className="card-list">

                    <li className="card-list-item">
                      <ion-icon name="people-outline"></ion-icon>

                      <span className="card-item-text">4 People</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="flash-outline"></ion-icon>

                      <span className="card-item-text">Gasoline</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="speedometer-outline"></ion-icon>

                      <span className="card-item-text">7.2km / 1-litre</span>
                    </li>

                    <li className="card-list-item">
                      <ion-icon name="hardware-chip-outline"></ion-icon>

                      <span className="card-item-text">Automatic</span>
                    </li>

                  </ul>

                  <div className="card-price-wrapper">

                    <p class="card-price">
                      <strong>₹10000</strong> / month
                    </p>

                    <button className="btn fav-btn" aria-label="Add to favourite list">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn">Rent now</button>

                  </div>

                </div>

              </div>
            </li>

          </ul>

            </div>
          </section>

          <section className="section get-start">
            <div className="container">
              {/* Your get started section content */}

  <h2 className="h2 section-title">Get started with 3 simple steps</h2>

  <ul className="get-start-list">

    <li>
      <div className="get-start-card">

        <div className="card-icon icon-1">
          <ion-icon name="person-add-outline"></ion-icon>
        </div>

        <h3 className="card-title">Create a profile</h3>

        <p className="card-text">
        Start your journey with Safe Wheels Rental by creating your profile today
        </p>

        <a href="/signup" className="card-link">Get started</a>

      </div>
    </li>

    <li>
      <div className="get-start-card">

        <div className="card-icon icon-2">
          <ion-icon name="car-outline"></ion-icon>
        </div>

        <h3 className="card-title">Tell us what car you want</h3>

        <p className="card-text">
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
        </p>

      </div>
    </li>

   

    <li>
      <div className="get-start-card">

        <div className="card-icon icon-4">
          <ion-icon name="card-outline"></ion-icon>
        </div>

        <h3 className="card-title">Make a deal</h3>

        <p className="card-text">
          There are many variations of passages of Lorem available, but the majority have suffered alteration
        </p>

      </div>
    </li>

  </ul>
            </div>
          </section>

  <section className="section review" id="review" >
            <div className="container">
              {/* Your review section content */}
              <h2 class="h2 section-title"> Reviews</h2>

<ul class="review-list has-scrollbar">

  <li>
    <div class="review-card">

      <figure class="card-banner">

        <a href="#">
          <img src={person1} alt="customer review" loading="lazy"
            class="w-100"/>
        </a>

      </figure>

      <div class="card-content">

        <h5 class="h3 card-title">
          Great experience with Safewheel Rentals! The car was clean, and the process was super easy.
        </h5>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2024-01-14">January 14, 2024</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="12">12</data>
          </div>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="review-card">

      <figure class="card-banner">

        <a href="#">
          <img src={person2} alt="Customer Reviews" loading="lazy"
            class="w-100"/>
        </a>


      </figure>

      <div class="card-content">

        <h5 class="h3 card-title">
          Safewheel Rentals five-star experience! Affordable rates, clean car, friendly staff. Recommended!
        </h5>

        <div class="card-meta">

          <div class="publish-date">

            <time datetime="2024-01-28">January 28, 2024</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="40">40</data>
          </div>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="review-card">

      <figure class="card-banner">

        <a href="#">
          <img src={person3} alt="Customer Reviews" loading="lazy"
            class="w-100"/>
        </a>

      </figure>

      <div class="card-content">

        <h5 class="h3 card-title">
          Safewheel Rentals five-star experience! Affordable rates, clean car, friendly staff. Recommended!
        </h5>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2023-12-22">December 22, 2023</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="14">14</data>
          </div>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="review-card">

      <figure class="card-banner">

        <a href="#">
          <img src={person4} alt="Customer Reviews" loading="lazy"
            class="w-100"/>
        </a>

       

      </figure>

      <div class="card-content">

        <h5 class="h3 card-title">
          Safewheel Rentals smooth sailing! Booking easy, car exceeded expectations. Using again!
        </h5>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2024-03-8">March 8, 2024</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="25">25</data>
          </div>

        </div>

      </div>

    </div>
  </li>

  <li>
    <div class="review-card">

      <figure class="card-banner">

        <a href="#">
          <img src={person5} alt="Customer Reviews " loading="lazy"
            class="w-100"/>
        </a>

      </figure>

      <div class="card-content">

        <h5 class="h3 card-title">
          Safewheel Rentals impressed me! Well-maintained car, staff went above and beyond. 
        </h5>

        <div class="card-meta">

          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>

            <time datetime="2024-02-14">February 14, 2024</time>
          </div>

          <div class="comments">
            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>

            <data value="90">90</data>
          </div>

        </div>

      </div>

    </div>
  </li>

</ul>
          
            </div>
          </section>
        </article>
      </main>


      <section style={{ paddingLeft: '15%' }}>
  <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d118983.72803866133!2d81.619073!3d21.261906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1711794887703!5m2!1sen!2sin" width="80%" height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</section>
        </>
    )
}

export default Home