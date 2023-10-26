"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const addTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and description are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-300 px-8 py-2"
        type="text"
        placeholder="enter your title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-300 px-8 py-2 gap-3"
        type="text"
        placeholder="enter your describtion"
      />

      <button className="bg-green-600 text-white font-semi-bold w-fit p-3">
        Add Topic
      </button>
    </form>
  );
};

export default addTopic;
