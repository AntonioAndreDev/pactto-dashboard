<template>
	<DashboardLayout>
		<div class="flex flex-col gap-y-4">
			<heading1>Items to review</heading1>
			<p> There are no review requests sent to you </p>
			<div class="relative h-fit w-full">
				<iconify-icon
					class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
					icon="lucide:search"
				></iconify-icon>
				<Input class="w-full pl-8" type="text" placeholder="Search ..."/>
			</div>
		</div>
	</DashboardLayout>
</template>

<script setup lang="ts">

import {Input} from "@/components/ui/input";
import DashboardLayout from "@/components/layouts/DashboardLayout.vue";
import Heading1 from "@/components/headings/heading1.vue";
</script>