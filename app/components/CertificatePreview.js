export default function CertificatePreview({ formData }) {
    return (
      <div className="w-[22cm] h-[18cm] border border-gray-300 p-4 bg-white text-black">
        <h1 className="text-xl font-bold text-center">Prof. N R MADHAVA MENON INTERDICIPLINARY CENTRE</h1>
        <h2 className="text-lg font-semibold text-center">FOR RESEARCH ETHICS AND PROTOCOLS</h2>
        <p className="text-center italic">(An Inter University Centre of Excellence)</p>
        <h3 className="text-center font-semibold mt-2">COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</h3>
        <div className="flex justify-between mt-4">
          <p>No.ICREP/CC/2022/91/-----</p>
          <p>Date {formData.date}</p>
        </div>
        <h4 className="text-center font-bold mt-4 underline">COURSE AND CONDUCT CERTIFICATE</h4>
        <p className="mt-4">
          This is to certify that Sri/Kum. <span className="font-semibold">{formData.name}</span>
        </p>
        <p className="mt-2">
          Admn No. <span className="font-semibold">{formData.admissionNo}</span> is/was a student of this Centre for his/her
        </p>
        <p className="mt-2">
          <span className="font-semibold">{formData.course}</span> course from
        </p>
        <p className="mt-2">
          <span className="font-semibold">{formData.dateFrom}</span> to <span className="font-semibold">{formData.dateTo}</span>. His/her conduct and character
        </p>
        <p className="mt-2">
          is/was <span className="font-semibold">{formData.conduct}</span> during the period.
        </p>
        <div className="mt-8">
          <p>Place: <span className="font-semibold">{formData.place}</span></p>
          <p>Date: <span className="font-semibold">{formData.date}</span></p>
        </div>
        <div className="mt-8 text-right">
          <p>(Office Seal)</p>
          <p className="font-bold">Hon. DIRECTOR</p>
        </div>
      </div>
    );
  }