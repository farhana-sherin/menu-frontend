import { useEffect, useState } from "react";

export const ShowMenuQR = () => {
  const [qrBase64, setQrBase64] = useState("");
  const [menuUrl, setMenuUrl] = useState("");

  useEffect(() => {
    const fetchQR = async () => {
      try {
        console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

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

  // ✅ Redirect automatically when menuUrl is available
  useEffect(() => {
    if (menuUrl) {
      window.location.href = menuUrl;
    }
  }, [menuUrl]);

  if (!qrBase64) return <p>Loading QR code...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-2xl font-semibold mb-4">Redirecting to menu...</h2>
      <img
        src={`data:image/png;base64,${qrBase64}`}
        alt="Menu QR"
        className="w-64 h-64 border rounded-xl shadow-md"
      />
      <p className="mt-4 text-gray-500">If you are not redirected automatically, <a href={menuUrl} className="text-blue-600 underline">click here</a>.</p>
    </div>
  );
};
