import React, { useState } from "react";
import { Mail } from "lucide-react";

const FEEDBACK_EMAIL = "2300031297cseh1@gmail.com"; // Change to your email

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Feedback from " + form.name);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="w-full min-h-[80vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Send Feedback</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-card border border-border rounded-xl p-8 w-full max-w-lg flex flex-col gap-6 shadow-lg"
      >
        <div>
          <label className="block mb-2 font-medium" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border bg-background border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border bg-background border-border focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border bg-background border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            placeholder="Share your feedback, suggestions, or just say hello..."
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition-colors border border-border"
        >
          <Mail className="w-5 h-5" />
          Send Feedback
        </button>
        <p className="text-xs text-center text-muted-foreground mt-2">
          This will open your default email client with a pre-filled message to {FEEDBACK_EMAIL}
        </p>
      </form>
    </section>
  );
};

export default Contact;
