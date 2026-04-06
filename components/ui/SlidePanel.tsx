"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePanel } from "@/context/PanelContext";
import EnquireForm from "./forms/EnquireForm";
import ReferForm from "./forms/ReferForm";
import { X } from "lucide-react";

export default function SlidePanel() {
  const { panel, setPanel } = usePanel();

  return (
    <AnimatePresence>
      {panel && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
          />

          {/* PANEL */}
          <motion.div
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            {/* HEADER */}
            <div className="flex justify-between items-center bg-gradient-to-r from-primary to-[#a61e4d]
  text-white px-6 py-4 border-b">
              <h2 className="font-semibold text-lg">
                {panel === "enquire" ? "Get In Touch" : "Referral"}
              </h2>
              <button onClick={() => setPanel(null)}>
                <X />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-6">
              {panel === "enquire" && <EnquireForm />}
              {panel === "refer" && <ReferForm />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}