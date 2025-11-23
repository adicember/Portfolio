"use client";

import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";

export default function KnowMeMore() {
  const items = [
    {
      title: "Creative Coder",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Problem Solver",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Traveler",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=3000&auto=format&fit=crop",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">

        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 dark:text-neutral-800">
          Know Me More
        </p>

        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={item.image}
              alt={item.title}
              className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            />
            <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}

      </DraggableCardContainer>
    </div>
  );
}
