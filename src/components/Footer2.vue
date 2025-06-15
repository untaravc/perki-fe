<template>
  <footer class="gradient-bg text-gray-800 relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-white/10"></div>
    <div class="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500"></div>

    <!-- Floating Particles Effect -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 left-10 w-2 h-2 bg-orange-400 rounded-full animate-bounce-slow opacity-60"></div>
      <div class="absolute top-20 right-20 w-3 h-3 bg-amber-400 rounded-full animate-pulse opacity-40"></div>
      <div class="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-50"></div>
      <div class="absolute bottom-32 right-1/3 w-1 h-1 bg-orange-300 rounded-full animate-pulse opacity-70"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 py-10">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

        <!-- Kolom 1: Logo & Deskripsi -->
        <div class="lg:col-span-4 text-center lg:text-left">
          <div class="mb-4 flex items-center justify-center lg:justify-start">
            <img class="w-40 md:max-w-60"
              src="https://firebasestorage.googleapis.com/v0/b/unt-dev.firebasestorage.app/o/Perki%2FJCU25%2Flogo-jcu-25.webp?alt=media&token=95ab8bb9-bdc7-49d6-a11c-dc7db56760ce"
              alt="">
            <!-- <h3 class="text-2xl font-bold text-amber-800">Jogja Cardiology Update 2025</h3> -->
          </div>
          <p class="text-gray-600 leading-relaxed mb-4 text-sm">
            Jogja Cardiology Update (JCU) 2025 is an annual event by PERKI Jogja and FK-KMK UGM, bringing
            together experts to explore advances in cardiovascular emergencies.
          </p>
        </div>

        <!-- Kolom 2: Company Links -->
        <div class="text-center lg:text-left lg:col-span-2">
          <h4 class="text-md font-semibold mb-4 relative">
            <span class="relative z-10">Important Links</span>
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>
          </h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/contact-us" onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy" onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/licensing" onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/committee" onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Committee
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Kolom 3: Discover -->
        <div class="text-center lg:text-left lg:col-span-3">
          <h4 class="text-md font-semibold mb-4 relative">
            <span class="relative z-10">Discover</span>
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-orange-400 to-transparent"></div>
          </h4>
          <ul class="space-y-2">
            <li>
              <a href="https://perkijogja.com" target="_blank"
                class="text-gray-600 hover:text-gray-800 hover:translate-x-2 text-sm transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-orange-600 transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Perki Jogja
              </a>
            </li>
            <li>
              <a href="https://kardiologi.fk.ugm.ac.id" target="_blank"
                class="text-gray-600 hover:text-gray-800 hover:translate-x-2 text-sm transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-orange-600 transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Dept. Kardiologi dan Kedokteran Vaskular
              </a>
            </li>
            <li>
              <a href="https://jcu24.perki-jogja.com" target="_blank"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-orange-600 transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Jogja Cardiology Update 2024
              </a>
            </li>
            <li>
              <a href="https://jcu23.perki-jogja.com" target="_blank"
                class="text-gray-600 hover:text-gray-800 text-sm hover:translate-x-2 transform transition-all duration-300 inline-flex items-center group">
                <svg class="w-4 h-4 mr-2 group-hover:text-orange-600 transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4v12a2 2 0 002 2h8a2 2 0 002-2V8M7 8h10" />
                </svg>
                Jogja Cardiology Update 2023
              </a>
            </li>
          </ul>
        </div>

        <!-- Kolom 4: Follow Us -->
        <div class="text-center lg:text-left lg:col-span-3">
          <h4 class="text-md font-semibold mb-4 relative">
            <span class="relative z-10">Follow Us</span>
            <div class="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
          </h4>
          <p class="text-gray-600 mb-4 text-sm">Stay connected with us on social media</p>

          <!-- Social Media Links -->
          <div class="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            <!-- Instagram -->
            <a href="https://www.instagram.com/jogjacardiologyupdate" class="group relative" target="_blank">
              <div
                class="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover-lift group-hover:from-pink-400 group-hover:to-purple-500 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <span
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Instagram</span>
            </a>

            <!-- Twitter -->
            <a href="https://x.com/jcu_2025" class="group relative" target="_blank">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover-lift group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>
              <span
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Twitter</span>
            </a>

            <!-- Facebook -->
            <a href="https://web.facebook.com/jcu2022" class="group relative" target="_blank">
              <div
                class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover-lift group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Facebook</span>
            </a>

            <!-- TikTok -->
            <a href="https://www.tiktok.com/@jcu_2025" class="group relative" target="_blank">
              <div
                class="w-12 h-12 bg-gradient-to-br from-black to-gray-800 rounded-xl flex items-center justify-center hover-lift group-hover:from-gray-800 group-hover:to-gray-700 transition-all duration-300">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <span
                class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">TikTok</span>
            </a>
          </div>

        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-white/20 mt-4 pt-2">
        <div class="flex flex-col lg:flex-row justify-center items-center gap-4">
          <div class="text-sm">
            © 2025 Perki Jogja. All rights reserved.
          </div>
        </div>
      </div>
    </div>

    <!-- Back to Top Button -->
    <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="z-index: 10;"
      class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover-lift group shadow-lg">
      <svg class="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor"
        viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </footer>
</template>
<style scoped>
.glass-effect {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.glow-text {
  text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
}
</style>