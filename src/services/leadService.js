// Lead service — abstraction layer for lead submission
// Currently routes leads to WhatsApp
// Architecture is extensible for future CRM/API integration

import { WHATSAPP_URL } from '../config/contact';

/**
 * Submit enrollment lead — currently opens WhatsApp with prefilled message
 * Future: POST to API → save to DB → then open WhatsApp
 *
 * @param {Object} formData - Form submission data
 * @param {string} formData.name
 * @param {string} formData.phone
 * @param {string} formData.whatsapp
 * @param {string} formData.email
 * @param {string} formData.course
 * @param {string} formData.batch
 * @param {string} formData.qualification
 * @param {string} formData.message
 * @returns {Promise<{success: boolean, whatsappUrl: string}>}
 */
export const submitEnrollmentLead = async (formData) => {
  try {
    // Build the WhatsApp prefilled message
    const message = buildEnrollmentMessage(formData);
    const whatsappUrl = WHATSAPP_URL(message);

    // TODO: When backend is ready, POST to API here:
    // await fetch('/api/leads', { method: 'POST', body: JSON.stringify(formData) });

    return { success: true, whatsappUrl };
  } catch (error) {
    console.error('Lead submission error:', error);
    return { success: false, whatsappUrl: null };
  }
};

/**
 * Build WhatsApp message from form data
 */
export const buildEnrollmentMessage = (formData) => {
  const lines = [
    `Hello! I would like to enroll in a Digital Marketing course.`,
    ``,
    `*Name:* ${formData.name}`,
    `*Phone:* ${formData.phone}`,
    formData.whatsapp ? `*WhatsApp:* ${formData.whatsapp}` : '',
    formData.email ? `*Email:* ${formData.email}` : '',
    `*Course:* ${formData.course}`,
    formData.batch ? `*Preferred Batch:* ${formData.batch}` : '',
    formData.qualification ? `*Qualification:* ${formData.qualification}` : '',
    formData.message ? `*Message:* ${formData.message}` : '',
    ``,
    `Please share more details about the enrollment process.`,
  ].filter(Boolean);

  return lines.join('\n');
};

/**
 * Submit contact/enquiry lead (for contact page)
 */
export const submitContactLead = async (formData) => {
  try {
    const message = `Hello! I have an enquiry.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const whatsappUrl = WHATSAPP_URL(message);
    return { success: true, whatsappUrl };
  } catch (error) {
    return { success: false, whatsappUrl: null };
  }
};
