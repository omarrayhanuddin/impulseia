// app/Privacypolicy/page.tsx
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-500 mb-10">Privacy Policy</h1>

        <p className="text-base text-muted-foreground mb-6">
          Your privacy is important to us at <strong>Impulseia</strong>. This policy explains how we collect, use, and protect your information when you interact with our website or services.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect personal information such as:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Name, email address, and contact number</li>
              <li>Company name and project requirements</li>
              <li>Website behavior data via analytics tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              The information we collect helps us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Deliver and improve our services</li>
              <li>Personalize your experience</li>
              <li>Respond to inquiries and send updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">3. Data Security</h2>
            <p className="text-muted-foreground">
              We use encryption and secure protocols to ensure your information stays protected at all times.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Third-Party Services</h2>
            <p className="text-muted-foreground">
              We may use trusted third-party services for analytics, email marketing, or CRM — all of which comply with global data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to access, update, or delete your data at any time. Simply email us at{' '}
              <a href="mailto:contact@impulseia.com" className="text-purple-400 underline">
                contact@impulseia.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">6. Policy Updates</h2>
            <p className="text-muted-foreground">
              We may update this policy as our services evolve. The latest version will always be available on this page.
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">Last updated: April 22, 2025</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
