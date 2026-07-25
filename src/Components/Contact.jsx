import { openingHours, storeInfo} from "../../Constants";

const Contact = () => {
  return (
    <footer id="contact">
      <div className="content">
        <h2 className="font-[Jura]">{storeInfo.heading}</h2>

        <div>
          <h3>Visit Our Store</h3>
          <p>{storeInfo.address}</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>{storeInfo.contact.phone}</p>
          <p>{storeInfo.contact.email}</p>
        </div>

        <div>
          <h3>Open Everyday</h3>
          {openingHours.map((hours) => (
            <p key={hours.day}>
              {hours.day}: {hours.time}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;