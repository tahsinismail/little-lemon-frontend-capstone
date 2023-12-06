import React from "react";

const ShopLocation = () => {
  return (
    <>
      <section className="w-[90%] mx-auto my-8 rounded-2xl">
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#495e57] my-8">
          Find us on map
        </h2>
        <iframe
          title="Our Shop Location"
          className=""
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521644.367895199!2d-89.28660180564584!3d41.850652125227626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL%2C%20USA!5e0!3m2!1sen!2sbd!4v1701876790991!5m2!1sen!2sbd"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ShopLocation;
