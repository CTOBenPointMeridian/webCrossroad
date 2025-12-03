'use client';

import { useRef } from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SpecializedFeaturesSection } from '@/components/sections/SpecializedFeaturesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CallbackForm } from '@/components/forms/CallbackForm';
import {
  HospitalIcon,
  CrisisIcon,
  PartialDayIcon,
  PsychiatryIcon,
  LightIcon,
  VRIcon,
  NutritionIcon,
  DNAIcon,
  HerbIcon,
  ConciergeIcon,
  CheckmarkIcon,
} from '@/components/icons/IconLibrary';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        label="Top-Rated Mental Health Treatment"
        title="Customized Mental Health & Wellness Redefined"
        subtitle=""
        description=""
        cta={{
          text: 'OUR PROGRAMS',
          href: '#treatment',
        }}
      />

      {/* Treatment Services */}
      <section id="treatment" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-4">
              Compassionate Care Rooted in Innovation & Individualized Support
            </h2>
            <p className="text-xl text-[#6B8E7F] font-semibold mb-6">
              Innovative Mental Health Treatment Services
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Finding the right mental health treatment services can feel overwhelming—especially when you're trying to locate a team that genuinely understands the complexity of mental health challenges. At Crossroads Healing Center, we provide accessible, personalized, and research-backed mental health care that empowers individuals to regain stability, clarity, and hope.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our programs support adults navigating conditions such as depression, anxiety, bipolar disorder, trauma-related disorders, personality disorders, and co-occurring behavioral health concerns.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                From the moment you walk through our doors, our mission is simple: to help you heal with dignity, compassion, and the highest level of clinical excellence. Whether you're facing an acute mental health crisis or managing long-standing symptoms, our dedicated team will walk beside you every step of the way.
              </p>
            </div>

            {/* Treatment Services Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
              {[
                {
                  id: 'crisis',
                  title: 'Crisis Stabilization Program',
                  description:
                    'Expert psychiatric care and support for mental health emergencies.',
                  icon: CrisisIcon,
                },
                {
                  id: 'inpatient',
                  title: 'Residential Mental Health Treatment',
                  description:
                    'Five-star inpatient facility with modern amenities and evidence-based care.',
                  icon: HospitalIcon,
                },
                {
                  id: 'partial',
                  title: 'Partial Hospitalization Program (PHP)',
                  description:
                    'Flexible treatment without 24/7 residential stay.',
                  icon: PartialDayIcon,
                },
                {
                  id: 'aftercare',
                  title: 'Aftercare Planning & Coordination',
                  description:
                    'Medication stabilization and step-down levels of care.',
                  icon: PsychiatryIcon,
                },
              ].map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-[#E8DDD0]"
                  >
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-12 h-12 text-[#6B8E7F]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f2a24] mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-[#F5F1EB] to-[#EFE9E0] rounded-lg p-8 my-12">
              <h3 className="text-2xl font-bold text-[#0f2a24] mb-6">
                Why Choose Mental Health Treatment at Crossroads Healing Center?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Crossroads Healing Center is a premier provider of mental health treatment services, offering a unique blend of science-driven interventions and deeply personalized care.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We recognize that each person's experience is shaped by a dynamic combination of biological, psychological, and environmental factors—which is why no two treatment plans should ever look the same.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                <strong>Instead of relying on standardized approaches, we provide:</strong>
              </p>
              <ul className="space-y-3 text-gray-700 text-lg mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#6B8E7F] font-bold mt-1">✓</span>
                  <span>Holistic, trauma-informed treatment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6B8E7F] font-bold mt-1">✓</span>
                  <span>Client-centered care that prioritizes your voice and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6B8E7F] font-bold mt-1">✓</span>
                  <span>Therapeutic environments designed to promote grounding, safety, and wellness</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-[#6B8E7F] pl-6">
                When you choose Crossroads, you're choosing a place where your healing matters, your story matters, and your future matters.
              </p>
            </div>

            {/* Facility Section with Images */}
            <div>
              <h3 className="text-2xl font-bold text-[#0f2a24] mb-6">
                Our Expansive Mental Health Facility
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At Crossroads Healing Center, wellness is woven into every part of our facility. We've created a space where individuals can heal in comfort and confidence. Our modern campus includes:
              </p>

              {/* Facility Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/treatment-facility.webp"
                    alt="Treatment Facility - Main Building"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/treatment-image-2.webp"
                    alt="Treatment Area at Crossroads"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/facility-pic-2.jpg"
                    alt="Patient Room - Comfortable Accommodations"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src="/facility-pic-3.webp"
                    alt="Wellness Space at Crossroads"
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Amenities List */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-[#6B8E7F] font-bold">•</span>
                  <span>Semi-private and private en-suite rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#6B8E7F] font-bold">•</span>
                  <span>Copper soaking tubs</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#6B8E7F] font-bold">•</span>
                  <span>Sand-tray therapy rooms</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#6B8E7F] font-bold">•</span>
                  <span>Indoor basketball and pickleball courts</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#6B8E7F] font-bold">•</span>
                  <span>Calming, thoughtfully designed therapeutic spaces</span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg leading-relaxed">
                Every aspect of our environment is built to support emotional regulation, relaxation, and transformative healing.
              </p>
            </div>

            {/* Continuum of Care */}
            <div>
              <h3 className="text-2xl font-bold text-[#0f2a24] mb-6">
                Comprehensive Mental Health Programs
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                We offer a full spectrum of mental health treatment services designed to meet clients at every stage of their healing journey. Whether you need highly structured daily support or a more flexible therapeutic schedule, our programs evolve with your progress and adapt to your unique needs.
              </p>
              <div className="bg-[#0f2a24] text-white rounded-lg p-8">
                <p className="text-lg font-semibold mb-6">Our Continuum of Care Includes:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7BA89A] font-bold text-xl mt-1">→</span>
                    <div>
                      <p className="font-semibold">Crisis Stabilization Program</p>
                      <p className="text-gray-300 text-sm">Immediate support for acute mental health crises</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7BA89A] font-bold text-xl mt-1">→</span>
                    <div>
                      <p className="font-semibold">Residential Mental Health Treatment</p>
                      <p className="text-gray-300 text-sm">24/7 inpatient care with comprehensive treatment</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7BA89A] font-bold text-xl mt-1">→</span>
                    <div>
                      <p className="font-semibold">Partial Hospitalization Program (PHP)</p>
                      <p className="text-gray-300 text-sm">Structured daily treatment without residential stay</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7BA89A] font-bold text-xl mt-1">→</span>
                    <div>
                      <p className="font-semibold">Aftercare Planning & Coordination</p>
                      <p className="text-gray-300 text-sm">Ongoing support and transition to continued wellness</p>
                    </div>
                  </li>
                </ul>
                <p className="text-[#7BA89A] text-lg font-semibold mt-8">
                  Each program provides the ideal balance of therapeutic intensity, personal autonomy, and clinical guidance—ensuring meaningful support from your first day in treatment through long-term recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section id="conditions" className="py-16 sm:py-24 bg-gradient-to-b from-[#F5F1EB] to-[#EFE9E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f2a24] mb-4">
              Conditions We Treat
            </h2>
          </div>

          {/* Conditions Cards Carousel */}
          <div className="relative">
            <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4 px-4 -mx-4 sm:px-0 sm:mx-0">
              {[
                {
                  id: 'ocd',
                  title: 'OCD',
                  image: '/ocd.webp',
                  description: 'Choose our OCD treatment program today for a path to long-term healing & wellness.'
                },
                {
                  id: 'anxiety',
                  title: 'Anxiety',
                  image: '/anxiety.webp',
                  description: 'Our inpatient anxiety treatment programs offer you a personalized experience in wellness.'
                },
                {
                  id: 'depression',
                  title: 'Depression',
                  image: '/Depresion.webp',
                  description: 'Find out how our depression treatment program can help you find long-term healing.'
                },
                {
                  id: 'bipolar',
                  title: 'Bipolar Disorder',
                  image: '/Bipolar.webp',
                  description: 'Struggling with bipolar disorder? Let our caring team at Crossroads Healing Center help you restore balance in your life.'
                },
                {
                  id: 'bpd',
                  title: 'Borderline Personality Disorder',
                  image: '/borderline.webp',
                  description: 'The borderline personality disorder treatment programs at Crossroads Healing Center provides you with a path forward.'
                },
                {
                  id: 'schizophrenia',
                  title: 'Schizophrenia',
                  image: '/schitzophrenia.webp',
                  description: 'Our schizophrenia treatment programs offer you a safe space to achieve wellness & recovery.'
                },
                {
                  id: 'ptsd',
                  title: 'PTSD & Trauma',
                  image: '/ptsd.webp',
                  description: 'Our PTSD treatment program offers you the latest advancements in mental health treatment to find long-term solutions for trauma.'
                },
              ].map((condition) => (
                <div
                  key={condition.id}
                  className="flex-shrink-0 w-full sm:w-1/3 snap-center bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
                >
                  {/* Image */}
                  <div className="overflow-hidden h-64 sm:h-72">
                    <img
                      src={condition.image}
                      alt={condition.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-[#6B8E7F] uppercase tracking-wide mb-2">
                      Conditions Treated
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0f2a24] mb-3">
                      {condition.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {condition.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button onClick={() => scroll('left')} className="hidden sm:flex absolute left-0 top-1/3 -translate-y-1/2 -ml-6 w-12 h-12 items-center justify-center text-[#6B8E7F] hover:text-[#4A6B62] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scroll('right')} className="hidden sm:flex absolute right-0 top-1/3 -translate-y-1/2 -mr-6 w-12 h-12 items-center justify-center text-[#6B8E7F] hover:text-[#4A6B62] transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Specialized Modalities */}
      <SpecializedFeaturesSection
        title="An Experience in Wellness"
        description="Reset Your Mind. At Crossroads Healing Centers, we provide a world-class, personalized experience in mental health treatment at our residential campus. On over 14 acres of secluded land, you can find the healing you deserve."
        features={[
          { icon: LightIcon, label: 'Red Light Therapy' },
          { icon: VRIcon, label: 'Virtual Reality Therapy' },
          { icon: NutritionIcon, label: 'Customized Nutrition' },
          { icon: DNAIcon, label: 'Genetics Testing' },
          { icon: HerbIcon, label: 'Integrative Medicine' },
          { icon: ConciergeIcon, label: 'Concierge Healthcare' },
        ]}
        columns={3}
      />

      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say..."
        testimonials={[
          {
            quote:
              'An extremely well-designed and thoughtfully developed program tailored to the needs of the populations served, supported by a highly experienced and effective leadership team.',
            author: 'Justin Sabatino',
            date: '21 hours ago',
          },
          {
            quote:
              'I would highly recommend this place to anyone dealing with addiction or mental health challenges. It\'s a wonderful, well-run facility with an exceptional staff who truly care about the people they serve.',
            author: 'Tim Reisch',
            date: '18 days ago',
          },
          {
            quote: 'Amazing people, high class building, highly recommend',
            author: 'Kevin Reisch',
            date: '28 days ago',
          },
          {
            quote: 'Great facility! The only one I have found that offers actual treatment for the root cause.',
            author: 'Megan Crawford',
            date: '1 month ago',
          },
          {
            quote: 'Wonderful staff, and a great experience.',
            author: 'Haleigh Rae',
            date: '1 month ago',
          },
          {
            quote: 'Best care possible. This establishment is such an amazing experience.',
            author: 'Kyle Carver',
            date: '1 month ago',
          },
        ]}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          {
            question: 'What types of mental health conditions do you treat at Crossroads Healing Center?',
            answer:
              'We treat a wide range of conditions including depression, anxiety, bipolar disorder, PTSD, OCD, borderline personality disorder, schizophrenia, and substance use disorders. Our treatment programs are personalized to each individual\'s needs.',
          },
          {
            question: 'How does your individualized treatment plans work for each client?',
            answer:
              'Crossroads Healing Center is a mental health treatment center offering the latest advancements in mental health & dual-diagnosis treatment. Through our unique combination of evidence-based therapies, client-centered programming, and trauma-informed care, we offer our clients and their loved ones a path to long-term wellness solutions rooted in individualized care.',
          },
          {
            question: 'What kind of therapies and advanced treatments do you offer at your facility?',
            answer:
              'We offer innovative treatments including CBT, DBT, art therapy, music therapy, virtual reality exposure therapy, red light therapy, genetic testing, customized nutrition, integrative medicine, and concierge healthcare services. These complement our traditional evidence-based approaches.',
          },
        ]}
      />

      {/* Final CTA */}
      <section id="callback" className="py-16 sm:py-24 bg-gradient-to-r from-[#4A6B62] to-[#2A4A3F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Crossroads Healing Center
              </h2>
              <p className="text-lg text-[#B4A896] font-semibold mb-4">
                #1 Rated Mental Health Treatment Provider
              </p>
              <p className="text-xl font-semibold text-white mb-6">
                Request a 100% Confidential Callback
              </p>
              <p className="text-gray-300 mb-6">
                100% Secure – Confidential Contact. Our admissions team is available 24 hours a day, 7 days a week.
              </p>
              <div className="space-y-3 text-gray-200 text-sm">
                <p className="flex items-center gap-2">
                  <CheckmarkIcon width={20} height={20} className="text-[#9B8B7E] flex-shrink-0" />
                  Confidential & Secure
                </p>
                <p className="flex items-center gap-2">
                  <CheckmarkIcon width={20} height={20} className="text-[#9B8B7E] flex-shrink-0" />
                  24/7 Admissions Support
                </p>
                <p className="flex items-center gap-2">
                  <CheckmarkIcon width={20} height={20} className="text-[#9B8B7E] flex-shrink-0" />
                  Safe & Secluded 14-Acre Campus
                </p>
                <p className="flex items-center gap-2">
                  <CheckmarkIcon width={20} height={20} className="text-[#9B8B7E] flex-shrink-0" />
                  Serving clients nationwide with personalized care
                </p>
              </div>
            </div>

            <CallbackForm
              title="Request a Confidential Callback"
              description="Our admissions specialists are ready to help. Fill out this form and we'll contact you shortly."
            />
          </div>
        </div>
      </section>
    </>
  );
}
