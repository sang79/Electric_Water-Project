import React from 'react'

const MainPage = () => {
  const details = [
    {
      title: " How to Diagnose and Repair Your Air Conditioner (A/C) Capacitor ",
      link: "#",
      img: "/assets/images/capacitor.jpg",
      desc: "What’s Wrong With Your Air Conditioner? Capacitors Are a Common Cause of Air Conditioning Breakdowns…",
    },
    {
      title: " Application Functions ",
      link: "#",
      img: "/assets/images/bua.png",
      desc: "Rada: App for users to call/book a service based on location Services listing: List available…",
    },
    {
      title: "Some conventions",
      link: "#",
      img: "/assets/images/finger_phone.png",
      desc: "Gold: The unit used for payment on the system. Conversion: 1 Gold = 1,000 VND,…",
    },
    {
      title: "Things to know",
      link: "#",
      img: "/assets/images/sale.png",
      desc: "1.There are clear signs of awareness through signs, shop names, we encourage, private or uniformed…",
    },
    {
      title: "What you need to do to Rada",
      link: "#",
      img: "/assets/images/televisions.png",
      desc: "This is a class A highway with the road surface structure is designed according to…",
    },
    {
      title: "What Rada can help you",
      link: "#",
      img: "/assets/images/Colorful-hands-jobs.jpg",
      desc: "This is a class A highway with the road surface structure is designed according to…",
    },
    {
      title: "One years old birthday",
      link: "#",
      img: "/assets/images/news.png",
      desc: "This is a class A highway with the road surface structure is designed according to…",
    },
    {
      title: "Happy Inpendence 2-9",
      link: "#",
      img: "/assets/images/quy-uoc.jpg",
      desc: "– Download and install the app – Request for mechanic – Accept connection with mechanic willing to…",
    },
    {
      title: "Chirstmas Events",
      link: "#",
      img: "/assets/images/logo2-copy.png",
      desc: "Rada is free! just download app from store, register an account and then book a…",
    },
    {
      title: "Latest Events",
      link: "#",
      desc: "",
    },
  ]
  return (
    <section>
      <ul className="grid grid-cols-3 gap-6">
        {details.map((item, key) => (
          <li className="col-span-1 cursor-pointer rounded-lg bg-pink-100">
            <div className="relative">
              <img
                className="w-full bg-cover rounded-t-lg bg-center "
                style={{ backgroundColor: '#001731', width: 250, height: 220 }}
                src={item.img} />
              <a href= {item.link} className="absolute text-white text-xs bottom-2 left-2 px-2 py-1 bg-yellow-800 rounded-md hover:underline">Un-Category</a>
            </div>
            <ul className="m-2 space-y-1">
              <li className="w-full tracking-tighter text-justify">
                <a
                  className="text-red-700 hover:underline"
                  href="#"> {item.title} </a>
              </li>
              <li className="text-xs space-x-1">
                <i className="far fa-clock text-gray-600"></i>
                <span className=" cursor-default">Update 30 mins ago</span>
                <span className="font-semibold hover:underline hover:text-red-700 ">Admin-Rada</span>
              </li>
              <li className="w-full ">
                <p
                  style={{ fontSize: 16 }}
                  className="select-none tracking-tighter text-justify cursor-default leading-tight">{item.desc}</p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MainPage