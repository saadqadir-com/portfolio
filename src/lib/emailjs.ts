export interface ContactFormData {
  name: string;
  email: string;
  companyUrl: string;
  projectStatus: string | null;
  projectBrief: string;
  investmentTier: string | null;
}

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
