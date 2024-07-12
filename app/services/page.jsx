"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Application Development",
    description:
      "Creating websites and web applications using various technologies such as HTML, CSS, JavaScript , React, Nextjs, vue and backend technologies like Nodejs. ",
    href: "",
  },

  {
    num: "02",
    title: "UI/UX Design",
    description: "Designing intuitive and user-friendly interfaces for software applications to enhance user experience and engagement.",
    href: "",
  },

  {
    num: "03",
    title: "Maintenance and Support",
    description: "Providing ongoing maintenance and support services to ensure the smooth functioning of the software, including bug fixes, updates, and enhancements.",
    href: "",
  },

  {
    num: "04",
    title: "Consulting Services",
    description: "Offering expert advice on technology choices, project planning, and software architecture to help clients make informed decisions.",
    href: "",
  },

  {
    num: "05",
    title: "E-commerce Development",
    description: " Building online stores and e-commerce platforms with features like payment gateways, inventory management, and order processing.",
    href: "",
  },

  {
    num: "06",
    title: "Custom Software Development",
    description: "Building custom software applications tailored to meet specific business requirements. This involves a thorough understanding of the client's needs.",
    href: "",
  },
];

const Services = () => {
  return(
       <section className="min-h-[80vh] flex flex-col  justify-center py-12 xl:py-0">
        <div className="container mx-auto">
         <motion.div initial={{ opacity: 0}} animate={{
          opacity: 1,
          transition: {delay: 2.4 , duration: 0.4 , ease: "easeIn"}
         }} className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {
                  services.map((service , index) =>{
                        return <div className="flex-1 flex flex-col justify-center gap-6 group" key={index}>
                          {/* top */}
                             <div className="w-full flex justify-between items-center">
                               <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                               <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                               </Link>
                             </div>
                              {/* title */}
                             <h2 className=" text-[42px] md:text-[32px] leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                             {/* description */}
                             <p className="text-white/60">{service.description}</p>
                             {/* border */}
                             <div className="border-b border-white/20 w-full"></div>
                        </div>
                  })
                }
         </motion.div>

        </div>
       </section>       
  )

};

export default Services;
