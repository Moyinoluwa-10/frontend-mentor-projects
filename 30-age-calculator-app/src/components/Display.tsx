"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import arrow from "@/assets/icon-arrow.svg";
import TextInput from "./TextInput";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Display = () => {
  const [yearsDiff, setYearsDiff] = useState<string | number>("- -");
  const [monthsDiff, setMonthsDiff] = useState<string | number>("- -");
  const [daysDiff, setDaysDiff] = useState<string | number>("- -");

  return (
    <>
      <Formik
        initialValues={{
          day: "",
          month: "",
          year: "",
        }}
        validationSchema={Yup.object({
          day: Yup.number()
            .when("month", {
              is: (month: number) =>
                month === 1 || 3 || 5 || 7 || 8 || 10 || 12,
              then: () =>
                Yup.number()
                  .required("This field is required")
                  .min(1, "Must be a valid day")
                  .max(32, "Must be a valid date"),
            })
            .when("month", {
              is: (month: number) => month === 4 || 6 || 9 || 11,
              then: () =>
                Yup.number()
                  .required("This field is required")
                  .min(1, "Must be a valid day")
                  .max(31, "Must be a valid date"),
            })
            .when("month", {
              is: (month: number) => month === 2,
              then: () =>
                Yup.number()
                  .required("This field is required")
                  .min(1, "Must be a valid day")
                  .max(28, "Must be a valid date"),
            })
            .when(["month", "year"], {
              is: (month: number, year: number) =>
                (month === 2 && year % 4 === 0 && year % 100 !== 0) ||
                year % 400 === 0,
              then: () =>
                Yup.number()
                  .required("This field is required")
                  .min(1, "Must be a valid day")
                  .max(29, "Must be a valid date"),
            }),
          month: Yup.number()
            .required("This field is required")
            .min(1, "Must be a valid month")
            .max(12, "Must be a valid month"),
          year: Yup.number()
            .required("This field is required")
            .min(1000, "Must be greater than 1000")
            .max(new Date().getFullYear(), "Must be in the past"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const dob = new Date(`${values.year}-${values.month}-${values.day}`);
          const today = new Date();
          const diff = today.getTime() - dob.getTime();
          const age = new Date(diff);
          const years = age.getUTCFullYear() - 1970;
          const months = age.getUTCMonth();
          const days = age.getUTCDate() - 1;

          setYearsDiff(years);
          setMonthsDiff(months);
          setDaysDiff(days);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="mb-10">
            <div className="grid grid-cols-3 gap-3 md:gap-4 md:mb-1 max-w-md min-h-32">
              <TextInput
                label="Day"
                name="day"
                id="day"
                type="number"
                placeholder="DD"
              />
              <TextInput
                label="Month"
                name="month"
                id="month"
                type="number"
                placeholder="MM"
              />
              <TextInput
                label="Year"
                name="year"
                id="year"
                type="number"
                placeholder="YYYY"
              />
            </div>
            <div className="flex items-center">
              <hr className="w-full h-[2px] bg-light-grey" />
              <button
                type="submit"
                className="outline-none p-3 md:p-4 w-12 min-w-12 md:w-20 md:min-w-20 h-12 md:h-20 rounded-full bg-purple transition-all duration-300 group overflow-hidden relative disabled:bg-purple/60 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <Image
                  src={arrow}
                  alt="icon-arrow"
                  className="-translate-y-32 transition-all duration-1000 group-hover:-translate-y-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 w-6 md:w-11"
                />
                <Image
                  src={arrow}
                  alt="icon-arrow"
                  className="transition-all duration-1000 group-hover:translate-y-16 w-6 md:w-11"
                />
              </button>
              <hr className="w-full h-[2px] bg-light-grey md:hidden" />
            </div>
          </Form>
        )}
      </Formik>

      <div className="flex flex-col gap-5 text-5xl md:text-7xl font-extrabold italic text-off-black">
        <h3>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              className="text-purple inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              key={yearsDiff}
            >
              {yearsDiff}
            </motion.span>
          </AnimatePresence>{" "}
          years
        </h3>
        <h3>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              className="text-purple inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              key={monthsDiff}
              transition={{ delay: 0.2 }}
            >
              {monthsDiff}
            </motion.span>
          </AnimatePresence>{" "}
          months
        </h3>
        <h3>
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              className="text-purple inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              key={daysDiff}
              transition={{ delay: 0.4 }}
            >
              {daysDiff}
            </motion.span>
          </AnimatePresence>{" "}
          days
        </h3>
      </div>
    </>
  );
};

export default Display;
