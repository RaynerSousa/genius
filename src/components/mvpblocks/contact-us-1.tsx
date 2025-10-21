"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Earth from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Label } from "@/components/ui/label";
import { Check, Loader2 } from "lucide-react";

export default function ContactUs1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Perform form submission logic here
      console.log("Form submitted:", { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0b1224] to-[#0b1224]/5 relative w-full overflow-hidden py-16 md:py-24">
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #0b1224, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #0b1224, transparent 70%)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="border-border/40 bg-secondary/20 mx-auto max-w-5xl overflow-hidden rounded-[28px] border shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="relative p-6 -m-3 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="from-foreground to-foreground/80 mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Contate-
                </h2>
                <span className="text-primary relative z-10 w-full text-4xl font-bold tracking-tight italic md:text-5xl">
                  nos
                </span>
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor="#0b1224"
                />
              </motion.div>

              <a
                href="https://wa.me/558896178334"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
                className="flex  flex-col justify-center items-center "
              >
                <div className=" text-white shadow-lg flex flex-row-reverse">
                  <div className="bg-[#013585] hover:bg-indigo-900 rounded-4xl w-80 h-70 mt-15 flex items-center justify-center flex-col">
                    {/* Ícone WhatsApp SVG */}
                    <p className="pb-6 text-4xl">Click me!</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.35 11.35 0 0012 0C5.37 0 .01 5.37.01 12a11.25 11.25 0 001.87 6.04L0 24l5.97-1.87a11.27 11.27 0 006.03 1.87c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.6 16.23a9.14 9.14 0 01-4.6-1.26l-.33-.2-3.54 1.11 1.11-3.46-.21-.34a9.05 9.05 0 012.35-11.85 9 9 0 0112.9 0 9.03 9.03 0 01-6.67 15.8zm5.68-7.72c-.31-.15-1.84-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.81 1-.99 1.2-.18.21-.36.24-.67.08-.31-.15-1.31-.48-2.5-1.54-.92-.82-1.54-1.83-1.72-2.13-.18-.3-.02-.46.13-.61.13-.13.31-.35.47-.53.15-.18.2-.3.3-.5.1-.21.05-.39-.02-.54-.08-.15-.7-1.7-.96-2.32-.25-.61-.5-.53-.71-.54-.18 0-.39 0-.59 0-.2 0-.54.07-.82.39-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.21 2.11 3.22 5.11 4.52.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.1 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.2-.6-.35z" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden pr-8"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border bg-gradient-to-b from-[#0b1224] to-[#0b1224]/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  Clique na logo do WhatsApp
                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      // baseColor={[1, 0, 0.3]}
                      markerColor={[1, 0, 0.33]}
                      glowColor={[0.1, 0.3, 1]}
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
