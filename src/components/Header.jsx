function Header({ lightMode, setLightMode }) {
  return (
    <header>
      <div className="container navbar">
        <div>
          <h2 className="navh2">Social Media Dashboard</h2>
          <p className="navp">Total Followers: 23,004</p>
        </div>

        <label className="dark-mode">
          <span>{lightMode ? "Light Mode" : "Dark Mode"}</span>

          <span className="switch">
            <input
              type="checkbox"
              checked={lightMode}
              onChange={() => setLightMode(!lightMode)}
            />
            <span className="slider"></span>
          </span>
        </label>
      </div>
    </header>
  );
}

export default Header;
