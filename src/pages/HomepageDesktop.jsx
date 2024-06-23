import { useCallback } from "react";
import Homepage from "../components/Homepage";
import Slider from "../components/Slider";
import Secondpageimg from "../components/Secondpageimg";
import { useNavigate } from "react-router-dom";

const HomepageDesktop = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/form");
  }, [navigate]);

  return (
    <div className="w-full relative bg-gainsboro-100 h-[11302px] overflow-hidden text-left text-5xl text-white font-circular-std">
      <Homepage />
      <div className="absolute top-[2317px] left-[1751px] bg-gainsboro-200 w-[139px] h-52" />
      <div className="absolute top-[9945px] left-[1822px] rounded-3xs bg-gainsboro-200 w-[249px] h-[212px]" />
      <div className="absolute top-[4267.6px] left-[1267px] text-21xl leading-[120%] font-allenoire-free-personal text-center inline-block w-[372px]">
        Name
      </div>
      <div className="absolute top-[2000px] left-[180px] w-[540px] flex flex-col items-start justify-start text-4xl text-orange">
        <div className="w-[564px] flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <div className="self-stretch relative tracking-[0.2em] leading-[120%] uppercase">
              Key features
            </div>
            <div className="self-stretch relative text-29xl leading-[120%] font-allenoire-free-personal text-darkslategray-300">
              Top Things to do
            </div>
          </div>
          <div className="self-stretch relative text-lg font-medium font-montserrat text-darkseagreen-100">
            <p className="m-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </p>
            <p className="m-0">from 45 BC.</p>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[1937px] left-[883px] w-[447.5px] h-[272px] overflow-hidden object-cover"
        alt=""
        src="/background@2x.png"
      />
      <div className="absolute top-[2084px] left-[1006px] shadow-[-12px_83px_23px_rgba(0,_0,_0,_0),_-8px_53px_21px_rgba(0,_0,_0,_0),_-4px_30px_18px_rgba(0,_0,_0,_0.01),_-2px_13px_13px_rgba(0,_0,_0,_0.02),_0px_3px_7px_rgba(0,_0,_0,_0.03)] rounded-81xl bg-white w-[301px] flex flex-row items-center justify-start py-4 px-8 box-border gap-[16px] text-4xl text-grey-scale-black">
        <img
          className="w-10 relative h-10 overflow-hidden shrink-0"
          alt=""
          src="/map11-1.svg"
        />
        <div className="relative leading-[120%]">Paradise on Earth</div>
      </div>
      <div className="absolute top-[3684.6px] left-[163px] text-lg leading-[120%] text-darkgreen">
        Aquarium
      </div>
      <div className="absolute top-[3684.6px] left-[297px] text-lg leading-[120%] text-black-50">
        Museums
      </div>
      <div className="absolute top-[3684.6px] left-[418px] text-lg leading-[120%] text-black-50">{`Cactus house `}</div>
      <div className="absolute top-[3684.6px] left-[570px] text-lg leading-[120%] text-black-50">{`Seminar hall `}</div>
      <div className="absolute top-[3686.6px] left-[700px] text-lg leading-[120%] text-black-50">
        View points
      </div>
      <div className="absolute top-[3686.6px] left-[838px] text-lg leading-[120%] text-black-50 whitespace-pre-wrap">{`Jungle suites  `}</div>
      <div className="absolute top-[3786.6px] left-[160px] shadow-[0px_-172px_41.7px_rgba(0,_0,_0,_0.25)_inset] rounded-3xs w-[350px] h-[630px]" />
      <div className="absolute top-[3786.6px] left-[530px] shadow-[0px_-178px_40.4px_rgba(0,_0,_0,_0.25)_inset] rounded-3xs w-[350px] h-[625px]" />
      <div className="absolute top-[3786.6px] left-[890px] shadow-[0px_-192px_40.7px_rgba(0,_0,_0,_0.25)_inset] rounded-3xs w-[350px] h-[625px]" />
      <div className="absolute top-[3786.6px] left-[1255px] shadow-[0px_-185px_45.1px_rgba(0,_0,_0,_0.25)_inset] rounded-3xs w-[350px] h-[625px]" />
      <div className="absolute top-[4273.6px] left-[155px] text-21xl leading-[120%] font-allenoire-free-personal text-center inline-block w-[372px]">
        Name
      </div>
      <div className="absolute top-[4273.6px] left-[527px] text-21xl leading-[120%] font-allenoire-free-personal text-center inline-block w-[372px]">
        Name
      </div>
      <div className="absolute top-[4273.6px] left-[899px] text-21xl leading-[120%] font-allenoire-free-personal text-center inline-block w-[372px]">
        Name
      </div>
      <div className="absolute top-[3709.6px] left-[160px] box-border w-[84px] h-0.5 border-t-[2px] border-solid border-orange" />
      <div className="absolute top-[3450.6px] left-[calc(50%_-_720px)] w-[1440px] flex flex-row items-center justify-between py-16 px-[165px] box-border text-4xl text-orange">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="relative tracking-[0.2em] leading-[120%] uppercase">
            Top Destination
          </div>
          <div className="relative text-[44px] leading-[120%] font-allenoire-free-personal text-darkslategray-300">
            Get Inspired
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[32px]">
          <div className="w-[100px] relative h-[100px]">
            <div className="absolute top-[0px] left-[0px] rounded-81xl bg-white box-border w-[100px] h-[100px] border-[1px] border-solid border-grey-scale-black-10" />
            <img
              className="absolute top-[38px] left-[38px] w-6 h-6 overflow-hidden"
              alt=""
              src="/arrowleft-1.svg"
            />
          </div>
          <div className="w-[100px] relative shadow-[0px_181px_51px_rgba(0,_0,_0,_0),_0px_116px_46px_rgba(0,_0,_0,_0.01),_0px_65px_39px_rgba(0,_0,_0,_0.04),_0px_29px_29px_rgba(0,_0,_0,_0.06),_0px_7px_16px_rgba(0,_0,_0,_0.07),_0px_0px_0px_rgba(0,_0,_0,_0.08)] h-[100px]">
            <div className="absolute top-[0px] left-[100px] rounded-81xl bg-mediumseagreen w-[100px] h-[100px] [transform:_rotate(180deg)] [transform-origin:0_0]" />
            <img
              className="absolute top-[38px] left-[38px] w-6 h-6 overflow-hidden object-contain"
              alt=""
              src="/arrowleft-2.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[3292px] left-[1304px] w-[174px] h-[159px] overflow-hidden"
        alt=""
        src="/objects.svg"
      />
      <img
        className="absolute top-[2965px] left-[-220px] w-[700.6px] h-[681px] object-contain"
        alt=""
        src="/botanicalwallartsetlineartleavesdrawingwithabstractshapesabstractplantartdesignsforprintscoverswallpapersminimalandnaturalwallartillustrationvectorremovebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[4430.3px] left-[1013.3px] w-[346.7px] h-[311.7px] object-contain"
        alt=""
        src="/91658picjc0862nhdcga5-pic2018-1@2x.png"
      />
      <div className="absolute top-[71px] left-[510px] flex flex-row items-start justify-start text-base text-black">
        <div className="relative leading-[120%] font-medium">Destination</div>
      </div>
      <div className="absolute top-[741px] left-[213px] flex flex-row items-start justify-start">
        <div className="relative leading-[120%]">Nilgiris</div>
      </div>
      <div className="absolute top-[71px] left-[644px] flex flex-row items-start justify-start text-base text-black">
        <div className="relative leading-[120%] font-medium">Experiences</div>
      </div>
      <div className="absolute top-[72px] left-[875px] flex flex-row items-start justify-start text-base text-black">
        <div className="relative leading-[120%] font-medium">About us</div>
      </div>
      <div className="absolute top-[72px] left-[795px] text-base leading-[120%] font-medium text-black">
        Shop
      </div>
      <img
        className="absolute h-[0.07%] w-[0.83%] top-[0.69%] right-[57.57%] bottom-[99.24%] left-[41.6%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[0.07%] w-[0.83%] top-[0.69%] right-[47.92%] bottom-[99.24%] left-[51.25%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[324px] left-[673px] text-xl leading-[160%] uppercase font-semibold font-montserrat text-black text-center">
        Experience
      </div>
      <div className="absolute top-[340.5px] left-[558.5px] box-border w-[101px] h-px border-t-[1px] border-solid border-darkgreen" />
      <img
        className="absolute top-[449px] left-[559px] w-[358px] h-0.5 object-contain"
        alt=""
      />
      <div className="absolute top-[340.5px] left-[816.5px] box-border w-[101px] h-px border-t-[1px] border-solid border-darkgreen" />
      <div className="absolute top-[764px] left-[1166px] box-border w-[29px] h-0.5 border-t-[2px] border-solid border-white" />
      <div className="absolute top-[731px] left-[1175px]">1</div>
      <div className="absolute top-[731px] left-[1219px]">2</div>
      <div className="absolute top-[731px] left-[1262px]">3</div>
      <div className="absolute top-[725px] left-[1107px] rounded-[50%] box-border w-10 h-10 border-[1px] border-solid border-white" />
      <img
        className="absolute h-[0.14%] w-[0.83%] top-[6.52%] right-[21.32%] bottom-[93.34%] left-[77.85%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector1.svg"
      />
      <img
        className="absolute h-[0.2%] w-[1.18%] top-[6.57%] right-[86.25%] bottom-[93.23%] left-[12.57%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector2.svg"
      />
      <img
        className="absolute top-[41px] left-[180px] w-36 h-[118px] object-cover"
        alt=""
        src="/image-196removebgpreview-1@2x.png"
      />
      <div className="absolute top-[353px] left-[555px] w-[371px] h-[84px] overflow-hidden text-51xl text-darkslategray-200 font-allenoire-free-personal">
        <div className="absolute top-[0px] left-[0px] leading-[120%] inline-block w-[371px]">
          Mountains
        </div>
        <div className="absolute top-[0px] left-[537px] leading-[120%] text-lemonchiffon inline-block w-[289px]">
          Wildlife
        </div>
        <div className="absolute top-[0px] left-[993px] leading-[120%] text-white inline-block w-[360px]">
          Waterfalls
        </div>
        <div className="absolute top-[0px] left-[1540px] leading-[120%] text-darkgreen inline-block w-[360px]">
          Mountains
        </div>
      </div>
      <div className="absolute top-[2331px] left-[157px] w-[1283px] h-[794px] overflow-x-auto text-center text-xl font-allenoire-free-personal">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-[350px] h-[650px] object-cover"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <img
          className="absolute top-[0px] left-[1500px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-2670@2x.png"
        />
        <Slider />
        <img
          className="absolute top-[0px] left-[1874px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-20@2x.png"
        />
        <img
          className="absolute top-[0px] left-[741px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className="absolute top-[0px] left-[2241px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-21@2x.png"
        />
        <img
          className="absolute top-[0px] left-[1106px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        <img
          className="absolute top-[0px] left-[2606px] rounded-3xs w-[350px] h-[647px] object-cover"
          alt=""
          src="/rectangle-22@2x.png"
        />
        <div className="absolute top-[545px] left-[72px] text-21xl leading-[120%] text-left">
          Ooty Lake
        </div>
        <div className="absolute top-[545px] left-[1572px] text-21xl leading-[120%] text-left">
          Ooty Lake
        </div>
        <div className="absolute top-[548px] left-[406px] text-17xl leading-[120%] text-left">
          Doddabetta Peak
        </div>
        <div className="absolute top-[548px] left-[1906px] text-17xl leading-[120%] text-left">
          Doddabetta Peak
        </div>
        <div className="absolute top-[527px] left-[808px] text-17xl leading-[120%]">
          <p className="m-0">{`Mukurthi `}</p>
          <p className="m-0">National Park</p>
        </div>
        <div className="absolute top-[527px] left-[2308px] text-17xl leading-[120%]">
          <p className="m-0">{`Mukurthi `}</p>
          <p className="m-0">National Park</p>
        </div>
        <div className="absolute top-[535px] left-[1229px] text-21xl leading-[120%] text-left">
          Tiger Hill
        </div>
        <div className="absolute top-[535px] left-[2729px] text-21xl leading-[120%] text-left">
          Tiger Hill
        </div>
        <div className="absolute top-[666px] left-[25px] font-circular-std text-black inline-block w-72">{`A popular tourist recreational spot, this L-shaped lake provides boating facilities. `}</div>
        <div className="absolute top-[666px] left-[1525px] font-circular-std text-black inline-block w-72">{`A popular tourist recreational spot, this L-shaped lake provides boating facilities. `}</div>
        <div className="absolute top-[669px] left-[394px] font-circular-std text-black inline-block w-72 h-[77px]">
          <p className="m-0">
            On clear days, Doddabetta Peak provides panoramic views of lush
            landscape.
          </p>
        </div>
        <div className="absolute top-[669px] left-[1894px] font-circular-std text-black inline-block w-72 h-[77px]">
          <p className="m-0">
            On clear days, Doddabetta Peak provides panoramic views of lush
            landscape.
          </p>
        </div>
        <div className="absolute top-[669px] left-[755px] font-circular-std text-black inline-block w-[321px]">
          It is home to an array of endangered wildlife, including royal Bengal
          tiger and Asian elephant.
        </div>
        <div className="absolute top-[669px] left-[2255px] font-circular-std text-black inline-block w-[321px]">
          It is home to an array of endangered wildlife, including royal Bengal
          tiger and Asian elephant.
        </div>
        <div className="absolute top-[669px] left-[1106px] font-circular-std text-black inline-block w-[313px]">
           Its splendid sights of the early morning sunrise where you can
          witness a panoramic view of Mount Everest and Mount Kanchenjunga
          together.
        </div>
        <div className="absolute top-[669px] left-[2606px] font-circular-std text-black inline-block w-[313px]">
           Its splendid sights of the early morning sunrise where you can
          witness a panoramic view of Mount Everest and Mount Kanchenjunga
          together.
        </div>
      </div>
      <Secondpageimg />
      <div
        className="absolute top-[58px] left-[1122px] rounded-13xl bg-darkslategray-200 w-[165px] h-[49px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <div className="absolute top-[9965px] left-[122.7px] rounded-13xl bg-honeydew w-[1110px] h-[608px]" />
      <div className="absolute top-[4745px] left-[653px] text-29xl leading-[120%] font-allenoire-free-personal text-darkslategray-300 inline-block w-[653px]">
        Our goal is to provide you with a completed feeling of comfort and
        quality at all levels
      </div>
      <div className="absolute top-[5966px] left-[484px] text-29xl leading-[120%] font-allenoire-free-personal text-darkslategray-300 text-center inline-block w-[530px]">
        One platform for all your daily needs
      </div>
      <div className="absolute top-[7145px] left-[385px] text-21xl font-allenoire-free-personal text-darkgreen text-center inline-block w-[633px] h-[95px]">
        <p className="m-0">
          From comfortable hotel rooms to fabulous landscapes.
        </p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[7235px] left-[385px] text-13xl text-orange inline-block w-[620px] h-10">
        Our clients film every moment of our tours.
      </div>
      <div className="absolute top-[8045px] left-[112px] text-45xl leading-[120%] font-allenoire-free-personal text-darkslategray-300 inline-block w-[157px]">
        FAQs
      </div>
      <div className="absolute top-[9049px] left-[406.7px] text-45xl leading-[120%] font-allenoire-free-personal text-darkslategray-100 text-center inline-block w-[557px]">
        Do you have any questions?
      </div>
      <div className="absolute top-[4985px] left-[653px] text-base text-black inline-block w-[527px]">
        Our tours will allow you to regain strength and feel harmony with
        nature, far away from city ​​bustle.
      </div>
      <div className="absolute top-[6082px] left-[566px] text-xl text-orange inline-block w-[365px]">
        Enjoy the Mewar Sound and Light Show
      </div>
      <img
        className="absolute top-[4745px] left-[122px] rounded-3xs w-[468px] h-[753px] object-cover"
        alt=""
        src="/rectangle-2631@2x.png"
      />
      <img
        className="absolute top-[6337px] left-[208px] rounded-3xs w-[380px] h-[540px] object-cover"
        alt=""
        src="/rectangle-2639@2x.png"
      />
      <img
        className="absolute top-[9142px] left-[1067px] rounded-3xs w-[241.5px] h-[255.7px] object-contain"
        alt=""
        src="/rectangle-2660@2x.png"
      />
      <img
        className="absolute top-[6617px] left-[963px] rounded-3xs w-80 h-[260px] object-cover"
        alt=""
        src="/rectangle-2642@2x.png"
      />
      <img
        className="absolute top-[6339px] left-[963px] rounded-3xs w-80 h-[260px] object-cover"
        alt=""
        src="/rectangle-2644@2x.png"
      />
      <img
        className="absolute top-[6337px] left-[616px] rounded-3xs w-80 h-[260px] object-cover"
        alt=""
        src="/rectangle-2640@2x.png"
      />
      <img
        className="absolute top-[6617px] left-[616px] rounded-3xs w-80 h-[260px] object-cover"
        alt=""
        src="/rectangle-2641@2x.png"
      />
      <img
        className="absolute top-[5191px] left-[626px] rounded-3xs w-[283px] h-[305px] object-cover"
        alt=""
        src="/rectangle-2632@2x.png"
      />
      <img
        className="absolute top-[5193px] left-[929px] rounded-3xs w-[283px] h-[305px] object-cover"
        alt=""
        src="/rectangle-2633@2x.png"
      />
      <img
        className="absolute top-[5193px] left-[1232px] rounded-3xs w-[283px] h-[305px] object-cover"
        alt=""
        src="/rectangle-2634@2x.png"
      />
      <div className="absolute top-[5404px] left-[827px] rounded-[50%] bg-white w-[62px] h-[60px]" />
      <div className="absolute top-[5404px] left-[1131px] rounded-[50%] bg-white w-[62px] h-[60px]" />
      <div className="absolute top-[6176px] left-[585px] rounded-13xl bg-darkslategray-300 w-[328px] h-20" />
      <div className="absolute top-[8717px] left-[600.7px] rounded-13xl bg-darkslategray-300 w-[328px] h-20" />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[9358px] left-[130.7px] rounded-16xl w-[389px] h-20"
        type="text"
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[9465px] left-[130.7px] rounded-16xl w-[792px] h-64"
        type="text"
      />
      <input
        className="[border:none] [outline:none] bg-whitesmoke absolute top-[9358px] left-[533.7px] rounded-16xl w-[389px] h-20"
        type="text"
      />
      <div className="absolute top-[9218px] left-[478px] text-13xl leading-[120%] text-sandybrown text-center inline-block w-[400px]">
        Undecided about the tour Let’s us help!
      </div>
      <div className="absolute top-[9386px] left-[164.7px] text-xl leading-[120%] text-gray-100 text-center inline-block w-[86px]">
        Name
      </div>
      <div className="absolute top-[9495px] left-[158.7px] text-xl leading-[120%] text-gray-100 text-center inline-block w-[173px]">
        Ask a question
      </div>
      <div className="absolute top-[9386px] left-[563.7px] text-xl leading-[120%] text-gray-100 text-center inline-block w-[86px]">
        Phone
      </div>
      <div className="absolute top-[8655px] left-[86.7px] text-[170px] leading-[120%] font-allenoire-free-personal text-darkseagreen-200 text-center">
        01/09
      </div>
      <div className="absolute top-[8032px] left-[600.7px] rounded-3xs bg-darkseagreen-200 w-[706px] h-[248px]" />
      <div className="absolute top-[8047px] left-[1240.7px] rounded-[50%] bg-white w-[50px] h-[50px]" />
      <div className="absolute top-[8316px] left-[1240.7px] rounded-[50%] bg-powderblue w-[50px] h-[50px]" />
      <div className="absolute top-[8402px] left-[1242.7px] rounded-[50%] bg-powderblue w-[50px] h-[50px]" />
      <div className="absolute top-[8488px] left-[1244.7px] rounded-[50%] bg-powderblue w-[50px] h-[50px]" />
      <div className="absolute top-[8574px] left-[1246.7px] rounded-[50%] bg-powderblue w-[50px] h-[50px]" />
      <div className="absolute top-[8072.5px] left-[1251.2px] box-border w-[29px] h-[3px] border-t-[3px] border-solid border-black" />
      <div className="absolute top-[8341.5px] left-[1251.2px] box-border w-[29px] h-[3px] border-t-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8427.5px] left-[1253.2px] box-border w-[29px] h-[3px] border-t-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8513.5px] left-[1255.2px] box-border w-[29px] h-[3px] border-t-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8599.5px] left-[1257.2px] box-border w-[29px] h-[3px] border-t-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8326.5px] left-[1266.2px] box-border w-[3px] h-[29px] border-r-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8412.5px] left-[1268.2px] box-border w-[3px] h-[29px] border-r-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8498.5px] left-[1270.2px] box-border w-[3px] h-[29px] border-r-[3px] border-solid border-darkslategray-100" />
      <div className="absolute top-[8584.5px] left-[1272.2px] box-border w-[3px] h-[29px] border-r-[3px] border-solid border-darkslategray-100" />
      <button className="cursor-pointer [border:none] p-0 bg-darkslategray-300 absolute top-[9514px] left-[959.7px] rounded-13xl w-[254px] h-[179px]" />
      <div className="absolute top-[9589px] left-[1043.7px] leading-[120%] font-medium text-center inline-block w-[86px]">
        Send
      </div>
      <div className="absolute top-[10125px] left-[190.7px] flex flex-col items-start justify-start gap-[32px] text-center text-4xl text-orange">
        <div className="w-[982px] relative tracking-[0.2em] leading-[120%] uppercase inline-block">
          subscribe to our newsletter
        </div>
        <div className="w-[982px] relative text-[55px] leading-[120%] text-grey-scale-black inline-block">{`Prepare yourself & let’s explore the beauty of the Nilgiris`}</div>
      </div>
      <div className="absolute top-[10423px] left-[186.7px] w-[982px] flex flex-row items-start justify-start gap-[64px]">
        <div className="self-stretch flex-1 rounded-13xl bg-white flex flex-row items-center justify-start p-8 gap-[16px]">
          <img
            className="w-8 relative h-8 overflow-hidden shrink-0"
            alt=""
            src="/message-1.svg"
          />
          <input
            className="[border:none] [outline:none] font-circular-std text-4xl bg-[transparent] relative leading-[120%] text-grey-scale-black-75 text-center"
            value="Subscribe"
            placeholder="Your Email"
            type="text"
          />
        </div>
        <button className="cursor-pointer [border:none] py-8 px-16 bg-darkgreen self-stretch rounded-13xl flex flex-row items-center justify-start">
          <div className="relative text-4xl leading-[120%] font-circular-std text-white text-center">
            Subscribe
          </div>
        </button>
      </div>
      <img
        className="absolute top-[9938px] left-[83.7px] w-[183.9px] h-[176.4px] overflow-hidden"
        alt=""
        src="/graphic-elements.svg"
      />
      <img
        className="absolute top-[9938px] left-[83.7px] w-[183.9px] h-[176.4px] overflow-hidden"
        alt=""
        src="/graphic-elements.svg"
      />
      <div className="absolute top-[8331px] left-[600.7px] text-mini text-dimgray inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[8067px] left-[618.7px] text-mini text-gray-200 inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[8067px] left-[618.7px] text-mini text-gray-200 inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[8110px] left-[618.7px] text-mini text-gray-200 inline-block w-[589px] h-[19px]">
        Figma ipsum component variant main layer. Component flatten star vector
        undo. Ipsum strikethrough move layout pencil main arrow. Thumbnail slice
        duplicate rectangle overflow text layer export overflow. Figma pencil
        opacity prototype strikethrough variant.
      </div>
      <div className="absolute top-[8417px] left-[604.7px] text-mini text-dimgray inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[8503px] left-[604.7px] text-mini text-dimgray inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[8589px] left-[604.7px] text-mini text-dimgray inline-block w-[589px] h-[19px]">
        <p className="m-0">
          Figma ipsum component variant main layer. Flows arrow project auto pen
          italic rotate ?
        </p>
      </div>
      <div className="absolute top-[10749px] left-[31.7px] w-[1321px] flex flex-row items-start justify-start py-0 pr-[78px] pl-[84px] box-border gap-[68px] text-4xl text-grey-scale-black-50">
        <div className="flex-1 flex flex-col items-start justify-start gap-[64px]">
          <div className="flex flex-col items-start justify-start gap-[32px]">
            <img
              className="w-[139px] relative h-[103px] object-cover"
              alt=""
              src="/image-196removebgpreview-2@2x.png"
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
      <div className="absolute top-[8742px] left-[685.7px] inline-block w-44">
        More questions
      </div>
      <div className="absolute top-[6201px] left-[692px] font-medium inline-block w-[113px]">
        Shop now
      </div>
      <div
        className="absolute top-[72px] left-[1168px] text-base font-medium inline-block w-[74px] cursor-pointer"
        onClick={onRectangleClick}
      >
        Book now
      </div>
      <img
        className="absolute top-[10028.4px] left-[983.1px] w-[661.5px] h-[666.3px] object-contain"
        alt=""
        src="/botanicalwallartsetlineartleavesdrawingwithabstractshapesabstractplantartdesignsforprintscoverswallpapersminimalandnaturalwallartillustrationvectorremovebgpreview-2@2x.png"
      />
      <img
        className="absolute top-[5882px] left-[64px] w-[384.3px] h-[366.7px] object-contain"
        alt=""
        src="/91658picjc0862nhdcga5-pic2018-3@2x.png"
      />
      <img
        className="absolute top-[8197.8px] left-[-143px] w-[356px] h-[356.7px] object-contain"
        alt=""
        src="/botanicalwallartsetlineartleavesdrawingwithabstractshapesabstractplantartdesignsforprintscoverswallpapersminimalandnaturalwallartillustrationvectorremovebgpreview-3@2x.png"
      />
      <img
        className="absolute h-[0.16%] w-[1.67%] top-[48%] right-[39.58%] bottom-[51.84%] left-[58.75%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/boldoutline@2x.png"
      />
      <img
        className="absolute h-[0.16%] w-[1.67%] top-[48%] right-[18.47%] bottom-[51.84%] left-[79.86%] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/boldoutline@2x.png"
      />
      <div className="absolute top-[5665px] left-[-266px] box-border w-[3437px] h-0.5 border-t-[2px] border-solid border-darkseagreen-100" />
      <div className="absolute top-[5773px] left-[-266px] box-border w-[3437px] h-0.5 border-t-[2px] border-solid border-darkseagreen-100" />
      <div className="absolute top-[5696px] left-[-45px] w-[1624px] overflow-x-auto flex flex-row items-center justify-start gap-[10px] text-29xl text-darkgreen font-allenoire-free-personal">
        <div className="w-[3705px] relative h-[58px] shrink-0 z-[0]">
          <div className="absolute top-[0px] left-[0px] leading-[120%] inline-block w-[1632px]">
            Join us in preserving this natural paradise for generations to come.
          </div>
          <div className="absolute top-[0px] left-[1662px] leading-[120%] inline-block w-[2043px]">
            Join us in preserving this natural paradise for generations to come.
          </div>
        </div>
        <div className="w-[19px] absolute !m-[0] top-[17px] left-[1624px] rounded-[50%] bg-orange h-[19px] shrink-0 z-[1]" />
      </div>
      <div className="absolute top-[7431px] left-[0px] w-[1438px] h-[315px] overflow-x-auto text-xl text-darkslategray-100">
        <div className="absolute top-[219px] left-[621px] inline-block w-[118px]">
          Jane Cooper
        </div>
        <div className="absolute top-[219px] left-[2134px] inline-block w-[118px]">
          Jane Cooper
        </div>
        <div className="absolute top-[213px] left-[917px] inline-block w-[149px]">
          Eleanor Pena
        </div>
        <div className="absolute top-[213px] left-[2430px] inline-block w-[149px]">
          Eleanor Pena
        </div>
        <div className="absolute top-[219px] left-[318px] inline-block w-[149px]">
          Jerome Bell
        </div>
        <div className="absolute top-[219px] left-[1831px] inline-block w-[149px]">
          Jerome Bell
        </div>
        <div className="absolute top-[219px] left-[15px] inline-block w-[149px]">
          Ronald Richards
        </div>
        <div className="absolute top-[219px] left-[1528px] inline-block w-[149px]">
          Ronald Richards
        </div>
        <div className="absolute top-[215px] left-[1222px] inline-block w-[149px]">
          Esther Howard
        </div>
        <div className="absolute top-[215px] left-[2735px] inline-block w-[149px]">
          Esther Howard
        </div>
        <div className="absolute top-[222px] left-[803px] text-mini inline-block w-[76px]">
          01.02.2024
        </div>
        <div className="absolute top-[222px] left-[2316px] text-mini inline-block w-[76px]">
          01.02.2024
        </div>
        <div className="absolute top-[219px] left-[1098px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[219px] left-[2611px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[225px] left-[499px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[225px] left-[2012px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[225px] left-[196px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[225px] left-[1709px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[221px] left-[1403px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[221px] left-[2916px] text-sm inline-block w-[71px]">
          01.02.2024
        </div>
        <div className="absolute top-[0px] left-[901px] rounded-3xs bg-darkseagreen-300 w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[2414px] rounded-3xs bg-lightgreen w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[606px] rounded-3xs bg-darkseagreen-300 w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[2119px] rounded-3xs bg-lightgreen w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[1207px] rounded-3xs bg-darkseagreen-300 w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[2720px] rounded-3xs bg-lightgreen w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[303px] rounded-3xs bg-darkseagreen-300 w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[1816px] rounded-3xs bg-lightgreen w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darkseagreen-300 w-[282px] h-[315px]" />
        <div className="absolute top-[0px] left-[1513px] rounded-3xs bg-lightgreen w-[282px] h-[315px]" />
        <img
          className="absolute top-[15px] left-[917px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2651@2x.png"
        />
        <img
          className="absolute top-[15px] left-[2430px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2651@2x.png"
        />
        <img
          className="absolute top-[15px] left-[318px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2652@2x.png"
        />
        <img
          className="absolute top-[15px] left-[1831px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2652@2x.png"
        />
        <img
          className="absolute top-[15px] left-[15px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2653@2x.png"
        />
        <img
          className="absolute top-[15px] left-[1528px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2653@2x.png"
        />
        <img
          className="absolute top-[15px] left-[1222px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2654@2x.png"
        />
        <img
          className="absolute top-[15px] left-[2735px] rounded-3xs w-[252px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2654@2x.png"
        />
        <img
          className="absolute top-[15px] left-[621px] rounded-3xs w-[258px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2650@2x.png"
        />
        <img
          className="absolute top-[15px] left-[2134px] rounded-3xs w-[258px] h-[189px] object-cover"
          alt=""
          src="/rectangle-2650@2x.png"
        />
      </div>
      <div className="absolute top-[7445px] left-[511px] text-[10px] inline-block w-[53px]">
        Book a tour
      </div>
      <img
        className="absolute top-[2217px] left-[77px] w-20 h-20"
        alt=""
        src="/group-9243.svg"
      />
      <img
        className="absolute top-[7312px] left-[63px] w-20 h-20"
        alt=""
        src="/group-9243.svg"
      />
      <img
        className="absolute top-[2212px] left-[1328px] w-20 h-20"
        alt=""
        src="/group-9244.svg"
      />
      <img
        className="absolute top-[7313px] left-[1299px] w-20 h-20"
        alt=""
        src="/group-9244.svg"
      />
    </div>
  );
};

export default HomepageDesktop;
