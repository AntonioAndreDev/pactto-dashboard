<template>
	<DashboardLayout>
		<div class="flex flex-col gap-y-4">
			<heading1>Web link you created</heading1>
			<p> There are no public web links you created </p>
			<div class="relative h-fit w-full">
				<iconify-icon
					class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
					icon="lucide:search"
				></iconify-icon>
				<Input class="w-full pl-8" type="text" placeholder="Search ..."/>
			</div>
			<p> There are no private web links you created </p>
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