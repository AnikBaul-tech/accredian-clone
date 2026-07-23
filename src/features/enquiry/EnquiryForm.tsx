"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import { submitEnquiry } from "@/services/enquiryService";
import { EnquiryFormData } from "./types";

interface Props {
  onSuccess: () => void;
}

const initialForm: EnquiryFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
};

export default function EnquiryForm({ onSuccess }: Props) {
  const [form, setForm] = useState<EnquiryFormData>(initialForm);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await submitEnquiry(form);

      setMessage(response.message);
      setForm(initialForm);

      setTimeout(() => {
        onSuccess();
      }, 1000);
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle =
    "w-full border-0 border-b border-slate-300 bg-transparent px-2 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter Name"
        className={inputStyle}
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter Email"
        className={inputStyle}
        required
      />

      <div className="flex items-center border-b border-slate-300">
        <span className="pl-2 text-sm">🇮🇳 +91</span>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full bg-transparent px-4 py-4 outline-none"
          required
        />
      </div>

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Enter company name"
        className={inputStyle}
      />

      <select
        name="domain"
        value={form.domain}
        onChange={handleChange}
        className={inputStyle}
      >
        <option value="">Select Domain</option>

        <option value="technology">Technology</option>

        <option value="data-ai">Data & AI</option>

        <option value="leadership">Leadership</option>

        <option value="product">Product & Innovation</option>

        <option value="operations">Operations</option>
      </select>

      <input
        type="number"
        name="candidates"
        value={form.candidates}
        onChange={handleChange}
        placeholder="Enter No. of candidates"
        min="1"
        className={inputStyle}
      />

      <select
        name="deliveryMode"
        value={form.deliveryMode}
        onChange={handleChange}
        className={inputStyle}
        required
      >
        <option value="">Select Mode of Delivery *</option>

        <option value="online">Online</option>

        <option value="offline">Offline</option>

        <option value="hybrid">Hybrid</option>
      </select>

      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Eg: Gurgaon, Delhi, India"
        className={inputStyle}
      />

      {message && (
        <p className="pt-2 text-center text-sm text-slate-600">{message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="
          mt-4
          w-full
          rounded-lg
          bg-blue-600
          px-6
          py-4
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
