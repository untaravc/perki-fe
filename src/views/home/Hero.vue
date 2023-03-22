<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="grid md:grid-cols-5 lg:gap-6 mb-12 mt-3">
            <div class="md:order-2 rounded md:col-span-2 relative bg-contain bg-center bg-no-repeat w-full"
                 style="background-image: url('https://picsum.photos/200/300')">
            </div>
            <div class="md:col-span-3 md:order-1">
                <div class="m-5 bg-blue-300 rounded-full py-1 px-8 italic text-sm inline-block">
                    Yogyakarta, 1-3 September 2023
                </div>
                <div class="mx-5 mb-5 text-4xl lg:text-6xl  font-bold text-blak">
                    Jogja Cardiology <br> Update
                </div>
                <div class="mx-5 mb-5 lg:w-9/12 text-lg text-slate-600">
                    Tailwind lets you conditionally apply utility classes in different states using variant modifiers
                </div>
                <div class="mx-5 flex">
                    <router-link to="/"
                                 class="text-white inline-block flex items-center bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-lg px-9 py-3 text-center">
                        <div class="mr-2">Daftar</div>
                        <unicon name="arrow-right" fill="white"></unicon>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>