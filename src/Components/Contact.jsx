import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="w-full min-h-screen flex justify-center">
      <div className="w-full lg:h-[80vh] lg:mt-20 pt-28 lg:pt-32">
        <h2 className="font-[Jura] uppercase text-center text-white font-bold text-4xl md:text-6xl lg:text-8xl lg:whitespace-nowrap">
          where to find us
        </h2>

        <div className="w-full flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-5 p-4 md:p-6 lg:p-10">
          <div className="col-span-4 row-span-4 bg-[#141414] rounded-lg border-2 border-[#292929] p-5 md:p-8 lg:p-12">
            <h3 className="text-3xl md:text-5xl lg:text-6xl text-white font-semibold">
              Send Message
            </h3>

            <div className="flex flex-col lg:flex-row gap-6 pt-8">
              <div className="flex-1 w-full">
                <p className="mb-2 text-sm md:text-base">Name</p>

                <input
                  className="w-full p-4 rounded-sm border-2 border-[#292929] bg-transparent outline-none"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex-1 w-full">
                <p className="mb-2 text-sm md:text-base">Email</p>

                <input
                  className="w-full border-2 border-[#292929] p-4 rounded-sm bg-transparent outline-none"
                  type="email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm md:text-base">Subject</p>

              <input
                className="w-full border-2 border-[#292929] p-4 rounded-sm bg-transparent outline-none"
                type="text"
                placeholder="Custom"
              />
            </div>

            <div className="mt-6">
              <p className="mb-2 text-sm md:text-base">Message</p>

              <textarea
                className="w-full border-2 border-[#292929] resize-none h-40 p-4 rounded-sm bg-transparent outline-none"
                placeholder="How may I assist you Today?"
              />
            </div>

            <button className="mt-8 px-8 py-4 border-2 border-[#616784] rounded-sm text-sm hover:bg-[#616784] transition-all duration-300">
              Send Message
            </button>
          </div>


          <div className="col-span-2 row-span-4 bg-[#141414] border-2 border-[#292929] rounded-lg p-5 md:p-8 lg:p-12 flex flex-col gap-7">

            <div>
              <p className="flex items-center gap-2 text-lg md:text-xl">
                <MapPin size={20} />
                Visit Our Store
              </p>

              <p className="text-2xl md:text-3xl mt-3 leading-relaxed">
                456, Raq Blvd. #404,
                <br />
                Los Angeles,
                <br />
                CA 90210
              </p>
            </div>

            <div className="w-full h-0.5 bg-[#292929]"></div>

            <div>
              <p className="flex items-center gap-2 text-lg md:text-xl">
                <Phone size={20} />
                Contact Us
              </p>

              <p className="text-2xl md:text-3xl mt-3">(555) 987-6543</p>

              <p className="text-xl md:text-2xl lg:text-3xl mt-3 break-all">
                hello@jsmcocktail.com
              </p>
            </div>


            <div className="w-full border-2 border-[#292929] rounded-sm">
              <p className="p-4 text-lg lg:text-xl">Open Everyday</p>

              <div className="flex justify-between p-4 lg:p-6">
                <div className="space-y-2 whitespace-nowrap">
                  <p className="text-sm md:text-base lg:text-lg">Mon–Fri</p>
                  <p className="text-sm md:text-base lg:text-lg">Sat</p>
                  <p className="text-sm md:text-base lg:text-lg">Sun</p>
                </div>

                <div className="space-y-2 text-right whitespace-nowrap">
                  <p className="text-sm md:text-base lg:text-lg">
                    10:00am – 8:00pm
                  </p>

                  <p className="text-sm md:text-base lg:text-lg">
                    10:00am – 9:00pm
                  </p>

                  <p className="text-sm md:text-base lg:text-lg">
                    11:00am – 7:00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;