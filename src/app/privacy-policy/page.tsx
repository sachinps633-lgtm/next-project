
import type { Metadata } from "next";



export const metadata: Metadata = {
	title: "Privacy Policy | Already Security",
	description:
		"Learn how Already Security collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
	return (
		<main className="px-6 py-16">
  <div className="mx-auto max-w-3xl">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      Privacy Policy
    </h1>
    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
      Effective date: {new Date().getFullYear()}
    </p>

    <section className="mt-8 space-y-6 text-gray-700 dark:text-gray-300">
      <p>
        This Privacy Policy describes how Already Security (“we”, “us”, “our”) collects, uses, shares and protects information collected from users (“you”, “your”) on our website.
      </p>
      <p>
        By using the Site, you agree to this Privacy Policy.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">1. What Information We Collect</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <b>Personal Information you provide directly:</b> Name, email address, phone number, company name, job title, address, any other information you supply in contact or lead forms.
        </li>
        <li>
          <b>Automatically collected information:</b> Device information (e.g. type, OS), browser type, IP address, referring/exit pages, date/time stamps, geographic location, usage statistics (e.g. pages visited), cookies and tracking technologies.
        </li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">2. How We Use Your Information</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Responding to your inquiries or requests.</li>
        <li>Sending you important updates related to services you requested.</li>
        <li>Managing and improving our services, Site functionality, usability.</li>
        <li>Marketing, promotions, and lead generation (only if you consent or as allowed under law).</li>
        <li>Analytics – to understand how users interact with our Site so we can optimize content and performance.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">3. Sharing of Information</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>We do not sell your personal data. But we may share your information with:</li>
        <li>Service providers/partners who help us with marketing, hosting, analytics, email, or customer service.</li>
        <li>Legal compliance: if required by law, regulation, legal process or government request.</li>
        <li>Business transfers: if the business (or part of it) is sold, merged, or reorganized, data may be among transferred assets (with privacy protections in place).</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">4. Cookies & Tracking</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Enable site functionality.</li>
        <li>Recognize returning users.</li>
        <li>Understand usage and trends.</li>
        <li>Run marketing or retargeting campaigns.</li>
      </ul>
      <p>
        You can control cookies via browser settings. Please note disabling certain cookies may affect the Site’s performance or features.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">5. Data Retention</h2>
      <p>
        We retain your personal information only as long as required to fulfill the purposes in this Privacy Policy, or as required by law. When no longer needed, we will securely delete or anonymize it.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">6. Your Rights</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Accessing the personal data we have about you.</li>
        <li>Correcting or updating your data.</li>
        <li>Deleting your data.</li>
        <li>Objecting to or restricting certain processing (e.g. marketing).</li>
        <li>Withdrawing consent where given.</li>
      </ul>
      <p>
        To exercise these rights, contact us using information below.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">7. Security</h2>
      <p>
        We take appropriate technical and organizational measures to protect your information against unauthorized access, loss, disclosure or alteration. While no method is 100% secure, we work to use industry-standard security.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">8. Children</h2>
      <p>
        Our Site is not intended for children under the age of [insert age, e.g. 13 / 16 / as per law]. We do not knowingly collect personal data from minors. If you believe we have collected such data, please contact us to have it removed.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">9. International Transfers</h2>
      <p>
        If you are accessing the Site from outside our primary country of operation, your information may be transferred to, stored, and processed in other countries. We ensure appropriate safeguards are in place.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make material changes, we will notify you by posting the revised version on this Site with a new “Effective Date”. Your continued use of the Site after such changes constitute your acceptance of the updated policy.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900 dark:text-gray-100">11. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or wish to exercise your rights, you may contact us at:
      </p>
      <address className="not-italic text-gray-700 dark:text-gray-300">
        Already Security
        <br />
        Email: <a className="text-primary underline" href="mailto:info@alreadysecurity.com">info@alreadysecurity.com</a>
        <br />
        Phone: <a className="text-primary underline" href="tel:8188001143">818-800-1143</a>
        <br />
        Address: <b>5311 Topanga canyon Blvd #216
			Woodland Hills CA 91364</b>
      </address>
    </section>
  </div>
</main>

	);
}


