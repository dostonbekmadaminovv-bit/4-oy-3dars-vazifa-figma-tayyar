import { useEffect, useState } from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

function App() {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  return (
    <div className={lightMode ? "app light" : "app"}>
      <Header lightMode={lightMode} setLightMode={setLightMode} />

      <div className="cards container">
        <Section1
          img="./facebook.png"
          h2={1987}
          p="Followers"
          img2="./facebook2.png"
        />
        <Section1
          img="./twitter.png"
          h2={1044}
          p="Followers"
          img2="./twitter2.png"
        />
        <Section1
          img="./instagram.png"
          h2="11k"
          p="Followers"
          img2="./insta2.png"
        />
        <Section1
          img="./youtube.png"
          h2={8239}
          p="Followers"
          img2="./youtube2.png"
        />
      </div>

      <div className="container">
        <h2 className="orta">Overview - Today</h2>
      </div>

      <div className="cards2 container">
        <Section2 p="Page Views" img1="./Path.png" h2={87} img2="./-3.png" />
        <Section2 p="Likes" img1="./Path.png" h2={52} img2="./-2.png" />
        <Section2 p="Likes" img1="./instak.png" h2={5462} img2="./2257.png" />
        <Section2
          p="Profile Views"
          img1="./instak.png"
          h2="52k"
          img2="./1375.png"
        />
        <Section2 p="Retweets" img1="./twit.png" h2="117" img2="./303.png" />
        <Section2 p="Likes" img1="./twit.png" h2="507" img2="./553.png" />
        <Section2 p="Likes" img1="./yutub.png" h2="107" img2="./19.png" />
        <Section2
          p="Total Views"
          img1="./yutub.png"
          h2="1407"
          img2="./12.png"
        />
      </div>
    </div>
  );
}

export default App;
