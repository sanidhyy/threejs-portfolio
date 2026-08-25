import { useLayoutEffect, useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { toast } from "sonner";

import {
  CONTACT_RECAPTCHA_ACTION,
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  type ContactFormFields,
} from "../lib/contact";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  message: isValidContactMessage,
};

const fieldInputClassName =
  "field-input disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75";

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const formRef = useRef<HTMLFormElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid }
    );
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return !nextErrors.name && !nextErrors.email && !nextErrors.message;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        toast.error(data?.error ?? "Something went wrong!");
        return;
      }

      setForm({
        name: "",
        email: "",
        message: "",
      });
      setFieldErrors({
        name: false,
        email: false,
        message: false,
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
    <>
      <p className="mt-3 text-lg text-white-600">
        Whether you&apos;re looking to build a new website, improve your
        existing platform, or bring a unique project to life, I&apos;m here to
        help.
      </p>

      <form
        ref={formRef}
        onSubmit={(e) => void handleSubmit(e)}
        className="mt-12 flex flex-col space-y-7"
      >
        <label className="space-y-3" htmlFor="name">
          <span className="field-label">Full name</span>

          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={fieldInputClassName}
            placeholder="John Doe"
            autoCapitalize="on"
            maxLength={200}
            disabled={isLoading}
            aria-invalid={fieldErrors.name}
            aria-describedby="name-error"
          />

          <span
            className={`text-red-400 ${fieldErrors.name ? "block" : "hidden"}`}
            id="name-error"
          >
            Invalid Name!
          </span>
        </label>

        <label className="space-y-3" htmlFor="email">
          <span className="field-label">Email</span>

          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={fieldInputClassName}
            placeholder="john.doe@email.com"
            autoCapitalize="off"
            maxLength={100}
            disabled={isLoading}
            aria-invalid={fieldErrors.email}
            aria-describedby="email-error"
          />

          <span
            className={`text-red-400 ${fieldErrors.email ? "block" : "hidden"}`}
            id="email-error"
          >
            Invalid Email!
          </span>
        </label>

        <label className="space-y-3" htmlFor="message">
          <span className="field-label">Your message</span>

          <textarea
            ref={messageRef}
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`${fieldInputClassName} max-h-60 resize-none overflow-hidden`}
            placeholder="Hi, I'm interested in..."
            autoCapitalize="on"
            maxLength={500}
            disabled={isLoading}
            aria-invalid={fieldErrors.message}
            aria-describedby="message-error"
          />

          <span
            className={`text-red-400 ${
              fieldErrors.message ? "block" : "hidden"
            }`}
            id="message-error"
          >
            Invalid Message!
          </span>
        </label>

        <button
          type="submit"
          className="field-btn disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-75"
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
    </>
  );
};

export const Contact = () => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <section className="my-20 c-space" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="Terminal"
          className="absolute inset-0 h-full min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>

          {siteKey ? (
            <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
              <ContactForm />
            </GoogleReCaptchaProvider>
          ) : (
            <p className="mt-3 text-lg text-white-600">
              Contact form is currently unavailable.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
