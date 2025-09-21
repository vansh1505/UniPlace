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
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#fff",
    color: "#000",
  },

  // Header
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0a66c2", // LinkedIn blue
    marginBottom: 4,
  },
  contact: {
    fontSize: 11,
    color: "grey",
  },

  // Section
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#0a66c2",
    marginBottom: 6,
    borderBottom: "1pt solid #0a66c2",
    paddingBottom: 2,
  },

  // Items
  item: {
    marginBottom: 6,
  },
  itemHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 11,
    color: "grey",
  },
  bullet: {
    marginLeft: 10,
    fontSize: 11,
  },
});

export default function ResumePDF({ user }: { user: any }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{user.fullName || "Your Name"}</Text>
          <Text style={styles.contact}>
            {user.email || "email@example.com"} |{" "}
            {user.phone || "+91 XXXXX XXXXX"} |{" "}
            {user.location || "Location"}
          </Text>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {user.education?.length > 0 ? (
            user.education.map((edu: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>
                  {edu.degree} {edu.branch} — {edu.institution}
                </Text>
                <Text style={styles.subText}>
                  {edu.year} | CGPA: {edu.cgpa}
                </Text>
              </View>
            ))
          ) : (
            <Text>No education added</Text>
          )}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {user.experience?.length > 0 ? (
            user.experience.map((exp: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>
                  {exp.role} — {exp.company}
                </Text>
                <Text style={styles.subText}>{exp.duration}</Text>
                <Text style={styles.bullet}>• {exp.description}</Text>
              </View>
            ))
          ) : (
            <Text>No experience added</Text>
          )}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {user.projects?.length > 0 ? (
            user.projects.map((proj: any, idx: number) => (
              <View key={idx} style={styles.item}>
                <Text style={styles.itemHeader}>{proj.name}</Text>
                <Text style={styles.bullet}>• {proj.description}</Text>
                <Text style={styles.subText}>Tech: {proj.tech}</Text>
              </View>
            ))
          ) : (
            <Text>No projects added</Text>
          )}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text>{user.skills?.join(", ") || "No skills added"}</Text>
        </View>
      </Page>
    </Document>
  );
}
