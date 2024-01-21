import "./App.css";

function App() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Subhi-c",
    },
    {
      name: "Frontend Mentor ",
      url: "https://www.frontendmentor.io/profile/Subhi-c",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/subhi-c/",
    },
    {
      name: "Twitter",
      url: "",
    },
    {
      name: "Instagram",
      url: " ",
    },
  ];
  return (
    <>
      <div className="card">
        <img src="./src/assets/avatar-jessica.jpeg" alt="" />
        <p>Jessica Randoll</p>
        <p className="green ">London, United Kingdom</p>
        <p className="desc">"Front-end developer and avid reader."</p>

        {links.map((link) => (
          <Link link={link.name} url={link.url} />
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

function Link({ link, url }) {
  return (
    <div>
      <button>
        {" "}
        <a href={url}> {link} </a>{" "}
      </button>
    </div>
  );
}

function Footer() {
  return (
    <div class="attribution">
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a href="https://www.frontendmentor.io/profile/Subhi-c">SubhiC</a>.
    </div>
  );
}
export default App;
