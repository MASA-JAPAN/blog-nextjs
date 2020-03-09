import TheNav from "../components/TheNav";
import "../assets/sass/style.scss";

export default () => (
  <div>
    <TheNav />
    <div className="testingDev has-background-success">Hello</div>
    <style jsx>
      {`
        img {
          height: 500px;
        }
      `}
    </style>
  </div>
);
