import { useState } from "react";
import { UploadCloud, Loader2, X, ArrowLeft, Clock } from "lucide-react";
import { FileService } from "../services/FileService";
import { Link } from "react-router-dom"; // or your routing solution

export default function PdfUploadSection() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [internships, setInternships] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setUploading(true);
    setError(null);
    setInternships([]);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await FileService.uploadFile(formData);

      if (res.data?.data?.internships) {
        setInternships(res.data.data.internships);
      } else {
        setError("Failed to retrieve internship data.");
      }
    } catch (err) {
      console.error("Upload failed:", err);
      setError("Something went wrong while uploading.");
    }

    setUploading(false);
  };

  return (
    <section className="w-full flex flex-col items-center justify-center py-40 px-4 bg-gradient-to-r from-background-light via-background to-background-darker">
      {/* Navigation Links */}
      <div className="absolute top-6 left-6">
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(187,155,255,0.2)] 
    bg-[rgba(187,155,255,0.05)] text-primary-400 backdrop-blur-[40px] 
    shadow-[0_0_10px_2px_rgba(187,155,255,0.1)] transition-all
    hover:shadow-[0_0_15px_3px_rgba(187,155,255,0.2)] hover:text-primary-300
    hover:border-[rgba(187,155,255,0.3)]"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="absolute top-6 right-6">
        <Link
          to="/history"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(187,155,255,0.2)] 
    bg-[rgba(187,155,255,0.05)] text-primary-400 backdrop-blur-[40px] 
    shadow-[0_0_10px_2px_rgba(187,155,255,0.1)] transition-all
    hover:shadow-[0_0_15px_3px_rgba(187,155,255,0.2)] hover:text-primary-300
    hover:border-[rgba(187,155,255,0.3)] group"
        >
          <Clock size={18} className="transition-transform group-hover:rotate-[15deg]" />
          <span>History</span>
        </Link>
      </div>


      <h2 className="text-5xl font-bold text-primary-400 mb-4">Upload Your PDF</h2>

      <p className="text-md text-primary-400 mb-10 text-center max-w-md">
        Upload your PDF document here. We will process and extract key information from it to help you in your journey.
      </p>

      <div className="relative">
        <div
          className={`w-[250px] h-[150px] rounded-2xl border border-[rgba(187,155,255,0.2)] 
          bg-[rgba(187,155,255,0.05)] text-[#BB9BFF] backdrop-blur-[40px] 
          shadow-[0_0_25px_5px_rgba(187,155,255,0.2)] transition-all 
          flex flex-col justify-center items-center p-4 cursor-pointer 
          hover:shadow-[0_0_35px_7px_rgba(187,155,255,0.3)] relative
          ${uploading ? "opacity-50 pointer-events-none" : ""}`}
        >
          <UploadCloud size={50} />
          <div className="text-lg font-bold mt-2 mb-1">Upload PDF</div>
          <div className="text-xs text-center">Click or drag file here</div>

          <input
            type="file"
            accept="application/pdf"
            className="opacity-0 absolute w-full h-full cursor-pointer"
            onChange={handleFileChange}
            disabled={uploading}
          />
        </div>

        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="animate-spin h-10 w-10 text-primary-400" />
          </div>
        )}
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {internships.length > 0 && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-background-darker border border-white/10 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background-darker p-4 border-b border-white/10 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">Recommended Internships</h3>
              <button
                onClick={() => setInternships([])}
                className="text-white/50 hover:text-white transition"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              {internships.map((internship) => (
                <div
                  key={internship.id}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition"
                >
                  <h4 className="font-medium text-white">{internship.position}</h4>
                  <p className="text-primary-300 text-sm mt-1">{internship.company}</p>
                  {internship.description && (
                    <p className="text-white/70 text-sm mt-2">{internship.description}</p>
                  )}
                  <a
                    href={internship.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-blue-400 hover:underline"
                  >
                    View Listing
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}