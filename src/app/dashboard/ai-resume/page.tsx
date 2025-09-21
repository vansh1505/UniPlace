"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { AIResumeHeader } from "@/components/dashboard/ai-resume/ai-resume-header";
import { AIResumeWizard } from "@/components/dashboard/ai-resume/ai-resume-wizard";
import { AIResumePreview } from "@/components/dashboard/ai-resume/ai-resume-preview";
import { useUser } from "../context/UserCtx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "@/components/ResumePDF";
import { Button } from "@/components/ui/button";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AIResumeBuilderPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState({});
  const [generatedResumeURL, setGeneratedResumeURL] = useState<boolean | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to backend or update state
    const updatedResumeData = {
      fullName: (e.target as any).fullName.value,
      email: (e.target as any).email.value,
      phone: (e.target as any).phone.value,
      location: (e.target as any).location.value,
      education: [
        {
          degree: (e.target as any).degree.value,
          branch: (e.target as any).branch?.value || "",
          institution: (e.target as any).institution.value,
          year: (e.target as any).graduationYear.value,
          cgpa: (e.target as any).cgpa.value,
        },
      ],
      experience: [
        {
          role: (e.target as any).role.value,
          company: (e.target as any).company.value,
          duration: (e.target as any).duration.value,
          description: (e.target as any).description.value,
        },
      ],
      projects: [
        {
          name: (e.target as any).projectName.value,
          description: (e.target as any).projectDescription.value,
          tech: (e.target as any).technologies.value,
        },
      ],
      skills: (e.target as any).skill?.value
        ? (e.target as any).skill.value.split(",").map((s: string) => s.trim())
        : [],
    };
    setResumeData(updatedResumeData);
    setGeneratedResumeURL(true);
    console.log("Resume Data Submitted:", updatedResumeData);
  };


  const user = useUser();
  if (!user) {
    return (
      <p className="text-center text-red-500">User not found. Please log in.</p>
    );
  }

  return (
    <DashboardLayout user={user}>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        <motion.div variants={fadeInUp}>
          <AIResumeHeader currentStep={currentStep} />
        </motion.div>
        <motion.div variants={fadeInUp} className="text-center mb-32">
          {/* Coming Soon */}
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp} className="xl:col-span-2">
            {/* <AIResumeWizard
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              resumeData={resumeData}
              setResumeData={setResumeData}
            /> */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="fullName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your full name"
                  value={user.name}
                  readOnly/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your email address"
                  value={user.email}
                  readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input type="tel" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input type="text" name="location" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your location" />
                </div>
              </div>
              <div>
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Education</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Degree</label>
                      <input type="text" name="degree" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. B.Tech CSE"
                      value={user.academicInfo?.course}
                      readOnly />
                    </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Branch</label>
                        <input type="text" name="branch" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. B.Tech CSE"
                        value={user.academicInfo?.branch}
                        readOnly />
                      </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Institution</label>
                      <input type="text" name="institution" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. Galgotias University"
                      value={user.collegeName}
                      readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">CGPA</label>
                      <input type="text" name="cgpa" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. 8.5"
                      value={user.academicInfo?.cgpa}
                      readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Year of Graduation</label>
                      <input type="text" name="graduationYear" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. 2026"
                      value={user.academicInfo?.yearOfPassing}
                      readOnly />
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Experience</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Role</label>
                      <input type="text" name="role" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. Full Stack Developer" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Company</label>
                      <input type="text" name="company" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. UniPlace" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Duration</label>
                      <input type="text" name="duration" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. 2024-Present" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea name="description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Briefly describe your role and achievements" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Projects</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Project Name</label  >
                      <input type="text" name="projectName" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. Raksha" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Description</label>
                      <textarea name="projectDescription" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Briefly describe the project" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
                      <input type="text" name="technologies" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. React Native, Next.js, Solidity" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900">Skills</h3>
                  <div className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Skill</label>
                      <input type="text" name="skill" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="e.g. JavaScript" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save</button>
            {generatedResumeURL && (
              <Button>
                <PDFDownloadLink
                  document={<ResumePDF user={resumeData} />}
                  fileName={`resume_${user.name.replace(/\s+/g, "_") || "default"}.pdf`}
                >
                  {({ loading }) =>
                    loading ? "Generating PDF..." : "Download Resume"
                  }
                </PDFDownloadLink>
              </Button>
            )}
              </div>
            </form>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <AIResumePreview user={user} />
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
