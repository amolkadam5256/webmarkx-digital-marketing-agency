// File: C:/Users/Admin/Desktop/dubai_businessconnect/Website/webmarkx/src/components/Loader.jsx

import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="w-16 h-16 border-4 border-red-600 border-dashed rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}

      />
    </div>
  );
};

export default Loader;
