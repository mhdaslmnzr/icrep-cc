import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default function CertificatePDF({ formData }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Prof. N R MADHAVA MENON INTERDICIPLINARY CENTRE</Text>
          <Text style={styles.subtitle}>FOR RESEARCH ETHICS AND PROTOCOLS</Text>
          <Text style={styles.text}>(An Inter University Centre of Excellence)</Text>
          <Text style={styles.subtitle}>COCHIN UNIVERSITY OF SCIENCE AND TECHNOLOGY</Text>
          <Text style={styles.text}>No.ICREP/CC/2022/91/-----                  Date {formData.date}</Text>
          <Text style={styles.subtitle}>COURSE AND CONDUCT CERTIFICATE</Text>
          <Text style={styles.text}>This is to certify that Sri/Kum. {formData.name}</Text>
          <Text style={styles.text}>Admn No. {formData.admissionNo} is/was a student of this Centre for his/her</Text>
          <Text style={styles.text}>{formData.course} course from</Text>
          <Text style={styles.text}>{formData.dateFrom} to {formData.dateTo}. His/her conduct and character</Text>
          <Text style={styles.text}>is/was {formData.conduct} during the period.</Text>
          <Text style={styles.text}>Place: {formData.place}</Text>
          <Text style={styles.text}>Date: {formData.date}</Text>
          <Text style={styles.text}>(Office Seal)                               Hon. DIRECTOR</Text>
        </View>
      </Page>
    </Document>
  );
}