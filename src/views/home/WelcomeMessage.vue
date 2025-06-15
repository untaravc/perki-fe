<!-- <template>
  <div class="px-2 mb-3 mt-20">
    <div class="max-w-screen-md m-auto py-6 shadow-md bg-white rounded-lg p-6 md:p-10">
      <div class="text-center text-xl font-semibold mb-5">Welcome Speech</div>
      <div className="float-right ml-4 mb-3 w-48 h-60 rounded-md bg-cover bg-center bg-no-repeat"
        style="transform: scaleX(-1); background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FSpeakers%2Fv2%2Ffirandi.saputra.png?alt=media&token=0443f747-8bd5-4b9a-bf4b-05e03cfda498');">
      </div>
      <div>
        <div className="text-gray-700 leading-relaxed text-sm">
          <div class="mb-3">Dear Professors, Doctors, and Healthcare Professionals,</div>
          <div class="mb-3">
            As the field of cardiovascular medicine continues to evolve, addressing emergencies with precision, speed,
            and contextual relevance has become more crucial than ever. In response to these growing demands, the
            Indonesian Heart Association - Jogjakarta Chapter (PERKI Jogja), in collaboration with the Faculty of
            Medicine, Public Health, and Nursing, Universitas Gadjah Mada (FK-KMK UGM), proudly presents Jogja
            Cardiology Update 2025.
          </div>
          <div class="mb-3">
            Carrying the theme “The Future of Cardiovascular Emergency: Aligning Global Progress with Local Needs”, this
            year’s JCU aims to bridge the latest international advances with the unique challenges and needs of local
            healthcare systems. The scientific meeting will once again be held in an offline format, providing the
            opportunity for direct interaction, active discussion, and meaningful networking.
          </div>
          <div class="mb-3">
            JCU 2025 will be held in conjunction with two significant events: the 8th Jogja International Cardiovascular
            Topic Series (JINCARTOS) 2025 and the 1st INA-PH Meeting, hosted by the Indonesian Working Group of
            Pulmonary Hypertension. This combined forum will explore a wide spectrum of critical topics—from frontline
            cardiovascular emergencies to the complexities of pulmonary hypertension—guided by national and
            international experts in their fields.
          </div>
          <div class="mb-3">
            We invite clinicians, researchers, healthcare professionals, and students to take part in this important
            gathering. Through plenary sessions, symposiums, workshops, and abstract presentations, participants will
            gain new insights, enhance clinical competence, and contribute to shaping the future of cardiovascular care.
          </div>
          <div class="mb-3">
            Jogja Cardiology Update 2025 will take place from August 1 to 3, 2025, in Jogjakarta. On behalf of the
            organizing committee, we look forward to welcoming you to this enriching and collaborative scientific event.

          </div>
          <div class="mb-3">
            <span>Warm regards,</span>
            <br>
            <span>Organizing Committee</span>
            <br>
            <span>Jogja Cardiology Update 2025</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template> -->

<template>
  <div class="px-2 mb-3 mt-20">
    <div class="max-w-screen-lg mx-auto">
      <!-- Main Container -->
      <div class="speech-card rounded-2xl shadow-xl overflow-hidden fade-in">
        <!-- Header Section -->
        <div class="bg-gradient-to-r from-brand-red to-brand-orange p-6 md:p-8">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg class="w-6 h-6 text-brand-red" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-white">Welcome Speech</h2>
              <p class=" text-sm mt-1 text-white">Jogja Cardiology Update 2025</p>
            </div>
          </div>
        </div>

        <!-- Content Section -->
        <div class="p-6 md:p-10 relative">
          <!-- Decorative Elements -->
          <div class="absolute top-0 right-0 w-20 h-20 bg-brand-yellow/10 rounded-full -translate-y-10 translate-x-10">
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Speaker Image -->
            <div class="lg:col-span-1 flex justify-center lg:justify-start">
              <div class="relative">
                <div
                  class="speaker-image w-56 h-72 md:w-64 md:h-80 rounded-2xl bg-cover bg-center bg-no-repeat shadow-lg">
                </div>
                <div
                  class="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                    <path
                      d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Speech Content -->
            <div class="lg:col-span-2">
              <div class="decorative-quote">
                <div class="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
                  <p class="font-medium text-brand-green">Dear Professors, Doctors, and Healthcare Professionals,</p>

                  <p>As the field of cardiovascular medicine continues to evolve, addressing emergencies with precision,
                    speed, and contextual relevance has become more crucial than ever. In response to these growing
                    demands, the Indonesian Heart Association - Jogjakarta Chapter (PERKI Jogja), in collaboration with
                    the Faculty of Medicine, Public Health, and Nursing, Universitas Gadjah Mada (FK-KMK UGM), proudly
                    presents <span class="highlight-text">Jogja Cardiology Update 2025</span>.</p>

                  <p>Carrying the theme <em class="text-brand-red font-semibold">"The Future of Cardiovascular
                      Emergency: Aligning Global Progress with Local Needs"</em>, this year's JCU aims to bridge the
                    latest international advances with the unique challenges and needs of local healthcare systems. The
                    scientific meeting will once again be held in an offline format, providing the opportunity for
                    direct interaction, active discussion, and meaningful networking.</p>

                  <p>JCU 2025 will be held in conjunction with two significant events: the <strong
                      class="text-brand-orange">8th Jogja International Cardiovascular Topic Series (JINCARTOS)
                      2025</strong> and the <strong class="text-brand-orange">1st INA-PH Meeting</strong>, hosted by the
                    Indonesian Working Group of Pulmonary Hypertension. This combined forum will explore a wide spectrum
                    of critical topics—from frontline cardiovascular emergencies to the complexities of pulmonary
                    hypertension—guided by national and international experts in their fields.</p>

                  <p>We invite clinicians, researchers, healthcare professionals, and students to take part in this
                    important gathering. Through plenary sessions, symposiums, workshops, and abstract presentations,
                    participants will gain new insights, enhance clinical competence, and contribute to shaping the
                    future of cardiovascular care.</p>

                  <p>Jogja Cardiology Update 2025 will take place from <strong class="text-brand-red">August 1 to 3,
                      2025</strong>, in Jogjakarta. On behalf of the organizing committee, we look forward to welcoming
                    you to this enriching and collaborative scientific event.</p>
                </div>
              </div>

              <!-- Signature Section -->
              <div class=" mt-2">
                <p class="font-medium">Warm regards,</p>
                <p class="font-semibold">Organizing Committee</p>
                <p class="font-bold text-brand-red">Jogja Cardiology Update 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.speech-card {
  background: linear-gradient(145deg, #ffffff 0%, #fefefe 100%);
  border-left: 6px solid #fcb426;
}

.speaker-image {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FSpeakers%2Fv2%2Ffirandi.saputra.png?alt=media&token=0443f747-8bd5-4b9a-bf4b-05e03cfda498');
}

.decorative-quote {
  position: relative;
}

.decorative-quote::before {
  content: '"';
  font-size: 4rem;
  color: #fcb426;
  position: absolute;
  top: -20px;
  left: -10px;
  font-family: serif;
  opacity: 0.3;
}

.highlight-text {
  background: linear-gradient(120deg, #fcb426 0%, #ee9052 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.signature-box {
  background: linear-gradient(135deg, #e9df86 0%, rgba(208, 240, 192, 0.3) 100%);
  border-left: 4px solid #5f6304;
}

.fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>