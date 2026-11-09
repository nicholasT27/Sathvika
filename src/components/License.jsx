"use client";
import { useState } from "react";
import { Icon } from "./Icons";

// Creative License: a driver's-licence style card for the agency. Press the button to stamp it "approved".
export default function License() {
  const [stamped, setStamped] = useState(false);
  return (
    <section className="py-24 px-5 bg-yellow">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl sm:text-6xl">Licensed to <span className="text-red">create</span></h2>
        <p className="mt-3">Every creative needs paperwork. Ours is fully (un)official.</p>
        <div className="relative mt-10 mx-auto max-w-xl bg-butter border-[4px] border-ink rounded-3xl shadow-[8px_8px_0_var(--ink)] p-5 text-left rotate-[-1.5deg]">
          <div className="bg-red text-paper display px-4 py-2 rounded-xl flex justify-between text-sm sm:text-base">
            <span>CREATIVE LICENCE</span><span>CLASS: ALL</span>
          </div>
          <div className="mt-4 grid grid-cols-[8rem_1fr] gap-5 items-center">
            <div className="bg-sky border-[3px] border-ink rounded-xl h-44 overflow-hidden px-3 pt-2">
              <span className="h-full grid place-items-center"><Icon name="ads" className="w-20 h-20 text-red" /></span>
            </div>
            <dl className="space-y-1 text-sm sm:text-base">
              <div><dt className="display text-blue text-xs">NAME</dt><dd className="font-bold">SATHVIKA CREATIVE</dd></div>
              <div><dt className="display text-blue text-xs">CLASSES</dt><dd className="font-bold">Brand, performance, web, strategy, content</dd></div>
              <div><dt className="display text-blue text-xs">FUEL</dt><dd className="font-bold">Coffee, mostly</dd></div>
              <div><dt className="display text-blue text-xs">VALID</dt><dd className="font-bold">Forever (or until bored)</dd></div>
            </dl>
          </div>
          <div className="mt-4 h-8 bg-[repeating-linear-gradient(90deg,#3b1410_0_3px,transparent_3px_6px,#3b1410_6px_8px,transparent_8px_13px)]" aria-hidden="true" />
          {stamped && (
            <div className="stamp-in absolute right-4 bottom-14 border-[5px] border-red text-red display text-3xl px-4 py-1 rounded-lg bg-butter/60">
              APPROVED
            </div>
          )}
        </div>
        <button onClick={() => setStamped(true)} className="btn bg-blue text-paper mt-10">
          {stamped ? "Licence approved ✔" : "Stamp it approved"}
        </button>
      </div>
    </section>
  );
}
