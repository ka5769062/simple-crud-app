import React from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    
    const res = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed To Fatch Topics");
    }
    return res.json();
  } catch (error) {
    console.log("error loading topics", error);
  }
};

const TopicsList = async () => {
  
  const {topics} = await getTopics();
  
  return (
    <>
    {topics.map((t)=>{

       return(
   <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 ">
        <div>
          <h2 className="font-bold text-2xl">{t.title}</h2>
          <div>{t.description}</div>
        </div>
        <div className="flex gap-2">
          <RemoveBtn id={t._id}/>
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={21} />
          </Link>
        </div>
      </div>
     
     </>
     
       )
       })}
    </>
  );
};

export default TopicsList;
