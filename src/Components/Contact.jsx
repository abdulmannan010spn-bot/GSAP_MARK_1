import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="w-full min-h-screen flex justify-center">
      <div className=" w-full lg:h-[80vh] lg:mt-20">
        <h2 className="font-[Jura] uppercase lg:text-8xl lg:whitespace-nowrap text-center text-white font-bold text-4xl">
          where to find us
        </h2>
        <div className="lg:h-[80vh] w-full  lg:grid lg:grid-cols-6 lg:grid-rows-4 gap-5 p-10 flex flex-col">
          <div className="col-span-4 row-span-4 bg-[#141414] rounded-lg border-2 border-[#292929] p-12">
            <h3 className="lg:text-6xl text-3xl text-white font-semibold">Send Message</h3>
            <div className="flex items-center justify-center gap-10 pt-8">
              <div className="flex-1 mb-3">
                <p className="mb-1">Name</p>

                <input
                  className="w-full p-4 rounded-sm border-2 border-[#292929]"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex-1 mb-3">
                <p className="mb-1">Email</p>
                <input
                  className="w-full border-2 border-[#292929] p-4 rounded-sm"
                  type="Email"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div className="mb-3">
              <p className="mb-1">Subject</p>
              <input
                className="w-full border-2 border-[#292929] p-4 rounded-sm"
                type="Text"
                placeholder="Custom"
              />
            </div>

            <div className="mb-3">
              <p className="mb-1">Message</p>
              <textarea
                className="w-full border-2 border-[#292929] resize-none h-40 p-4 rounded-sm"
                type="Text"
                placeholder="How may I assist you Today?"
              />
            </div>

            <button className="px-8 py-4 border-2 border-[#616784] rounded-sm text-sm">
              Send Message
            </button>
          </div>

          <div className="col-span-2 row-span-4 bg-[#141414] border-2 border-[#292929] rounded-lg p-15 flex flex-col gap-7 BoxGayabin14pro">
            <div>
              <p className="lg:text-xl mt-2 text-lg">
                <span>
                  <MapPin size={20} />
                </span>{" "}
                Visit Our Store
              </p>
              <p className="lg:text-3xl mt-2 text-2xl">
                456, Raq Blvd. #404, Los Angeles, CA 90210
              </p>
            </div>
            <div className="w-full h-1 bg-[#292929]"></div>

            <div>
              <p className="text-xl mt-2">
                <span>
                  <Phone size={20} />
                </span>{" "}
                Contact Us
              </p>
              <p className="lg:text-3xl mt-2 text-2xl">(555) 987-6543</p>
              <p className="lg:text-3xl mt-2 text-2xl">hello@jsmcocktail.com</p>
            </div>
            <div className="w-full lg:h-[25vh] border-2 border-[#292929] rounded-sm ">
              <p className="p-4 text-xl">Open Everyday</p>
              <div className=" flex p-6 justify-between">
                <div className="whitespace-nowrap">
                  <p className="lg:text-lg text-sm">Mon–Fri</p>
                  <p className="lg:text-lg text-sm">Sat</p>
                  <p className="lg:text-lg">Sun</p>
                </div>

                <div className="whitespace-nowrap">
                  <p className="lg:text-lg text-sm">10:00am – 8:00pm</p>
                  <p className="lg:text-lg text-sm">10:00am – 9:00pm</p>
                  <p className="lg:text-lg text-sm">11:00am – 7:00pm</p>
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
