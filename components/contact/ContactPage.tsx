import { useFormik } from "formik";
import React from "react";
import style from "./Contact.module.scss";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      var templateParams = {
        name: values.name,
        message: values.message,
        email: values.email,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          templateParams,
          process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            formik.resetForm();
          },
          function (error) {
            console.log("FAILED...", error);
            formik.resetForm();
          }
        );
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Required"),
    }),
  });
  return (
    <div className={style.contact}>
      <h1 className={style.heading_contact}>Contact with me</h1>
      <form onSubmit={formik.handleSubmit} className={style.form_list}>
        <div className={style.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {
            // If there is an error, show it
            formik.touched.name && formik.errors.name ? (
              <div className={style.error}>{formik.errors.name}</div>
            ) : null
          }
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {
            // If there is an error, show it
            formik.touched.email && formik.errors.email ? (
              <div className={style.error}>{formik.errors.email}</div>
            ) : null
          }
        </div>
        <div className={style.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          {
            // If there is an error, show it
            formik.touched.message && formik.errors.message ? (
              <div className={style.error}>{formik.errors.message}</div>
            ) : null
          }
        </div>
        <button type="submit" className={style.send_message_btn}>
          Send message
        </button>
      </form>
    </div>
  );
}
