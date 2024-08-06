<template>
    <div>
        <TransitionRoot as="template" :show="sidebarOpen">
            <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                 enter-from="opacity-0" enter-to="opacity-100"
                                 leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
                                 leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-900/80"/>
                </TransitionChild>

                <div class="fixed inset-0 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                     enter-from="-translate-x-full" enter-to="translate-x-0"
                                     leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                     leave-to="-translate-x-full">
                        <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0"
                                             enter-to="opacity-100" leave="ease-in-out duration-300"
                                             leave-from="opacity-100" leave-to="opacity-0">
                                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                                        <span class="sr-only">Close sidebar</span>
                                        <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true"/>
                                    </button>
                                </div>
                            </TransitionChild>
                            <!-- Sidebar component, swap this element with another sidebar if you like -->
                            <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black px-6 pb-2">
                                <div class="mt-10 mb-4">
                                    <img class="h-8" src="/logos/pactto-logo-white.png" alt="Pactto Logo"/>
                                </div>
                                <nav class="flex flex-1 flex-col">
                                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                                        <li>
                                            <ul role="list" class="-mx-2 space-y-4">
                                                <li v-for="item in navigation" :key="item.name">
                                                    <RouterLink :to="item.href"
                                                                class="text-white text-base font-semibold hover:bg-custom-secondary-yellow hover:text-black flex p-2 rounded-md gap-x-2">
                                                        <component :is="item.icon"
                                                                   class="h-6 w-6"
                                                                   aria-hidden="true"/>
                                                        {{ item.name }}
                                                    </RouterLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div
                class="flex  grow flex-col gap-y-5 overflow-y-auto dark:accent-custom-primary-gray border-r dark:border-custom-secondary-gray px-6">
                <div class="mt-10 mb-4">
                    <img class="h-14" src="/logos/pactto-logo-white.png" alt="Pactto Logo"/>
                </div>
                <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                        <li>
                            <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                    <RouterLink :to="item.href"
                                                class="text-white font-semibold hover:bg-custom-secondary-yellow hover:text-black flex p-2 rounded-md gap-x-2">
                                        <component :is="item.icon"
                                                   class="h-6 w-6"
                                                   aria-hidden="true"/>
                                        {{ item.name }}
                                    </RouterLink>
                                </li>
                            </ul>
                        </li>
                        <li class="-mx-6 mt-auto">
                            <DropdownMenu>
                                <div>
                                    <DropdownMenuTrigger
                                        class="flex w-full items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 hover:bg-custom-primary-yellow hover:text-black">
                                        <img class="h-8 w-8 rounded-full bg-indigo-700"
                                             src="https://avatars.githubusercontent.com/u/117135970?v=4"
                                             alt=""/>
                                        <span class="sr-only">Your profile</span>
                                        <span aria-hidden="true">Antônio André</span>
                                    </DropdownMenuTrigger>
                                </div>
                                <DropdownMenuContent class="w-56">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <span>Option 1</span>
                                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <span>Option 2</span>
                                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <span>Option 3</span>
                                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <span>Option 4</span>
                                            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="sticky top-0 z-40 flex items-center gap-x-6 bg-black px-4 py-4 shadow-sm sm:px-6 lg:hidden">
            <button type="button" class="-m-2.5 p-2.5 text-white lg:hidden" @click="sidebarOpen = true">
                <span class="sr-only">Open sidebar</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
            </button>
            <div class="flex-1 text-sm font-semibold leading-6 text-white">Pactto Dashboard</div>
            <a href="#">
                <span class="sr-only">Your profile</span>
                <img class="h-8 w-8 rounded-full bg-indigo-700"
                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""/>
            </a>
        </div>

        <main class="py-10 lg:pl-72">
            <div class="px-4 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Dialog, DialogPanel, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {
    Bars3Icon,
    ChartPieIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    LinkIcon,
    VideoCameraIcon,
    EyeIcon,
    UserIcon,
    GlobeAmericasIcon,
    ArrowTrendingUpIcon
} from '@heroicons/vue/24/outline'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const navigation = [
    {name: 'Home', href: '/home', icon: HomeIcon, current: true},
    {name: 'Pacttos (Chats)', href: '/pacttos-chats', icon: UsersIcon, current: false},
    {name: 'Items to review', href: '/items-to-review', icon: FolderIcon, current: false},
    {name: 'Web link you created', href: '/web-links-you-created', icon: LinkIcon, current: false},
    {name: 'Personal information', href: '/personal-information', icon: UserIcon, current: false},
    {name: 'Review packages for sale', href: '/review-packages-for-sale', icon: ChartPieIcon, current: false},
    {name: 'Pactto website', href: '/pactto-website', icon: GlobeAmericasIcon, current: false},
    {name: 'Reference video library', href: '/reference-video-library', icon: VideoCameraIcon, current: false},
    {name: 'Subscription', href: '/subscription', icon: ArrowTrendingUpIcon, current: false},
    {name: 'Review settings', href: '/review-settings', icon: EyeIcon, current: false},
]

const sidebarOpen = ref(false)
</script>