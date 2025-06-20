import React, { useState } from "react";

const GDPRCookie = ({ settings }) => {
  const defaultSettings = {
    cookieTypes: [
      { type: "Essential", value: "essential", description: "Essential for the site", checked: true },
      { type: "Preferences", value: "preferences", description: "Site preferences", checked: true },
      { type: "Analytics", value: "analytics", description: "Site analytics", checked: false },
      { type: "Marketing", value: "marketing", description: "Marketing cookies", checked: false },
    ],
    title: "Accept Cookies & privacy",
    message: "This site uses cookies to improve your experience.",
    acceptBtnLabel: "Accept cookies",
    advancedBtnLabel: "Customize cookies",
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  // Always show the banner on refresh
  const [showBanner, setShowBanner] = useState(true);
  const [isAdvanced, setIsAdvanced] = useState(false);

  const handleAccept = () => {
    setShowBanner(false); // Hide the banner after accepting
  };

  const handleCustomize = () => {
    setIsAdvanced(!isAdvanced);
  };

  return (
    showBanner && (
      <div className="gdpr-cookie-banner">
        <h2>Accept Cookies & privacy</h2>
        <p>Cookies enable you to use shopping carts and to personalize your experience on our sites, tell us which parts of our websites people have visited, help us measure the effectiveness of ads and web searches.</p>
        {isAdvanced && (
          <div>
            {mergedSettings.cookieTypes.map((type) => (
              <label key={type.value}>
                <input type="checkbox" defaultChecked={type.checked} disabled={type.value === "essential"} />
                {type.type}
              </label>
            ))}
          </div>
        )}
        <button onClick={handleAccept}>{mergedSettings.acceptBtnLabel}</button>
        <button onClick={handleCustomize}>{mergedSettings.advancedBtnLabel}</button>
      </div>
    )
  );
};

export default GDPRCookie;
