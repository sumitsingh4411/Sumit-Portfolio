import React from "react";
import style from "./Contact.module.scss";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import HeaderLine from "../../../../common/component/headerLine/HeaderLine";
import phone from "../../../../assets/phone.svg";
import email from "../../../../assets/mail.svg";
import location from "../../../../assets/place.svg";
import Image from "next/image";
import { MULTIMEDIA } from "../../../header/constant";
import toast from "react-hot-toast";

export default function Contact() {
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
            toast.success("Message sent successfully!");
            formik.resetForm();
          },
          function (error) {
            toast.error("Something went wrong! Please try again later.");
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
    <div id="contact" className={style.contactSection}>
      <div className={style.contactSection_container}>
        <HeaderLine title="Contact" />
        <p className={style.contactSection_title}>
          {" "}
          Feel free to contact me for any work or suggestions !
        </p>
        <div className={style.contactSection_container__body}>
          <div className={style.contactSection_container__body__left}>
            <h1 className={style.left_side_title}>Contact information</h1>
            <p className={style.left_side_subtitle}>
              I will be happy to answer your questions
            </p>

            <div className={style.left_side_item}>
              <Image src={phone} alt="phone" width={24} height={24} />
              <p> +91 6371913458</p>
            </div>
            <div className={style.left_side_item}>
              <Image src={email} alt="email" width={30} height={30} />
              <p>sumitsingh841208@gmail.com</p>
            </div>
            <div className={style.left_side_item}>
              <Image src={location} alt="location" width={30} height={30} />
              <p>India</p>
            </div>
            <div className={style.left_side_item_list}>
              <div className={style.left_side_media_icons}>
                {MULTIMEDIA.map((item) => (
                  <Image
                    key={item.id}
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => window.open(item.url, "_blank")}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className={style.contactSection_container__body__right}>
            <form
              onSubmit={formik.handleSubmit}
              className={style.contactSection_container__body__form_list}
            >
              <div
                className={style.contactSection_container__body__form_list_item}
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className={style.error}>{formik.errors.name}</div>
                ) : null}
              </div>
              <div
                className={style.contactSection_container__body__form_list_item}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className={style.error}>{formik.errors.email}</div>
                ) : null}
              </div>
              <div
                className={style.contactSection_container__body__form_list_item}
              >
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
                {formik.touched.message && formik.errors.message ? (
                  <div className={style.error}>{formik.errors.message}</div>
                ) : null}
              </div>
              <button
                type="submit"
                className={style.contactSection_container__body__form_list_btn}
              >
                {"Say something to Sumit"?.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
