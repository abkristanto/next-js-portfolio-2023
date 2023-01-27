import useScrollPosition from '@/hooks/ScrollPosition';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import LayoutSidebar from './common/HeaderSidebar';
import { motion } from 'framer-motion';

function Layout({ children }: { children: React.ReactNode }) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ type: 'inertia', delay: 1 }}
      className=''
    >
      {children}
    </motion.main>
  );
}

export default Layout;
