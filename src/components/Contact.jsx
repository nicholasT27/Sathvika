"use client";
import { useState } from "react";
import { Icon } from "./Icons";

// Contact: a postcard to the agency. Fill it in and "post" it; the card flies off and we confirm.
export default function Contact() {
  const [sent, setSent] = useState(false);

  // For now this only plays the animation. Nothing is sent anywhere until a backend is added.
  function post(e) {
    e.preventDefault();
    setSent(true);
  }

  const field = "w-full bg-transparent border-b-[3px] border-dashed border-ink/50 focus:border-red outline-none py-1 font-semibold";
  return (
    <section id="contact" className="py-24 px-5 bg-orange">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl sm:text-6xl text-paper text-center">Send us a <span className="text-yellow">postcard</span></h2>
        <p className="text-paper text-center mt-3">Tell us about your project. We read every card (while sipping coffee).</p>
        <div className="relative mt-12">
          {!sent ? (
            <form onSubmit={post} className="bg-butter border-[4px] border-ink rounded-xl shadow-[8px_8px_0_var(--ink)] p-6 sm:p-8 grid sm:grid-cols-[1fr_auto_1fr] gap-6 -rotate-1">
              <div className="space-y-4">
                <p className="display text-red text-xl">Dear Sathvika,</p>
                <label className="block text-sm">I&apos;m
                  <input required name="name" className={field} placeholder="your name" />
                </label>
                <label className="block text-sm">Reach me at
                  <input required type="email" name="email" className={field} placeholder="you@email.com" />
                </label>
              </div>
              <div className="hidden sm:block w-[3px] bg-ink/40" aria-hidden="true" />
              <div className="space-y-4 relative">
                <div className="absolute -top-3 -right-3 stamp !p-2 w-20 text-center" style={{ "--c": "var(--blue)" }}>
                  <Icon name="email" className="w-12 h-12 mx-auto text-ink" />
                </div>
                <label className="block text-sm pt-14 sm:pt-12">Here&apos;s what I need
                  <textarea required name="message" rows={4} className={`${field} resize-none`} placeholder="a brand, a site, a miracle..." />
                </label>
                <button className="btn bg-red text-paper w-full" type="submit">Post it ✉</button>
              </div>
            </form>
          ) : (
            <div className="bg-butter border-[4px] border-ink rounded-xl shadow-[8px_8px_0_var(--ink)] p-10 text-center">
              <div className="mx-auto w-20"><Icon name="performance" className="w-20 h-20 text-red" /></div>
              <h3 className="display text-3xl mt-4">Postcard delivered!</h3>
              <p className="mt-2">We have your letter and are already sketching ideas. Expect a reply soon.</p>
              <button onClick={() => setSent(false)} className="btn bg-paper mt-5">Write another</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
