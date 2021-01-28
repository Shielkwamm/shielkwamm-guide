import "~/types/mdx.d.ts"; // TODO: load this automatically
import HomeMd from "./home.md";
import { Typography } from "@material-ui/core";

export const Home = () => (
  <div>
    <HomeMd />
    <style jsx>
      {`
        .welcome-message {
          padding: 32px 32px;
          font-size: 110%;
          background: linear-gradient(10deg, #e1009811, #3f77fa11);
          backbround-color: #3f77fa5533;
          border-image-slice: 1;
          border: 8px dotted #3f77fa11;
        }
      `}
    </style>
  </div>
);

export default Home;
