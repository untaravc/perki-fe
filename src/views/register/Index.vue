<template>
    <div class="max-w-screen-lg m-auto pt-16">
        <div class="grid gap-4 md:grid-cols-2 py-16 px-2">
            <div class="p-6 border-slate-100 bg-white rounded-xl">
                <div>
                    <img src="/storage/logo/jcu_color.png" alt="" class="h-16 mb-2">
                </div>
                <div class="font-semibold text-xl">Registrasi Akun</div>
                <div class="text-sm">Daftar dengan email atau dengan gmail dengan sekali klik.</div>
                <div class="grid gap-2 md:grid-cols-2 mt-3">
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900">Nama depan<span
                            class="text-red-600">*</span></label>
                        <input type="text" id="first_name" placeholder="ex. Jhon" autofocus
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                    <div>
                        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900">Nama belakang<span
                            class="text-red-600">*</span></label>
                        <input type="text" id="last_name" placeholder="ex. Doe"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="grid gap-2 md:grid-cols-2 mt-3">
                    <div>
                        <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Asal Kota, Provinsi
                            <span
                                class="text-red-600">*</span></label>
                        <input type="text" id="address" placeholder="ex. Sleman, DI Yogyakarta"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                    <div>
                        <label for="institution" class="block mb-2 text-sm font-medium text-gray-900">Institusi <span
                            class="text-red-600">*</span></label>
                        <input type="text" id="institution" placeholder="ex. Universitas Gadjah Mada"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Tipe Peserta<span
                        class="text-red-600">*</span></label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>== Pilih ==</option>
                        <option value="student">Mahasiswa / Residen</option>
                        <option value="medical">Perawat / Petugas Medis</option>
                        <option value="dr">Dokter Umum</option>
                        <option value="drsp">Dokter Spesialis</option>
                    </select>
                </div>
                <div class="mt-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">E-Mail <span
                        class="text-red-600">*</span></label>
                    <input type="text" id="email" placeholder="ex. mail@example.com"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="grid gap-2 md:grid-cols-2 mt-3">
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password <span
                            class="text-red-600">*</span></label>
                        <div class="relative">
                            <input :type="eye_icon ? 'text' : 'password'" id="password"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                            <button type="button" class="p-2 show-password absolute top-1/2 right-2 -translate-y-1/2"
                                    @click="eye_icon = !eye_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="eye_icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round" style="display: inline-block;">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path
                                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" v-if="!eye_icon" width="24" height="24"
                                     viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="3" y1="3" x2="21" y2="21"></line>
                                    <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83"></path>
                                    <path
                                        d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div>
                        <label for="password-confirmation" class="block mb-2 text-sm font-medium text-gray-900">Konfirmasi
                            Password <span
                                class="text-red-600">*</span></label>
                        <input type="password" id="password-confirmation"
                               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                    </div>
                </div>
                <div class="mt-3">
                    <div class="flex items-center">
                        <input id="checked-checkbox" v-model="referral_code" type="checkbox" value=""
                               class="w-4 h-4 text-blue-600 bg-gray-100 rounded">
                        <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900">Saya memiliki kode
                            Referal</label>
                    </div>
                </div>
                <div class="mt-3" v-if="referral_code">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Kode Referal
                        (opsional)</label>
                    <input type="text" id="email"
                           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-900 focus:border-blue-500 block w-full p-2.5">
                </div>
                <div class="mt-3">
                    <button @click="registerEmail"
                            class="text-white w-full mb-2 bg-blue-900 hover:bg-blue-800 font-medium rounded-full text-base px-8 py-2.5 text-center">
                        Daftar
                    </button>
                    <button
                        class="inline-block w-full text-base relative text-neutral-700 text-center px-8 py-2.5 text-center rounded-full border hover:bg-neutral-100">
                        <img src="/storage/img/google-logo.png"
                             class="absolute top-1/2 left-3 xl:left-4 -translate-y-1/2 aspect-square w-5 xl:w-7" alt="">
                        <span>Lanjutkan dengan Google</span>
                    </button>
                </div>
            </div>
            <div>
                <div class="p-6 border-slate-100 bg-white rounded-xl">
                    <div class="font-semibold text-xl mb-6">Pilih Paket</div>
                    <div class="text-slate-600 text-sm mb-2">
                        Anda masuk dalam kategori harga <b>dokter umum.</b>
                    </div>
                    <div class="rounded-lg bg-blue-50 p-4 border cursor-pointer hover:bg-blue-100 mb-3"
                         @click="selected = 1">
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="mb-3">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Workshop Full Day
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 1 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="text-sm ml-6 font-semibold text-blue-700">
                                    Rp 1.250.000
                                </div>
                            </div>
                            <div>
                                <unicon v-if="selected === 1" name="check" width="35" height="35"></unicon>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-blue-50 p-4 border cursor-pointer hover:bg-blue-100 mb-3"
                         @click="selected = 2">
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="mb-1">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Symposium
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 1 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Workshop Halfday
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 2 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="text-sm ml-6 font-semibold text-blue-700">
                                    Rp 3.000.000
                                </div>
                            </div>
                            <div>
                                <unicon v-if="selected === 2" name="check" width="35" height="35"></unicon>
                            </div>
                        </div>
                    </div>
                    <div class="rounded-lg bg-blue-50 p-4 border cursor-pointer hover:bg-blue-100 mb-3"
                         @click="selected = 3">
                        <div class="flex justify-between items-center">
                            <div>
                                <div class="mb-1">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Symposium
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 1 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Workshop Halfday
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 2 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="mb-1">
                                    <div class="font-semibold text-blue-900 flex">
                                        <unicon name="angle-right-b"></unicon>
                                        Workshop Fullday
                                    </div>
                                    <div class="ml-6 text-xs mb-1">
                                        Jumat, 3 September 2023 08:00 WIB
                                    </div>
                                </div>
                                <div class="text-sm ml-6 font-semibold text-blue-700">
                                    Rp 4.000.000
                                </div>
                            </div>
                            <div>
                                <unicon v-if="selected === 3" name="check" width="35" height="35"></unicon>
                            </div>
                        </div>
                    </div>
                    <div class="p-1">
                        <div class="flex justify-between">
                            <div class="text-md">Subtotal</div>
                            <div class="text-md text-right">Rp {{ $filters.currency(price) }}</div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-md">Potongan</div>
                            <div class="text-md text-right">Rp 50.000</div>
                        </div>
                        <div class="flex justify-between">
                            <div class="text-md">Early bird</div>
                            <div class="text-md text-right">Rp 250.000</div>
                        </div>
                        <div class="flex justify-between border-t">
                            <div class="text-lg font-semibold">Total</div>
                            <div class="text-lg font-semibold text-right">Rp {{ $filters.currency(price) }}</div>
                        </div>
                    </div>
                    <div>
                        <button disabled
                                class="text-slate-600 w-full mb-2 bg-slate-100 hover:bg-slate-200 rounded-full text-base px-8 py-2.5 text-center">
                            Lengkapi pendaftaran sebelum memilih paket.
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            eye_icon: false,
            referral_code: false,
            selected: 1,
        }
    },
    methods: {
        registerEmail() {

        }
    },
    computed: {
        price() {
            switch (this.selected) {
                case 1:
                    return 1250000 - 50000
                case 2:
                    return 3000000 - 50000
                case 3:
                    return 4000000 - 50000
            }
        }
    }
}
</script>