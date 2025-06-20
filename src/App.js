// import RouterPage from './pages/RouterPage';
// import * as React from 'react'

// function App() {
//   return (
//       <div className="App">
//         <RouterPage />
//       </div>
//     );
// }

// export default App;

import FloatingButtons from './pages/FloatingsButtons';
import RouterPage from './pages/RouterPage';
import * as React from 'react';
 

function App() {
 
  const phoneNumber = "+919873025200";  
  const whatsappNumber = "+919873025200";  
  const bookingEngineUrl = "https://www.asiatech.in/booking_engine/index3.php?token=MTY="; 

  return (
    <div className="App">
      <RouterPage />
      <FloatingButtons
        phoneNumber={phoneNumber}
        whatsappNumber={whatsappNumber}
        bookingUrl={bookingEngineUrl}
      />
    </div>
  );
}

export default App;