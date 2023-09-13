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
        <h1>Armadillo Waste Inc.</h1>
        <div style={{ color: "black" }}>
          Dump your mess with success, with afforable and quality service
        </div>
      </header>

      <section>
        <h2>About Us</h2>
        <p style={{ color: "black" }}>
          Armadillo Waste is an independent waste management company, servicing
          Houston and surrounding cities for 12 years & counting. We provide
          comprehensive solutions for full waste removal.
        </p>
        <h2>Services</h2>
        <h3>Rental Services</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ textAlign: "left", marginTop: 0, paddingTop: 0 }}>
            <li style={{ color: "black" }}>Yard waste and bagged debris</li>
            <li style={{ color: "black" }}>Roll-Off Dumpster</li>
            <li style={{ color: "black" }}>Dumpster Rental for Demolitions</li>
            <li style={{ color: "black" }}>
              Temporary Roll-Off Dumpsters for Home & Business
            </li>
          </ul>
        </div>
        <h3>Container Sizes Available</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul
            style={{
              textAlign: "left",
              marginTop: 0,
              paddingTop: 0,
              listStyle: "none",
            }}
          >
            <li style={{ color: "black" }}>
              - 15 yard Box container {`3ft tall x 8ft wide x 12ft long`}
            </li>
            <li style={{ color: "black" }}>
              - 20 yard Box container {`3ft tall x 8ft wide x 22ft long`}
            </li>
            <li style={{ color: "black" }}>
              - 30 yard Box container {`5ft tall x 8ft wide x 22ft long`}
            </li>
            <li style={{ color: "black" }}>
              - 40 yard Box container {`7ft tall x 8ft wide x 22ft long`}
            </li>
          </ul>
        </div>
        <h3 style={{ color: "#333" }}>Acceptable Waste:</h3>
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
        <h3 style={{ color: "#333" }}>Non-Acceptable Waste:</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ul style={{ textAlign: "left", marginTop: 0, paddingTop: 0 }}>
            <li style={{ color: "black" }}>Tires</li>
            <li style={{ color: "black" }}>TV's</li>
            <li style={{ color: "black" }}>Paint</li>
            <li style={{ color: "black" }}>Hazardous Waste</li>
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
        <h2>Contact Info</h2>
        <address style={{ color: "black" }}>
          <h3>Office Location</h3>
          <div>16931 Cairngale Street</div>
          <div>Houston, TX 77084</div>
          <strong>Main #:</strong> 832-379-9661
          <br />
          <strong>Office #:</strong> 832-574-2689
          <br />
        </address>
      </section>
      <section>
        <h2>Hours of Operation</h2>
        <div>
          <span>
            <div>M-F</div>
            <div>6am-5pm</div>
          </span>
          <span>
            <div>Sat</div>
            <div>6am-12pm</div>
          </span>
        </div>
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
