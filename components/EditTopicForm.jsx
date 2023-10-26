"use client";
import { headers } from "@/next.config";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";





const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({newTitle,newDescription})
      });

      if(!res.ok){
        throw new Error("failed to fetch")
      }

    router.refresh();
    router.push("/")


    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className="border border-slate-300 px-8 py-2"
        type="text"
        placeholder="enter your title"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-300 px-8 py-2 gap-3"
        type="text"
        placeholder="enter your describtion"
      />

      <button className="bg-green-600 text-white font-semi-bold w-fit p-3">
        {" "}
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
