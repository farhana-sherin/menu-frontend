import { useEffect, useState } from "react";

export const ShowMenuQR = () => {
  const [qrBase64, setQrBase64] = useState("");
  const [menuUrl, setMenuUrl] = useState("");

  useEffect(() => {
    const fetchQR = async () => {
      try {
        // ✅ Check that your .env variable is being loaded
        console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

        // ✅ Optional: fallback if .env not loaded
        const baseUrl =
          import.meta.env.VITE_API_BASE_URL ||
          "https://menu-backend-1-x8un.onrender.com";

        const response = await fetch(`${baseUrl}/api/v1/customer/qr-pdf/`);

        if (!response.ok) {
          const text = await response.text();
          console.error("Server returned non-JSON response:", text);
          return;
        }

        const data = await response.json();
        setQrBase64(data.qr_base64);
        setMenuUrl(data.menu_url);
      } catch (error) {
        console.error("Error fetching QR:", error);
      }
    };

    fetchQR();
  }, []);

  if (!qrBase64) return <p>Loading QR code...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Scan QR to see the menu</h2>
      <img
        src={`data:image/png;base64,${qrBase64}`}
        alt="Menu QR"
        className="w-64 h-64 border rounded-xl shadow-md"
      />
      <p className="mt-4 text-blue-600">{menuUrl}</p>
    </div>
  );
};
