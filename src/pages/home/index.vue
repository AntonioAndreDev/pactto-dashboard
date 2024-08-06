<template>
    <DashboardLayout>

        <div class="flex flex-col gap-y-12">
            <div>
                <header class="flex md:flex-row flex-col justify-between items-center mb-4">
                    <div class="w-full">
                        <heading1 class="text-left">Hey Antonio Andre, welcome to Pactto!</heading1>
                    </div>
                    <Select>
                        <SelectTrigger class="md:w-[180px] font-semibold">
                            <SelectValue placeholder="Fazer download"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Downloads</SelectLabel>
                                <SelectItem class="cursor-pointer" value="windows">
                                    Windows
                                </SelectItem>
                                <SelectItem class="cursor-pointer" value="mac">
                                    Mac
                                </SelectItem>
                                <SelectItem class="cursor-pointer" value="android">
                                    Android
                                </SelectItem>
                                <SelectItem class="cursor-pointer" value="ios">
                                    iOS
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </header>
                <nav>
                    <ul class="flex gap-y-4 flex-col">
                        <li>
						<span class="bg-custom-accent-ocean inline-block w-16 text-center py-0.5 px-1 rounded-md">DONE
						</span>
                            Open
                            your
                            inbox and
                            verify
                            your
                            email
                            address
                        </li>
                        <li>
						<span class="bg-custom-accent-ocean inline-block w-16 text-center py-0.5 px-1 rounded-md">TO
							DO</span>
                            Check
                            the
                            <button class="underline italic text-custom-accent-ocean">short video of Pactto in action
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div>
                <div class="flex md:flex-row flex-col justify-between items-center mb-4">
                    <div class="w-full">
                        <heading2 class="text-left">My uploads</heading2>
                    </div>
                    <div class="md:w-auto w-full">
                        <Button class="uppercase w-full md:mt-0 mt-4 flex gap-x-2 font-semibold text-black">
                            <iconify-icon
                                class="text-xl"
                                icon="lucide:plus"
                            >

                            </iconify-icon>
                            Upload new video
                        </Button>
                    </div>
                </div>
                <div class="relative h-fit w-full">
                    <iconify-icon
                        class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
                        icon="lucide:search"
                    ></iconify-icon>
                    <Input class="w-full pl-8" type="text" placeholder="Search ..."/>
                </div>
            </div>
        </div>
    </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import Heading2 from "@/components/headings/heading2.vue";

</script>