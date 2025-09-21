"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

// Styles
const styles = StyleSheet.create({
  page: { padding: 40, fontSize: 11, fontFamily: "Helvetica", backgroundColor: "#fff", color: "#000" },
  header: { textAlign: "center", marginBottom: 20 },
  name: { fontSize: 22, fontWeight: "bold", color: "#0a66c2", marginBottom: 4 },
  contact: { fontSize: 11, color: "grey" },
  section: { marginBottom: 18 },
  sectionTitle: { fontSize: 14, fontWeight: "bold", color: "#0a66c2", marginBottom: 6, borderBottom: "1pt solid #0a66c2", paddingBottom: 2 },
  item: { marginBottom: 6 },
  itemHeader: { fontSize: 12, fontWeight: "bold" },
  subText: { fontSize: 11, color: "grey" },
  bullet: { marginLeft: 10, fontSize: 11 },
});

export default function ResumePDF({ user }: { user: any }) {
  const resume = user.resume_content || {}; // use AI-generated resume

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{user.input_data.fullName || "Your Name"}</Text>
          <Text style={styles.contact}>
            {user.input_data.email || "email@example.com"} |{" "}
            {user.input_data.phone || "+91 XXXXX XXXXX"} |{" "}
            {user.input_data.location || "Location"}
          </Text>
        </View>

        {/* Summary */}
        {resume.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text>{resume.summary}</Text>
          </View>
        )}

        {/* Technical Skills */}
        {resume.technical_skills && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            {Object.entries(resume.technical_skills).map(([category, skills]: any) => (
              <Text key={category}>
                <Text style={styles.itemHeader}>{category.replace(/_/g, " ")}: </Text>
                {skills.join(", ")}
              </Text>
            ))}
          </View>
        )}

        {/* Projects */}
        {resume.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {resume.projects.map((proj: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>{proj.name}</Text>
                <Text style={styles.bullet}>• {proj.description}</Text>
                <Text style={styles.subText}>Tech Stack: {proj.tech_stack?.join(", ")}</Text>
                {proj.highlights?.length > 0 && (
                  <Text style={styles.subText}>
                    Highlights: {proj.highlights.join("; ")}
                  </Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Experience */}
        {resume.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resume.experience.map((exp: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>{exp.position} — {exp.company}</Text>
                <Text style={styles.subText}>{exp.duration}</Text>
                {exp.responsibilities?.map((r: string, i: number) => (
                  <Text key={i} style={styles.bullet}>• {r}</Text>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {resume.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resume.education.map((edu: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>
                  {edu.degree} {edu.major} — {edu.institution}
                </Text>
                <Text style={styles.subText}>
                  Graduation: {edu.graduation_date} | GPA: {edu.gpa}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Achievements */}
        {resume.additional_sections?.achievements?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            {resume.additional_sections.achievements.map((ach: string, idx: number) => (
              <Text key={idx} style={styles.bullet}>• {ach}</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
