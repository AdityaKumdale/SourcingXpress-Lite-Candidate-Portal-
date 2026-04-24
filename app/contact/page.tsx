'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4 uppercase">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-lg text-slate-500">Have questions? Our team is here to help you revolutionize your hiring.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: FaEnvelope, title: "Email Us", detail: "gs@sourcingxpress.com", color: "bg-blue-50 text-blue-600" },
            { icon: FaPhoneAlt, title: "Call Us", detail: "+91 8050020304", color: "bg-green-50 text-green-600" },
            { icon: FaMapMarkerAlt, title: "Location", detail: "Available in India", color: "bg-red-50 text-red-600" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm text-center flex flex-col items-center group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 font-medium">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            <FaArrowLeft size={14} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
