import React from 'react'
import { FaBook, FaSatellite, FaChalkboardTeacher, FaSlideshare, FaQuestion } from "react-icons/fa";

import PageSection from '../components/PageSection';
const Card = () => {
    const products = [
        {
          id: 1,
          icon: <FaBook size={50} className="text-white" />,
          title: "Administrative",
          subtitle:
          [
            "Develop Courses ",
             "Produce Teaching Material",
            "Methadologies",
             "Supervising Lectures",
              "Teaching Associates",
          ]
            
        },
        {
          id: 2,
          icon: <FaQuestion size={50} className="text-white" />,
          title: "Instruction",
          subtitle:
            [
                "Communicating clearly",
                "Communicating accurately",
                "Questioning techniques",
                "Engaging Students",
                "Growing Professionaly",
            ]
        },
        {
          id: 3,
          icon: <FaSlideshare size={50} className="text-white" />,
          title: "PROFESSIONAL",
          subtitle:
           [
            "reflecting on teaching",
            "maintaining accurate record",
            "contributing to college",
            "growing professionally",
            "developing professionally",
           ]
        },
        {
          id: 4,
          icon: <FaChalkboardTeacher size={50} className="text-white" />,
          title: "Planning",
          subtitle:
            [
                "demonstrating knowledge ",
                "selecting instructional goals",
                "designing coherent instruction",
                "assessing student learning",
                "growing professionally",
            ]
        },
      ];
  return (
    <>
    <div name="services" id="services">
    <PageSection
    name="Mentor"
    title="Instructor"
    subtitle={`The dream begins, most of the time, with a teacher who believes in you, who tugs and pushes and leads you on to the next plateau, sometimes poking you with a sharp stick called truth.`}
  >
   <div className="grid lg:grid-cols-4 gap-12 text-black p-3"  >
        {products.map(({ id, icon, title, subtitle }) => (
           <div className="w-full rounded-lg shadow-md lg:max-w-sm p-2 ">
           <div className="flex items-center justify-center duration-300 group-hover:scale-110">
              <div className="bg-secondary rounded-full p-5 m-4">{icon}</div>
            </div>
           <div className="p-4">
               <h4 className="text-xl uppercase font-semibold tracking-tight font-poppins text-white">
                  {title}
               </h4>
               {subtitle.map((i)=>{
                return (<p className="mt-2 leading-normal capitalize font-poppins text-gray-300">
                {i}
            </p>)
               })}
               
            
           </div>
       </div>
        ))}
      </div>
  </PageSection>
  </div>
  </>
  )
}

export default Card
