import { Form, Formik, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { emailRegExp } from "../utils/constants";
import CustomPicker from "./CustomPicker/CustomPicker";
import { useState } from "react";
import Modal from "./Modal";

const initialData = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const validationSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(2, "Must be at least 2 characters long")
    .max(25, "Must be maximum 25 characters long"),
  email: z
    .string({ message: "Email is required" })
    .email("Invalid email address")
    .refine(email => emailRegExp.test(email), "Invalid email format"),
  date: z.date().optional(),
  comment: z
    .string()
    .min(5, "Must be at least 5 characters long")
    .max(350, "Must be at most 250 characters long")
    .optional(),
});
const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (values, actions) => {
    setIsModalOpen(true);
    actions.resetForm();
  };
  return (
    <div className="border-hawkes rounded-[10px] border p-8">
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} />}
      <div className="mb-6 flex flex-col gap-2">
        <h2 className="text-xl leading-6 font-semibold">Book your car now</h2>
        <span className="text-manatee text-base leading-5">
          Stay connected! We are always ready to help you.
        </span>
      </div>
      <Formik
        initialValues={initialData}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}>
        <Form className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Field
              className="bg-smoke rounded-xl px-5 py-[14px] outline-none"
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage
              className="mt-1 text-sm text-red-500"
              name="name"
              component="span"
            />

            <Field
              className="bg-smoke rounded-xl px-5 py-[14px] outline-none"
              type="text"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage
              className="mt-1 text-sm text-red-500"
              name="email"
              component="span"
            />
            <Field component={CustomPicker} name="date" />
            <ErrorMessage
              className="mt-1 text-sm text-red-500"
              name="date"
              component="span"
            />
            <Field
              as="textarea"
              className="bg-smoke h-22 resize-none rounded-xl px-5 py-[14px] outline-none"
              type="text"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage
              className="mt-1 text-sm text-red-500"
              name="comment"
              component="span"
            />
          </div>
          <button
            className="bg-royal hover:bg-persian flex h-11 w-39 items-center justify-center self-center rounded-xl px-13 text-base leading-5 font-semibold text-white transition-colors duration-300 ease-in-out"
            type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
