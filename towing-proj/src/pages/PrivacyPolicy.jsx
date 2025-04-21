const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how we collect, use, and protect your
        personal information when you use our towing services.
      </p>

      <h2 className="text-2xl font-bold mt-4">1. Information We Collect</h2>
      <p>
        We collect personal information, including your name, phone number,
        email address, and vehicle details when you request a towing service.
      </p>

      <h2 className="text-2xl font-bold mt-4">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>To provide towing and roadside assistance services.</li>
        <li>To communicate with you regarding your service request.</li>
        <li>To improve our services and customer support.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">3. Sharing Your Information</h2>
      <p>
        We do not sell or rent your personal information. However, we may share
        it with:
      </p>
      <ul className="list-disc ml-6">
        <li>Third-party towing partners to fulfill your service request.</li>
        <li>Law enforcement if required by law.</li>
      </ul>

      <h2 className="text-2xl font-bold mt-4">4. Data Security</h2>
      <p>
        We take appropriate measures to protect your personal data from
        unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-bold mt-4">5. Your Rights</h2>
      <p>
        You have the right to request access, correction, or deletion of your
        personal information by contacting us.
      </p>

      <h2 className="text-2xl font-bold mt-4">6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated date.
      </p>

      <h2 className="text-2xl font-bold mt-4">7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at <a href="mailto:support@towingservice.com" className="text-blue-500">support@towingservice.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
