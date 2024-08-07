<template>
    <DashboardLayout>
        <div class="flex flex-col gap-y-4">
            <heading1>Reference video library</heading1>
            <div>
                <div class="flex md:flex-row gap-y-4 flex-col justify-between items-center mb-4">
                    <div class="w-full">
                        <heading2 class="text-left">Select a video</heading2>
                    </div>
                    <div class="md:w-auto w-full">
                        <Button class="uppercase w-full flex gap-x-2 font-semibold text-black">
                            <iconify-icon
                                class="text-xl"
                                icon="lucide:plus"
                            >

                            </iconify-icon>
                            Upload new video
                        </Button>
                    </div>
                </div>
                <p class="mt-8 mb-2">Videos uploaded to the reference video library can be used in side-by-side
                    comparisons,
                    or can be
                    shared with learners directly.</p>
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

import {Input} from "@/components/ui/input";
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
import Heading2 from "@/components/headings/heading2.vue";
import {Button} from "@/components/ui/button";
</script>