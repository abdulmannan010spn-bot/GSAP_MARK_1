import { MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="w-full min-h-screen flex justify-center">
      <div className=" w-full h-[80vh] mt-20">
        <h2 className="font-[Jura] uppercase text-8xl whitespace-nowrap text-center text-white">
          where to find us
        </h2>
        <div className="h-[80vh] w-full  grid grid-cols-6 grid-rows-4 gap-5 p-10">
          <div className="col-span-4 row-span-4 bg-[#141414] rounded-lg border-2 border-[#292929] p-12">
            <h3 className="text-6xl text-white">Send Message</h3>
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

          <div className="col-span-2 row-span-4 bg-[#141414] border-2 border-[#292929] rounded-lg p-15 flex flex-col gap-7">
            <div>
              <p className="text-xl mt-2">
                <span>
                  <MapPin size={20} />
                </span>{" "}
                Visit Our Store
              </p>
              <p className="text-3xl mt-2">
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
              <p className="text-3xl mt-2">(555) 987-6543</p>
              <p className="text-3xl ">hello@jsmcocktail.com</p>
            </div>
            <div className="w-full h-[25vh] border-2 border-[#292929] rounded-sm ">
              <p className="p-4 text-xl">Open Everyday</p>
              <div className=" flex p-6 gap-10">
                <div>
                  <p className="text-lg">Mon–Fri</p>
                  <p className="text-lg">Sat</p>
                  <p className="text-lg">Sun</p>
                </div>

                <div>
                  <p className="text-lg">10:00am – 8:00pm</p>
                  <p className="text-lg">10:00am – 9:00pm</p>
                  <p className="text-lg">11:00am – 7:00pm</p>
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
