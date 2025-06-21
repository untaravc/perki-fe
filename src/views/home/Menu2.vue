<template>
  <div class="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto px-2 md:px-0 mb-12">
    <div
      class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 via-orange-50 to-red-50 border border-orange-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 col-span-2 sm:col-span-1">
      <router-link to="#venue" class="block p-6 text-center">
        <div class="relative mb-4">
          <div
            class="w-20 h-20 mx-auto rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
            <unicon name="location-pin-alt" fill="#e02523" width="36px" height="36px"></unicon>
          </div>
          <div
            class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          </div>
        </div>
        <div class="text-base font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
          Venue
        </div>
        <div class="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view location
        </div>
      </router-link>
    </div>

    <!-- Abstract Submission Card -->
    <div
      class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 col-span-2 sm:col-span-1">
      <router-link to="/abstracts" class="block p-6 text-center">
        <div class="relative mb-4">
          <div
            class="w-20 h-20 mx-auto rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300">
            <unicon name="file-upload" fill="purple" width="36px" height="36px"></unicon>
          </div>
          <div
            class="absolute -top-1 -right-1 w-6 h-6 bg-purple-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300">
          </div>
        </div>
        <div class="text-base font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
          Abstract<br>Submission
        </div>
        <div class="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Submit your paper
        </div>
      </router-link>
    </div>
  </div>
</template>