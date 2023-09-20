import { useState } from "react";
import "./App.css";
import bootjackRanchLogo from "../src/assets/bootjackRanchLogo.jpeg";

function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      message: message,
    };
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);
    try {
      // const response = await fetch("/api/sendEmail", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // });
      const response = await fetch(
        "bootjackranch.vercel.app/api/sendNodemail",
        {
          // Update this URL
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("response: ", response);
      if (response.ok) {
        alert("Email sent successfully!");
        console.log("Email sent successfully");
      } else {
        alert("Error sending email.");
        console.log("Error sending email");
      }
    } catch (error) {
      alert("There was an error sending your message.");
      console.log("error: ", error);
    }
  }

  return (
    <div className="container">
      <header>
        {/* <h1 style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 90, height: 50 }}
              src={armadilloLogo}
              alt="armadillo logo"
            />
            <div style={{ fontSize: "12px", fontWeight: 300, color: "black" }}>
              Armadillo Waste Inc.
            </div>
          </div>
          Armadillo Waste Inc.
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: 90, height: 50 }}
              src={armadilloLogo}
              alt="armadillo logo"
            />
            <div style={{ fontSize: "12px", fontWeight: 300, color: "black" }}>
              Armadillo Waste Inc.
            </div>
          </div>
        </h1> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="bjr-logo"
            src={bootjackRanchLogo}
            alt="Bootjack Ranch Logo"
          />
          <div className="bootjack-ranch">Boot Jack Ranch</div>
          <div className="subheader">
            Handmade boot jacks and western wear and accessories at a discounted
            price{" "}
          </div>
        </div>
      </header>

      <section style={{ transform: "translate(0rem, -1rem)" }}>
        <h2>About Us</h2>
        <p className="about-us">
          Born in the heart of Austin, Texas, Country & Western Boot Jacks
          stands at the crossroads of tradition and craftsmanship. Each
          handcrafted boot jack isn't just a tool, but a testament to the rugged
          elegance of the American West.
        </p>
        <p className="about-us">
          Merging timeless charm with modern design, our boot jacks are more
          than just accessories - they're companions for your boots. Crafted by
          local artisans, each piece captures the spirit of the Lone Star State.
          Whether you're a cowboy, an Austin music lover, or a connoisseur of
          fine craftsmanship, Boot Jack Ranch is dedicated to enhancing your
          boot-wearing journey. Welcome to our legacy. Welcome to Boot Jack
          Ranch.
        </p>
      </section>

      <section>
        <h2 style={{ color: "#333" }}>Get in Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label style={{ color: "black" }}>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              name="name"
              required
            />
          </label>
          <label style={{ color: "black" }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              required
            />
          </label>
          <label style={{ color: "black" }}>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              rows={5}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h2>Contact Info</h2>
        <address style={{ color: "black" }}>
          <div>
            <strong>Location:</strong>
          </div>
          <a
            className="address-link"
            href="#"
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <div>Austin, Texas</div>
          </a>
          <strong>Phone #:</strong> 346-276-9862
          <br />
        </address>
      </section>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Boot Jack Ranch All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
