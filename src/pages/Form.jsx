import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    locationInterest: "",
    visitTime: "",
    contactTime: "",
    privacyPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/82f5ffa3-5d25-4052-8d02-8a172e14afbd",
        formData
      );

      console.log("Response from API: ", response);
      if (response.status === 200) {
        alert("Form submitted successfully!");
        // Optionally, you can reset the form or navigate to another page
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          address: "",
          locationInterest: "",
          visitTime: "",
          contactTime: "",
          privacyPolicy: false
        });
        // onClose(); // Assuming onClose function is defined elsewhere
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form");
    }
  };
  return (
    <div className="w-full relative bg-gainsboro-100 h-[3018px] overflow-hidden text-left text-base text-black font-montserrat">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(90deg,_#a0a3ff,_#c78eed)] w-[1512px] h-[840px]" />
      <div className="absolute top-[165px] left-[134px] font-medium font-poppins text-steelblue">
        Enquire form
      </div>
      <div className="absolute top-[165px] left-[72px] font-medium font-poppins text-steelblue">
        Home &gt;
      </div>

      <form onSubmit={handleSubmit}>
        <div className="absolute top-[989px] left-[307px] text-xl leading-[32px] flex items-center w-[146px]">
          First Name
        </div>
        <input
          className="absolute top-[1027px] left-[calc(50%_-_449px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
        />

        <div className="absolute top-[1112px] left-[307px] text-xl leading-[32px] flex items-center w-[146px]">
          Last Name
        </div>
        <input
          className="absolute top-[1150px] left-[calc(50%_-_449px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
        />

        <div className="absolute top-[1226px] left-[307px] text-xl leading-[32px] flex items-center w-[146px]">
          Email
        </div>
        <input
          className="absolute top-[1264px] left-[calc(50%_-_449px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
        />

        <div className="absolute top-[1341px] left-[308px] text-xl leading-[32px] flex items-center w-[196px]">
          Phone number
        </div>
        <input
          className="absolute top-[1379px] left-[calc(50%_-_448px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <div className="absolute top-[1455px] left-[307px] text-xl leading-[32px] flex items-center w-[196px]">
          Address
        </div>
        <input
          className="absolute top-[1493px] left-[calc(50%_-_449px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />

        <div className="absolute top-[1570px] left-[308px] text-xl leading-[32px] flex items-center w-[310px]">
          Locations you interested in
        </div>
        <input
          className="absolute top-[1608px] left-[calc(50%_-_449px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="locationInterest"
          value={formData.locationInterest}
          onChange={handleChange}
          placeholder="Enter locations you are interested in"
        />

        <div className="absolute top-[1693px] left-[309px] text-xl leading-[32px] flex items-center w-[310px]">
          When planning to visit
        </div>
        <input
          className="absolute top-[1731px] left-[calc(50%_-_448px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="visitTime"
          value={formData.visitTime}
          onChange={handleChange}
          placeholder="Enter when you are planning to visit"
        />

        <div className="absolute top-[1816px] left-[310px] text-xl leading-[32px] flex items-center w-[310px]">
          Best contact time
        </div>
        <input
          className="absolute top-[1854px] left-[calc(50%_-_447px)] w-[866px] h-14 text-center text-thistle border-[1px] border-solid border-mediumslateblue rounded-lg"
          type="text"
          name="contactTime"
          value={formData.contactTime}
          onChange={handleChange}
          placeholder="Enter the best time to contact you"
        />

        <div className="absolute top-[1956px] left-[346px] text-xl leading-[32px] flex items-center w-[310px]">
          I agree to the privacy policy
        </div>
        <input
          className="absolute top-[1964px] left-[308px] w-[15px] h-[15px] rounded-[50%] border-[1px] border-solid border-black"
          type="checkbox"
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="absolute top-[2067px] left-[calc(50%_-_138px)] shadow-[0px_1px_2px_rgba(0,_0,_0,_0.05)] rounded-lg bg-darkslategray-200 w-[209px] h-14 text-center text-white font-arial"
        >
          <b className="absolute top-[16px] left-[calc(50%_-_27.5px)] leading-[24px]">
            Submit
          </b>
        </button>
      </form>
      
      {/* Other content of the form (e.g., images, footer, etc.) */}
      <div className="absolute top-[2506px] left-[95px] w-[1321px] flex flex-row items-start justify-start py-0 pr-[78px] pl-[84px] box-border gap-[68px] text-4xl text-grey-scale-black-50 font-circular-std">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <img
              className="w-[139px] relative h-[103px] object-cover"
              alt=""
              src="/image-196removebgpreview-21@2x.png"
            />
            <div className="w-[278px] relative leading-[160%] inline-block">
              <p className="m-0">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots
              </p>
              <p className="m-0">
                in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-[32px]">
            <img className="w-8 relative h-8" alt="" src="/group.svg" />
            <img className="w-8 relative h-8" alt="" src="/group1.svg" />
            <img className="w-8 relative h-8" alt="" src="/group-8.svg" />
          </div>
        </div>
        <div className="w-[711px] flex flex-row items-start justify-start gap-[121px] text-lg text-grey-scale-black-75 font-body">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="relative text-4xl leading-[120%] font-circular-std text-grey-scale-black">
              Main Page
            </div>
            <div className="relative leading-[160%]">Destination</div>
            <div className="relative leading-[160%]">Experiences</div>
            <div className="relative leading-[160%]">Travel</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="relative text-4xl leading-[120%] font-circular-std text-grey-scale-black">
              Info
            </div>
            <div className="relative leading-[160%]">Why Nilgiris?</div>
            <div className="relative leading-[160%]">Partner with us</div>
            <div className="relative leading-[160%]">FAQ’s</div>
            <div className="relative leading-[160%]">Blog</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <div className="relative text-4xl leading-[120%] font-circular-std text-grey-scale-black">
              Helpline
            </div>
            <div className="relative leading-[160%]">+91 9488089404</div>
            <div className="relative leading-[160%]">info@udaipur.com</div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[-134px] left-[0px] w-[1512px] h-[979px] object-cover"
        alt=""
        src="/image-196@2x.png"
      />
    </div>
  );
};

export default Form;
