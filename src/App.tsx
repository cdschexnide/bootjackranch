import { useState } from "react";
import "./App.css";

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
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

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
        <h1>Armadillo Waste Inc.</h1>
        <div style={{ color: "black" }}>
          Junk hauler and bulk item removal in Houston, Texas
        </div>
      </header>

      <section>
        <h2>About Us</h2>
        <p style={{ color: "black" }}>
          Armadillo Waste specializes in hauling junk and removing bulk items in
          the Houston area. Whether it's yard waste, commercial appliances, home
          furniture, construction debris, or any other unwanted items, we have
          you covered.
        </p>
        <h3 style={{ color: "#333" }}>We can assist with:</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ textAlign: "left", marginTop: 0, paddingTop: 0 }}>
            <li style={{ color: "black" }}>Yard waste and bagged debris</li>
            <li style={{ color: "black" }}>
              Commercial appliances such as refrigerators
            </li>
            <li style={{ color: "black" }}>
              Home furniture like sofas, mattresses, and tables
            </li>
            <li style={{ color: "black" }}>
              Office furniture removal and liquidation
            </li>
            <li style={{ color: "black" }}>
              Construction scrap, wood, and metal recycling
            </li>
            <li style={{ color: "black" }}>
              Foreclosure clean-outs and much more
            </li>
          </ul>
        </div>
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
        <h2>Contact Us</h2>
        <address style={{ color: "black" }}>
          <strong>Office:</strong> +1 832-379-9661
          <br />
          <strong>Cell:</strong> +1 281-855-6358
          <br />
          <strong>Address:</strong> 16931 Cairngale Street
          <br />
          <strong>City:</strong> Houston
          <br />
          <strong>State:</strong> Texas
          <br />
          <strong>ZIP Code:</strong> 77084
          <br />
        </address>
      </section>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Armadillo Waste Inc. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
