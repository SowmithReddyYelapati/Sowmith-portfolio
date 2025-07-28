import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, X } from "lucide-react";

const CertificationsSection = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const certifications = [
    {
      title: "Linguaskill English Certification",
      category: "English Language Proficiency",
      issuer: "Cambridge University Press & Assessment",
      description:
        "Demonstrated strong command of the English language across all four skills: Listening (B1), Reading (C1), Speaking (B2), and Writing (B2), achieving an overall CEFR level of B2. Proficient in understanding complex texts, expressing ideas fluently, and writing clear, structured content suitable for academic and professional settings.",
      verifyLink: "https://1drv.ms/b/c/69c04ce8be8a1319/ERbqFR28AZVDlhJvA_0AzZ8BE2ImB-2G_iCEIoT4t4vM5w?e=faPgUy", // From public folder
    },
    {
      title: "Deloitte Technology Job Simulation",
      category: "Coding & Development",
      issuer: "Deloitte via Forage",
      description:
        "Completed a virtual job simulation where I worked on practical tasks involving software development and coding, gaining hands-on experience aligned with real-world expectations at Deloitte. Developed skills in analyzing requirements, writing clean code, and understanding technology consulting practices.",
      verifyLink: "https://1drv.ms/i/c/69c04ce8be8a1319/Ef4IPDhTGJNKrzjN67S-U60BaTiCLrXIyFPer78dzrpuJg?e=WL8JkK", // From public folder
    },
    {
      title: "HackerRank Skill Certifications",
      category: "Programming Proficiency",
      issuer: "HackerRank",
      description:
        "Earned certifications by demonstrating strong problem-solving and coding abilities in key areas such as Java, Problem Solving, and Data Structures. These assessments reflect industry-level coding standards and validate practical proficiency through timed, hands-on challenges.",
      verifyLink: "https://www.hackerrank.com/profile/h2300031297",
    },
  ];

  const handleVerifyClick = (link: string) => {
    if (link.endsWith(".jpg") || link.endsWith(".jpeg") || link.endsWith(".png")) {
      setModalImage(link);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  const closeModal = () => setModalImage(null);

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="grid gap-6">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <Badge variant="secondary" className="mb-2">
                  {cert.category}
                </Badge>
                <p className="text-portfolio-green font-medium">
                  Issued by {cert.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleVerifyClick(cert.verifyLink)}
                className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm font-medium hover:bg-muted transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Verify Certificate
              </button>
            </div>
            <p className="text-muted-foreground">{cert.description}</p>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1 hover:bg-opacity-80"
              onClick={closeModal}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={modalImage}
              alt="Certificate"
              className="max-h-[80vh] w-auto rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
