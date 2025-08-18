"use client";

import axios from "axios";
import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import toast from "react-hot-toast";
import { contactDetails } from "../data/contactUs";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      const response = await axios.post(`https://app.arthalab.com/api/send-mail`, payload, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (!response.data.success) throw new Error("Failed to send message");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success(
        "Your message has been sent successfully! We'll respond within 24 hours."
      );
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background dark:bg-dark-background">
      <div className="w-full h-[300px] flex-col space-y-8 bg-background-secondary dark:bg-dark-background-secondary px-4 sm:px-6 flex justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-40 h-40 rounded-full bg-primary/5 blur-3xl top-1/4 left-1/4 animate-float" />
          <div
            className="absolute w-60 h-60 rounded-full bg-secondary/5 blur-3xl bottom-1/4 right-1/4 animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <motion.h1
          className="text-5xl font-bold text-foreground dark:text-dark-foreground relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>
        <motion.h2
          className="text-xl text-muted-foreground dark:text-dark-muted-foreground font-normal relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Have questions or need assistance? We&apos;re here to help!
        </motion.h2>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
        <div className="grid md:grid-cols-[400px_1fr] gap-6">
          {/* Contact Information Card */}
          <div className="crypto-card p-8 h-full">
            <div className="mb-8">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="mr-4 text-xl text-primary dark:text-dark-primary">{item.icon}</span>
                  <div>
                    <h3 className="font-medium mb-1 text-foreground dark:text-dark-foreground">{item.label}</h3>
                    <p className="text-sm text-muted-foreground dark:text-dark-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="crypto-card p-8 h-full flex flex-col"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                Name *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-input dark:bg-dark-input border border-border dark:border-dark-border rounded text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                minLength={2}
                maxLength={100}
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-input dark:bg-dark-input border border-border dark:border-dark-border rounded text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                Subject *
              </label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 bg-input dark:bg-dark-input border border-border dark:border-dark-border rounded text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                minLength={5}
                maxLength={100}
              />
            </motion.div>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-foreground dark:text-dark-foreground mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 min-h-36 bg-input dark:bg-dark-input border border-border dark:border-dark-border rounded text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                minLength={20}
                maxLength={2000}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 bg-primary text-white rounded text-base flex items-center justify-center gap-2 transition-colors ${isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-primary/90 cursor-pointer"
                }`}
              whileHover={!isSubmitting ? { scale: 1.02 } : undefined}
              whileTap={!isSubmitting ? { scale: 0.98 } : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                "SEND MESSAGE"
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;