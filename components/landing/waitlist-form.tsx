// "use client";

// import { countries } from "@/lib/constants/country.constant";
// import { FormEvent, useState } from "react";

// type Status =
//   | { type: "idle" }
//   | { type: "loading" }
//   | { type: "success"; message: string }
//   | { type: "error"; message: string };

// // const countries = [
// //   { code: "NG", name: "Nigeria" },
// //   { code: "US", name: "United States" },
// //   { code: "GB", name: "United Kingdom" },
// //   { code: "CA", name: "Canada" },
// //   { code: "GH", name: "Ghana" },
// //   { code: "ZA", name: "South Africa" },
// //   { code: "DE", name: "Germany" },
// //   { code: "FR", name: "France" },
// //   { code: "NL", name: "Netherlands" },
// //   { code: "AU", name: "Australia" },
// // ];

// export function WaitlistForm() {
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");
//   const [status, setStatus] = useState<Status>({ type: "idle" });

//   async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const normalizedEmail = email.trim().toLowerCase();

//     if (!normalizedEmail) {
//       setStatus({
//         type: "error",
//         message: "Enter your email address.",
//       });

//       return;
//     }

//     if (!country) {
//       setStatus({
//         type: "error",
//         message: "Select your country.",
//       });

//       return;
//     }

//     try {
//       setStatus({ type: "loading" });

//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/waitlist`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             email: normalizedEmail,
//             country,
//           }),
//         },
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         const message = Array.isArray(data.message)
//           ? data.message[0]
//           : data.message;

//         throw new Error(message || "Something went wrong.");
//       }

//       setStatus({
//         type: "success",
//         message:
//           data.message ||
//           "You're on the waitlist! We'll let you know when SaxPilot is ready.",
//       });

//       setEmail("");
//       setCountry("");
//     } catch (error) {
//       setStatus({
//         type: "error",
//         message:
//           error instanceof Error
//             ? error.message
//             : "Unable to join the waitlist. Please try again.",
//       });
//     }
//   }

//   if (status.type === "success") {
//     return (
//       <div
//         className="mx-auto max-w-2xl rounded-[22px] border border-white/15 bg-white/10 px-6 py-5 backdrop-blur"
//         role="status"
//       >
//         <p className="font-semibold text-white">
//           You&apos;re in 🎷
//         </p>

//         <p className="mt-1 text-sm leading-6 text-blue-50">
//           {status.message}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-2xl">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-3 sm:grid sm:grid-cols-[minmax(0,1fr)_180px_auto]"
//       >
//         <div>
//           <label htmlFor="waitlist-email" className="sr-only">
//             Email address
//           </label>

//           <input
//             id="waitlist-email"
//             name="email"
//             type="email"
//             autoComplete="email"
//             required
//             placeholder="Enter your email"
//             value={email}
//             disabled={status.type === "loading"}
//             onChange={(event) => {
//               setEmail(event.target.value);

//               if (status.type === "error") {
//                 setStatus({ type: "idle" });
//               }
//             }}
//             className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-6 py-4 text-base text-white outline-none backdrop-blur placeholder:text-slate-400 focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
//           />
//         </div>

//         <div>
//           <label htmlFor="waitlist-country" className="sr-only">
//             Country
//           </label>

//           <select
//             id="waitlist-country"
//             name="country"
//             required
//             value={country}
//             disabled={status.type === "loading"}
//             onChange={(event) => {
//               setCountry(event.target.value);

//               if (status.type === "error") {
//                 setStatus({ type: "idle" });
//               }
//             }}
//             className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-5 py-4 text-base text-white outline-none backdrop-blur focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
//           >
//             <option value="" disabled>
//               Country
//             </option>

//             {countries.map((item) => (
//               <option key={item.code} value={item.code}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <button
//           type="submit"
//           disabled={status.type === "loading"}
//           className="shrink-0 whitespace-nowrap rounded-full bg-white px-7 py-4 text-base font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff] disabled:cursor-not-allowed disabled:opacity-70"
//         >
//           {status.type === "loading" ? "Joining..." : "Join Waitlist"}
//         </button>
//       </form>

//       {status.type === "error" && (
//         <p className="mt-3 text-sm text-red-200" role="alert">
//           {status.message}
//         </p>
//       )}

//       <p className="mt-4 text-sm text-blue-100/70">
//         Be first to know when SaxPilot opens for early access.
//       </p>
//     </div>
//   );
// }

"use client";

import { countries } from "@/lib/constants/country.constant";
import { FormEvent, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  function clearError() {
    if (status.type === "error") {
      setStatus({ type: "idle" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedFirstName = firstName.trim();
    const normalizedLastName = lastName.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedFirstName) {
      setStatus({
        type: "error",
        message: "Enter your first name.",
      });
      return;
    }

    if (!normalizedLastName) {
      setStatus({
        type: "error",
        message: "Enter your last name.",
      });
      return;
    }

    if (!normalizedEmail) {
      setStatus({
        type: "error",
        message: "Enter your email address.",
      });
      return;
    }

    if (!country) {
      setStatus({
        type: "error",
        message: "Select your country.",
      });
      return;
    }

    try {
      setStatus({ type: "loading" });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/waitlist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: normalizedFirstName,
            lastName: normalizedLastName,
            email: normalizedEmail,
            country,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        const message = Array.isArray(data.message)
          ? data.message[0]
          : data.message;

        throw new Error(message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "You're on the waitlist! We'll let you know when SaxPilot is ready.",
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setCountry("");
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to join the waitlist. Please try again.",
      });
    }
  }

  if (status.type === "success") {
    return (
      <div>
        <h3 className="text-lg font-semibold text-white">
          You're in 🎷
        </h3>

        <p className="mt-1 text-sm leading-6 text-blue-50">
          {status.message}
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label htmlFor="waitlist-first-name" className="sr-only">
              First name
            </label>

            <input
              id="waitlist-first-name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First name"
              value={firstName}
              disabled={status.type === "loading"}
              onChange={(event) => {
                setFirstName(event.target.value);
                clearError();
              }}
              className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-6 py-4 text-base text-white outline-none backdrop-blur placeholder:text-slate-400 focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>

          <div>
            <label htmlFor="waitlist-last-name" className="sr-only">
              Last name
            </label>

            <input
              id="waitlist-last-name"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last name"
              value={lastName}
              disabled={status.type === "loading"}
              onChange={(event) => {
                setLastName(event.target.value);
                clearError();
              }}
              className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-6 py-4 text-base text-white outline-none backdrop-blur placeholder:text-slate-400 focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>
        </div>

        <div>
          <label htmlFor="waitlist-email" className="sr-only">
            Email address
          </label>

          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
            value={email}
            disabled={status.type === "loading"}
            onChange={(event) => {
              setEmail(event.target.value);
              clearError();
            }}
            className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-6 py-4 text-base text-white outline-none backdrop-blur placeholder:text-slate-400 focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
          />
        </div>

        <div>
          <label htmlFor="waitlist-country" className="sr-only">
            Country
          </label>

          <select
            id="waitlist-country"
            name="country"
            required
            value={country}
            disabled={status.type === "loading"}
            onChange={(event) => {
              setCountry(event.target.value);
              clearError();
            }}
            className="w-full rounded-full border border-white/15 bg-[#0b1020]/60 px-5 py-4 text-base text-white outline-none backdrop-blur focus:border-[#6dd3ff] focus:ring-2 focus:ring-[#6dd3ff]/20 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <option value="" disabled>
              Country
            </option>

            {countries.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={status.type === "loading"}
          className="shrink-0 whitespace-nowrap rounded-full bg-white px-7 py-4 text-base font-semibold text-[#0b1020] transition hover:bg-[#6dd3ff] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === "loading"
            ? "Joining..."
            : "Join Waitlist"}
        </button>
      </form>

      {status.type === "error" && (
        <p className="mt-3 text-sm text-red-200" role="alert">
          {status.message}
        </p>
      )}

      <p className="mt-4 text-sm text-blue-100/70">
        Be first to know when SaxPilot opens for early access.
      </p>
    </div>
  );
}