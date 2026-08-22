import {
  UserRound,
  CalendarDays,
  CreditCard,
  Phone,
  Mail,
  FileText,
} from "lucide-react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

const PatientInformation = ({ patientData, onChange, onClear }) => {
  return (
    <div className="w-full flex flex-col  h-full gap-5 ">
      <div>

        <div className="mb-4 flex items-start gap-3.5">

          <h2 className="text-lg font-semibold text-gray-700   ">
            Patient Information
          </h2>

        </div>

        <div className="grid grid-cols-1 gap-x-3 gap-y-4 sm:grid-cols-2">
          <FormInput
            label="Full Name"
            placeholder="Enter patient full name"
            value={patientData.fullName}
            onChange={(value) => onChange("fullName", value)}
            icon={UserRound}
          />

          <FormInput
            label="Age - Year's"
            type="number"
            placeholder="Enter age"
            value={patientData.age}
            onChange={(value) => onChange("age", value)}
            icon={CalendarDays}
          />

          <FormSelect
            label="Gender"
            value={patientData.gender}
            onChange={(value) => onChange("gender", value)}
            options={[
              { label: "Select", value: "" },
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Other", value: "other" },
            ]}
          />


          <FormInput
            label="Patient ID (Optional)"
            placeholder="Enter patient ID"
            value={patientData.patientId}
            onChange={(value) => onChange("patientId", value)}
            icon={CreditCard}
          />


          <FormInput
            label="Contact Number (Optional)"
            type="tel"
            placeholder="Enter contact number"
            value={patientData.contactNumber}
            onChange={(value) => onChange("contactNumber", value)}
            icon={Phone}
          />

          {/* Email */}
          <FormInput
            label="Email (Optional)"
            type="email"
            placeholder="Enter email address"
            value={patientData.email}
            onChange={(value) => onChange("email", value)}
            icon={Mail}
          />


          <div className="sm:col-span-2">
            <FormInput
              label="Clinical Notes (Optional)"
              placeholder="Any relevant clinical notes or history"
              value={patientData.clinicalNotes}
              onChange={(value) => onChange("clinicalNotes", value)}
              icon={FileText}
            />
          </div>
        </div>
      </div>
      <div className=" pt-2 flex justify-end">
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-end  gap-2 rounded-lg border border-gray-500 bg-white px-6 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-50 shadow-sm cursor-pointer"
        >

          Clear Form
        </button>
      </div>
    </div>
  );
};

export default PatientInformation;
