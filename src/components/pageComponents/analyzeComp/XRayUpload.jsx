import { useRef, useState } from "react";
import {
  Upload,
  X,
  FileImage,
  CheckCircle2,
  Lock,
} from "lucide-react";

const XRayUpload = ({
  file,
  onFileSelect,
  onRemove,
}) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleBrowse = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      onFileSelect(droppedFile);
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  return (
    <div className="w-full flex flex-col justify-between h-full ">
      <div  >
        <div className="mb-8 flex items-center justify-center gap-3.5">
          <h2 className="text-base font-bold text-gray-900 tracking-tight leading-snug">
            Upload knee X-ray study for AI analysis
          </h2>
        </div>

        {!file ? (
          <div
            onDragOver={(event) => {
              event.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={handleBrowse}
            className={`
              flex
              flex-col
              min-h-[300px]
              cursor-pointer
              items-center
              justify-center
              rounded-lg
              border-3
              border-dashed
              p-6
              text-center
              transition-all
              ${isDragging
                ? "border-[#13543e] bg-[#eef7f3]"
                : "border-[#abd6c7] bg-[#f4faf7] hover:bg-[#edf7f3]"
              }
            `}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.dcm,image/jpeg,image/png,application/dicom"
              onChange={handleInputChange}
              className="hidden"
            />


            <div className=" flex h-16 w-16 items-center justify-center rounded-full  text-[#13543e]">
              <Upload size={40} strokeWidth={2} />
            </div>

            <h3 className="text-base font-bold text-gray-900 mb-1">
              Drag & Drop Your Knee X-ray Study
            </h3>

            <p className="text-sm font-bold text-gray-800 mb-2">
              (DICOM, JPEG, PNG)
            </p>


            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                handleBrowse();
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#0b8f68]
                px-6
                py-3
                text-sm
               
                text-white
                
                transition-all
                hover:bg-[#0c3e2e]
               
              "
            >
              <Upload size={17} strokeWidth={2.2} />
              <span>Select Imaging File</span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-500 font-medium">
              <Lock size={13} className="text-[#13543e]" />
              <span>Encrypted Upload</span>
            </div>
          </div>
        ) : (
          <div className="relative flex min-h-[290px] flex-col items-center justify-center rounded-2xl border border-[#abd6c7] bg-[#f4faf7] p-6 text-center">
            <button
              type="button"
              onClick={onRemove}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition hover:text-red-500 cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#d7f0e5] mb-3">
              <FileImage size={40} className="text-[#13543e]" />
            </div>

            <CheckCircle2 size={24} className="text-[#13543e] mb-2" />

            <h3 className="max-w-[90%] truncate text-sm font-bold text-gray-900">
              {file.name}
            </h3>

            <p className="text-xs text-gray-500 mt-1 font-medium">
              {formatFileSize(file.size)}
            </p>

            <button
              type="button"
              onClick={handleBrowse}
              className="mt-5 text-xs font-bold text-[#13543e] hover:underline cursor-pointer"
            >
              Choose another file
            </button>
          </div>
        )}
      </div>



    </div>
  );
};

export default XRayUpload;
