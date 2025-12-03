import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FeatureCardsSection } from '@/components/sections/FeatureCardsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { TeamSection } from '@/components/sections/TeamSection';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us' },
        ]}
        label="About Our Facility"
        title="Your Home Away From Home"
        subtitle="A Leading Care Facility"
        description="We provide compassionate, world-class care with a focus on healing and holistic wellness. Our dedicated team is committed to supporting your journey to recovery and well-being."
        cta={{
          text: 'Request a Tour',
          href: '#callback',
        }}
      />

      {/* Stats Section */}
      <StatsSection
        stats={[
          { label: 'Acres of Land', value: '50+', icon: '🌳' },
          { label: 'Years of Experience', value: '25+', icon: '📅' },
          { label: 'Staff Members', value: '150+', icon: '👥' },
          { label: 'Patient Satisfaction', value: '98%', icon: '⭐' },
        ]}
      />

      {/* Feature Cards Section */}
      <FeatureCardsSection
        title="More About Us"
        description="Discover what makes our facility a leader in compassionate care"
        features={[
          {
            overline: 'Our Approach',
            title: 'Compassionate Staff',
            description:
              'Our team of highly trained professionals brings years of experience and genuine care to every interaction. We treat each patient as family.',
            icon: '❤️',
          },
          {
            overline: 'Infrastructure',
            title: 'Modern Facilities',
            description:
              'State-of-the-art equipment and comfortable accommodations designed to support healing and recovery in a welcoming environment.',
            icon: '🏥',
          },
          {
            overline: 'Wellness',
            title: 'Holistic Care',
            description:
              'We address the physical, emotional, and spiritual aspects of health through integrated treatment and wellness programs.',
            icon: '🧘',
          },
        ]}
        columns={3}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection
        title="Why Choose Us"
        description="Excellence in care and commitment to your wellness"
        benefits={[
          {
            icon: '🎯',
            title: 'Personalized Treatment Plans',
            description: 'Customized care designed specifically for your unique needs and goals.',
          },
          {
            icon: '🏆',
            title: 'Award-Winning Facility',
            description: 'Recognized nationally for excellence in patient care and outcomes.',
          },
          {
            icon: '🤝',
            title: 'Family-Centered Care',
            description: 'We involve family members in the healing process and recovery planning.',
          },
          {
            icon: '📊',
            title: 'Evidence-Based Practices',
            description: 'All treatments are grounded in the latest research and best practices.',
          },
        ]}
        highlightBenefits={[
          {
            icon: '🌟',
            title: 'World-Class Amenities',
            description:
              'From private rooms to recreational facilities, we provide everything needed for comfort and healing.',
          },
          {
            icon: '🔬',
            title: 'Advanced Treatments',
            description:
              'Access to cutting-edge therapies and medical interventions for optimal outcomes.',
          },
          {
            icon: '🌈',
            title: 'Holistic Approaches',
            description:
              'Integration of traditional and alternative therapies for comprehensive wellness.',
          },
        ]}
      />

      {/* Team Section */}
      <TeamSection
        title="Meet Our Professional Team"
        description="Our experienced and compassionate professionals are dedicated to your care and recovery."
        members={[
          {
            id: '1',
            name: 'Dr. Sarah Johnson',
            role: 'Medical Director',
            badge: '#1 Rated Physician',
          },
          {
            id: '2',
            name: 'Dr. Michael Chen',
            role: 'Chief of Psychiatry',
            badge: '20+ Years Experience',
          },
          {
            id: '3',
            name: 'Lisa Martinez',
            role: 'Director of Nursing',
            badge: 'RN, MSN',
          },
          {
            id: '4',
            name: 'James Wilson',
            role: 'Lead Therapist',
            badge: 'Licensed LCSW',
          },
          {
            id: '5',
            name: 'Emma Davis',
            role: 'Wellness Coordinator',
            badge: 'Certified Holistic',
          },
          {
            id: '6',
            name: 'Robert Thompson',
            role: 'Nutrition Specialist',
            badge: 'Registered Dietitian',
          },
        ]}
        showCallbackForm={true}
        callbackFormProps={{
          title: 'Request a Confidential Callback',
          description: 'Have questions? Our admissions team is here to help. Call us or fill out the form below.',
        }}
      />
    </>
  );
}
