"use client"
import { useState } from 'react';
import InputForm from './components/InputForm';
import CertificatePreview from './components/CertificatePreview';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CertificatePDF from './components/CertificatePDF';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    admissionNo: '',
    course: '',
    dateFrom: '',
    dateTo: '',
    conduct: '',
    place: '',
    date: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 p-4 overflow-y-auto">
        <InputForm formData={formData} onChange={handleInputChange} />
      </div>
      <div className="w-1/2 p-4 flex flex-col">
        <CertificatePreview formData={formData} />
        <PDFDownloadLink
          document={<CertificatePDF formData={formData} />}
          fileName="certificate.pdf"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-center"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}