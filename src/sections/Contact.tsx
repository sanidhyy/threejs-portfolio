import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    // form fields
    const { name, email, message } = form;

    type Current = {
      name: boolean;
      email: boolean;
      message: boolean;
    };

    // Error message
    const nameError = document.querySelector("#name-error")!;
    const emailError = document.querySelector("#email-error")!;
    const messageError = document.querySelector("#message-error")!;
    const current: Current = { name: false, email: false, message: false };

    // validate name
    if (name.trim().length < 3) {
      nameError.classList.remove("hidden");
      current["name"] = false;
    } else {
      nameError.classList.add("hidden");
      current["name"] = true;
    }

    const email_regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // valiate email
    if (!email.trim().toLowerCase().match(email_regex)) {
      emailError.classList.remove("hidden");
      current["email"] = false;
    } else {
      emailError.classList.add("hidden");
      current["email"] = true;
    }

    // validate message
    if (message.trim().length < 5) {
      messageError.classList.remove("hidden");
      current["message"] = false;
    } else {
      messageError.classList.add("hidden");
      current["message"] = true;
    }

    // True if all fields are validated
    return Object.keys(current).every(
      (k) => current[k as keyof typeof current]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shubham",
          from_email: form.email,
          to_email: import.meta.env.VITE_APP_EMAIL,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_APP_PUBLIC_KEY,
        }
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Your message has been sent!");
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 min-h-screen h-full"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>

          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here
            to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full name</span>

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
                placeholder="John Doe"
                autoCapitalize="on"
                disabled={isLoading}
              />

              <span className="text-red-400 hidden" id="name-error">
                Invalid Name!
              </span>
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
                placeholder="john.doe@email.com"
                autoCapitalize="off"
                disabled={isLoading}
              />

              <span className="text-red-400 hidden" id="email-error">
                Invalid Email!
              </span>
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
                placeholder="Hi, I'm interested in..."
                autoCapitalize="on"
                disabled={isLoading}
              />

              <span className="text-red-400 hidden" id="message-error">
                Invalid Message!
              </span>
            </label>

            <button
              type="submit"
              className="field-btn disabled:opacity-75 disabled:pointer-events-none disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}

              {!isLoading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="Arrow"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
