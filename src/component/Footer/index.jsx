import g1 from "../../assets/p11.png";
import a1 from "../../assets/a11.png";
import fb from "../../assets/f1.png";
import insta from "../../assets/ins.png";
import x from "../../assets/twitter.png";
import yt from "../../assets/youtube.png";
import In from "../../assets/linkedIn.png";
import medal from "../../assets/madel12.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#242424] absolute left-0 h-auto lg:h-full lg:min-h-[115vh] w-full">
        <div className="bg-[#f8c740] h-[15vh] w-[50vw] m-auto rounded-sm relative top-[-7%] flex items-center justify-center flex-wrap md:flex-nowrap hidden sm:flex">
          <div>
            <img src={medal} alt="" width={100} />
          </div>
          <div className="w-[50%] flex flex-col items-start justify-start" >
            <h2 className="text-sm font-semibold">#1 Business Directory and Service Provider</h2>
            <p className = "text-[10px] ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit optio et harum consequatur officiis nesciunt, corporis ad similique?</p>
          </div>
          <div>
            <button className="bg-black rounded-2xl text-white px-4 py-1 m-2">Add my Business</button>
          </div>
        </div>
        <div className="bg-[#242424] h-auto w-[50vw] m-auto rounded-sm relative text-white divide-y divide-dashed">
          <h4>from Support +01464376756 | Email Gaurav@Gmail.com</h4>
          <div className=" my-2 py-5 min-w-full">
            <div className=" flex items-center justify-between divide-x divide-dashed my-2 min-w-full flex-wrap">
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">TOP CATEGORY</h3>
                <div className="flex items-start gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Digital Products</p>
                    <p>Real Estate</p>
                    <p>Education</p>
                    <p>Automobiles</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Sports</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">TRANDING CATEGORY</h3>
                <div className="flex items-start gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Digital Products</p>
                    <p>Real Estate</p>
                    <p>Education</p>
                    <p>Automobiles</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Sports</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">HELP & SUPPORT</h3>
                <div className="flex items-start gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Digital Products</p>
                    <p>Real Estate</p>
                    <p>Education</p>
                    <p>Automobiles</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Sports</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between divide-x divide-dashed my-2 py-5 min-w-full">
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">POPULAR TAGS</h3>
                <div className="flex items-start gap-x-3 text-[#6e6d6d] flex-wrap lg:flex-nowrap">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Digital Products lorem2</p>
                    <p>Real Estate lorem2</p>
                    <p>Education lorem2</p>
                    <p>Automobiles lorem2</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial lorem2</p>
                    <p>Sports lorem2</p>
                    <p>Electricals lorem2</p>
                    <p>transparation lorem2</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial lorem2</p>
                    <p>Electricals lorem2</p>
                    <p>transparation lorem2</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>Spa and Facial</p>
                    <p>Electricals</p>
                    <p>transparation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between my-2 py-5 min-w-full flex-wrap md:flex-nowrap">
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">GET IN TOUCH</h3>
                <div className="flex items-start justify-around gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <p>
                      Digital Products Lorem ipsum, adipisicing elit. Dolorem,
                      maiores.
                    </p>
                    <h5>Phone +0 9123109389</h5>
                    <h5>Email Gaurav@gmail.com</h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">DOWNLOAD OUR FREE MOBILE APP</h3>
                <div className="flex items-center gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={g1} alt="" width={420} />
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={a1} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-5 px-2">
                <h3 className="text-sm">SOCIAL MEDIA</h3>
                <div className="flex items-center gap-x-3 text-[#6e6d6d]">
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={insta} alt="" width={100} />
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={x} alt="" width={100} />
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={fb} alt="" width={100} />
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={yt} alt="" width={100} />
                  </div>
                  <div className="text-[10px] flex flex-col items-start gap-y-2">
                    <img src={In} alt="" width={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" text-[10px] text-[#6e6d6d] flex items-center justify-center divide-x divide-dashed my-2 p-5 min-w-full gap-5">
              <div className="pl-5">Austrelia</div>
              <div className="pl-5">USA</div>
              <div className="pl-5">UK</div>
              <div className="pl-5">China</div>
              <div className="pl-5">France</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
