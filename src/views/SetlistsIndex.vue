<template>
  <div class="setlists-index">
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <div class="row">
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fa fa-search"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
          </div>
          <div class="col-lg-8 mx-auto">
            <form
              method="post"
              @submit="indexSetlists"
              id="contactForm"
              name="sentMessage"
            >
              <div class="control-group">
                <div class="form-group floating-label-form-group mb-0 pb-2">
                  <label>Name</label>
                  <input
                    required
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Search Past Events"
                    required="required"
                    data-validation-required-message="Please enter your name."
                    v-model="artistName"
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <select
                required
                class="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option>Setlists</option>
              </select>
              <br />
              <div id="success"></div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Portfolio Section Heading-->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        ></h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fa fa-music"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
          <!-- Portfolio Item 1-->
          <div class="col-md-6 col-lg-4 mb-5" v-for="setlist in setlists">
            <div
              class="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
              v-on:click="selectSetlist(setlist)"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>

              <img
                class="img-fluid"
                v-bind:src="
                  `assets/img/${
                    images[Math.floor(Math.random() * images.length)]
                  }`
                "
                alt="..."
              />
            </div>
          </div>
          <!-- Portfolio Item 2-->
          <!-- Portfolio Item 3-->
          <!-- Portfolio Item 4-->
        </div>
      </div>
    </section>
    <!-- About Section-->
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fa fa-book"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- About Section Content-->
        <div class="row">
          <div class="col-lg-4 ml-auto">
            <p class="lead">
              Recytal is a free online community where you can track your
              favorite artists and venues, share and stream content and revisit
              some of your favorite memories from live events all in one place.
            </p>
          </div>
          <div class="col-lg-4 mr-auto">
            <p class="lead">
              You can stay informed of tours and events, find ticket info,
              stream videos and view recent setlists, connect with other fans
              and listen to playlists filled with content curated to your
              interests.
            </p>
          </div>
        </div>
        <!-- About Section Button-->
        <div class="text-center mt-4"></div>
      </div>
    </section>
    <!-- Contact Section-->
    <section class="page-section" id="contact">
      <div class="container">
        <!-- Contact Section Heading-->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Contact
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fa fa-envelope"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Contact Section Form-->
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-->
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Name</label>
                  <input
                    class="form-control"
                    id="name"
                    type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Email Address</label>
                  <input
                    class="form-control"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Phone Number</label>
                  <input
                    class="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div
                  class="form-group floating-label-form-group controls mb-0 pb-2"
                >
                  <label>Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="5"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <br />
              <div id="success"></div>
              <div class="form-group">
                <button
                  class="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <div
      class="portfolio-modal modal fade"
      id="portfolioModal1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <button
            class="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"><i class="fas fa-times"></i></span>
          </button>
          <div class="modal-body text-center">
            <div class="container">
              <div class="row justify-content-center">
                <div v-if="selectedSetlist" class="col-lg-8">
                  <!-- Portfolio Modal - Title-->
                  <h2
                    class="portfolio-modal-title text-secondary text-uppercase mb-0"
                    id="portfolioModal1Label"
                  >
                    {{ selectedSetlist.set }}
                  </h2>
                  <!-- Icon Divider-->
                  <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon">
                      <i class="fa fa-music"></i>
                    </div>
                    <div class="divider-custom-line"></div>
                  </div>

                  <div>Artist Name: {{ selectedSetlist.artist.name }}</div>
                  <div>Event Date: {{ selectedSetlist.eventDate }}</div>
                  <div>City: {{ selectedSetlist.venue.city.name }}</div>
                  <div>Venue: {{ selectedSetlist.venue.name }}</div>

                  <ul v-for="song in selectedSetlist.allSongs">
                    <li>{{ song.name }}</li>
                  </ul>

                  <!-- Portfolio Modal - Image-->
                  <!-- <img class="img-fluid rounded mb-5" src="assets/img/portfolio/cabin-2.jpeg" alt="..." /> -->
                  <!-- Portfolio Modal - Text-->
                  <p class="mb-5">{{ selectedSetlist.set }}</p>
                  <button class="btn btn-primary" data-dismiss="modal">
                    <i class="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  data: function() {
    return {
      artistName: "",
      setlists: { set: "" },
      selectedSetlist: null,
      images: [
        "live-concert-1.jpeg",
        "live-concert-2.jpeg",
        "live-concert-3.jpeg",
        "live-concert-4.jpeg",
        "live-concert-5.jpeg",
        "live-concert-6.jpeg",
        "live-concert-7.jpeg",
        "live-concert-8.jpeg",
        "live-concert-9.jpeg",
        "live-concert-10.jpeg",
        "live-concert-11.jpeg",
        "live-concert-12.jpeg",
        "live-concert-13.jpeg",
        "live-concert-14.jpeg",
        "live-concert-15.jpeg",
        "live-concert-16.jpeg",
        "live-concert-17.jpeg",
        "live-concert-18.jpeg",
        "live-concert-19.jpeg",
        "live-concert-20.jpeg",
        "live-concert-21.jpeg",
      ],
    };
  },
  created: function() {
    console.log("Hello");
    // this.setlistsIndex();
  },
  methods: {
    async indexSetlists(event) {
      event.preventDefault();
      try {
        const { data } = await axios.get(
          `/api/setlists?artist=${this.artistName}`
        );
        console.log("data==>>", data);
        this.setlists = data.body.setlist;
        this.artistName = "";
      } catch (err) {
        console.log("err occurred==>>", err);
      }
    },
    selectSetlist(theSetlist) {
      theSetlist.allSongs = _.flattenDeep(
        theSetlist.sets.set.map((s) => s.song)
      );
      console.log(
        "theSetlist==>>",
        JSON.parse(JSON.stringify(theSetlist, null, 2))
      );
      this.selectedSetlist = theSetlist;
    },
  },
};
</script>
